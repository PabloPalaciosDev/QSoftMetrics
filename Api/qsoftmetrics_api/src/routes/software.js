import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

const getRespuestasByEncuestaId = async (encuestaId) => {
  const respuestas = await prisma.respuesta.findMany({
    where: {
      encuesta_id: encuestaId,
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
    },
    pregunta: {
      subcaracteristica: respuesta.pregunta.subcaracteristica.nombre,
      caracteristica:
        respuesta.pregunta.subcaracteristica.caracteristica.nombre,
    },
  }));
};

router.get("/software", async (req, res) => {
  const software = await prisma.software.findMany();
  res.send(software);
});

router.get("/software/user/:id", async (req, res) => {
  const { id } = req.params;
  const software = await prisma.software.findMany({
    where: {
      usuario_id: parseInt(id),
    },
  });
  res.send(software);
});

router.get("/software/:id", async (req, res) => {
  const { id } = req.params;
  const software = await prisma.software.findUnique({
    where: {
      id_software: parseInt(id),
    },
  });
  res.send(software);
});

router.post("/software", async (req, res) => {
  const {
    nombre,
    version,
    tipo_software,
    descripcion,
    categorias,
    usuario_id,
  } = req.body;
  const software = await prisma.software.create({
    data: {
      nombre,
      version,
      tipo_software,
      descripcion,
      categorias_a_evaluar: categorias,
      usuario_id: usuario_id,
    },
  });
  res.send(software);
});

//obtiene todo los software que un usuario ah evaluado
router.get("/software/evaluaciones/:id", async (req, res) => {
  const { id } = req.params;
  const software = await prisma.encuesta.findMany({
    where: {
      usuario_id: parseInt(id),
    },
    include: {
      software: true,
    },
  });
  res.send(software);
});

//obtener toda las respuestas de un usuario
router.get("/software/respuestas/:id", async (req, res) => {
  const { id } = req.params;
  const respuestas = await getRespuestasByEncuestaId(parseInt(id));
  res.send(respuestas);
});

router.delete("/software/:id", async (req, res) => {
  const { id } = req.params;
  const software = await prisma.software.delete({
    where: {
      id_software: parseInt(id),
    },
  });
  res.send(software);
});

export default router;
