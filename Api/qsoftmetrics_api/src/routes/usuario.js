import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/usuario", async (req, res) => {
  const usuarios = await prisma.usuario.findMany();
  console.log(usuarios);
  res.send(usuarios);
});

router.post("/signup", async (req, res) => {
  const { nombre, correo, contra, rol } = req.body;
  const usuario = await prisma.usuario.create({
    data: {
      nombre,
      correo,
      contrase_a: contra,
      rol,
    },
  });
  res.send(usuario);
});

router.post("/login", async (req, res) => {
  const { correo, contra } = req.body;
  const usuario = await prisma.usuario.findFirst({
    where: {
      correo,
      contrase_a: contra,
    },
  });
  console.log("logeado");

  if (!usuario) {
    res.status(401).send("Usuario no encontrado");
    return;
  }

  res.send(usuario);
});

export default router;
