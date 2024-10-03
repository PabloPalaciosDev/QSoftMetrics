import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

const getSoftwareDataWithRespuestaCount = async (softwareId) => {
  const softwareData = await prisma.software.findUnique({
    where: {
      id_software: softwareId,
    },
    select: {
      nombre: true, // Nombre del software
      encuesta: {
        select: {
          respuesta: {
            select: {
              respuesta: true, // El valor de la respuesta (0-5)
              pregunta: {
                select: {
                  subcaracteristica: {
                    select: {
                      nombre: true, // Nombre de la subcaracterística
                      caracteristica: {
                        select: {
                          id_caracteristica: true, // ID de la característica
                          nombre: true, // Nombre de la característica
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  // Estructura para contar las respuestas
  const respuestaCounts = {};
  const caracteristicas = [];

  softwareData.encuesta.forEach((encuesta) => {
    encuesta.respuesta.forEach((respuestaData) => {
      const { respuesta, pregunta } = respuestaData;
      const caracteristica = pregunta.subcaracteristica.caracteristica.nombre;
      const subcaracteristica = pregunta.subcaracteristica.nombre;

      // Inicializamos si no existe
      if (!respuestaCounts[caracteristica]) {
        respuestaCounts[caracteristica] = {};
      }
      if (!respuestaCounts[caracteristica][subcaracteristica]) {
        respuestaCounts[caracteristica][subcaracteristica] = {
          0: 0,
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
        };
      }

      // Contamos las respuestas
      respuestaCounts[caracteristica][subcaracteristica][respuesta]++;
    });
  });

  return {
    nombre_software: softwareData.nombre,
    respuestaCounts,
  };
};

router.get("/resultados/:id", async (req, res) => {
  const { id } = req.params;
  const softwareData = await getSoftwareDataWithRespuestaCount(parseInt(id));
  res.send(softwareData);
});

export default router;
