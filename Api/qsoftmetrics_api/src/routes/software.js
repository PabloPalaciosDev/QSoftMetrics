import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/software", async (req, res) => {
  const software = await prisma.software.findMany();
  console.log(software);
  res.send(software);
});

router.get("/software/:id", async (req, res) => {
  const { id } = req.params;
  const software = await prisma.software.findMany({
    where: {
      usuario_id: parseInt(id),
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
