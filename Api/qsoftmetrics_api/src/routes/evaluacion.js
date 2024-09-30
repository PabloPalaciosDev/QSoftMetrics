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
        nombre: subcategoria.nombre,
        pregunta: subcategoria.pregunta[0]?.pregunta || null, // Asumiendo que solo hay una pregunta por subcaracterística
      })),
    }));

    return formattedData;
  };

  const preguntas = await getPreguntas();
  console.log(preguntas);
  res.send(preguntas);
});

export default router;
