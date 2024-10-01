import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

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
        respuesta: 3,
      })),
    }));

    return formattedData;
  };

  const preguntas = await getPreguntas();
  console.log(preguntas);
  res.send(preguntas);
});

router.post("/survey", async (req, res) => {
  const { software_id, usuario_id } = req.body;
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

export default router;
