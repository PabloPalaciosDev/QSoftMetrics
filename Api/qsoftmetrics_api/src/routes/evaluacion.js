import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

const getRespuestasBysoftware = async (software_id, nombre) => {
  const respuestas = await prisma.respuesta.findMany({
    where: {
      encuesta: {
        software_id: software_id,
      },
      pregunta: {
        subcaracteristica: {
          caracteristica: {
            nombre: nombre,
          },
        },
      },
    },
    include: {
      encuesta: {
        include: {
          usuario: true, // Incluye los datos del usuario
        },
      },
      pregunta: {
        include: {
          subcaracteristica: {
            include: {
              caracteristica: true, // Incluye el nombre de la característica
            },
          },
        },
      },
    },
  });

  return respuestas.map((respuesta) => ({
    respuesta: respuesta.respuesta,
    comentario: respuesta.comentario,
    usuario: {
      nombre: respuesta.encuesta.usuario.nombre,
      correo: respuesta.encuesta.usuario.correo,
      rol: respuesta.encuesta.usuario.rol,
    },
    pregunta: {
      subcaracteristica: respuesta.pregunta.subcaracteristica.nombre,
      caracteristica:
        respuesta.pregunta.subcaracteristica.caracteristica.nombre,
    },
  }));
};

router.get("/preguntas", async (req, res) => {
  const getPreguntas = async () => {
    const preguntas = await prisma.caracteristica.findMany({
      include: {
        subcaracteristica: {
          include: {
            pregunta: true,
          },
        },
      },
    });

    // Formatear los datos en la estructura solicitada
    const formattedData = preguntas.map((caracteristica) => ({
      nombre: caracteristica.nombre,
      subcategorias: caracteristica.subcaracteristica.map((subcategoria) => ({
        id_pregunta: subcategoria.pregunta[0]?.id_pregunta,
        nombre: subcategoria.nombre,
        pregunta: subcategoria.pregunta[0]?.pregunta || null,
        comentario: "",
      })),
    }));

    return formattedData;
  };

  const preguntas = await getPreguntas();
  res.send(preguntas);
});

router.post("/survey", async (req, res) => {
  const { software_id, usuario_id } = req.body;
  console.log(software_id, usuario_id);
  const existe = await prisma.encuesta.findFirst({
    where: {
      software_id: parseInt(software_id),
      usuario_id: parseInt(usuario_id),
    },
  });

  if (existe) {
    res.send(existe);
  } else {
    const nuevaEncuesta = await prisma.encuesta.create({
      data: {
        software_id: parseInt(software_id),
        usuario_id: parseInt(usuario_id),
      },
    });
    res.send(nuevaEncuesta);
  }
});

router.post("/respuesta", async (req, res) => {
  const respuestas = req.body;
  const nuevaRespuesta = await prisma.respuesta.createMany({
    data: respuestas,
  });
  res.send(nuevaRespuesta);
});

router.get("/resultados/:id/:software", async (req, res) => {
  const { id, software } = req.params;
  const softwareData = await getRespuestasBysoftware(parseInt(id), software);
  res.send(softwareData);
});

export default router;
