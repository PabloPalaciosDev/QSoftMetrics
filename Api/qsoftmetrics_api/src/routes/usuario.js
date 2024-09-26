import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/usuario", async (req, res) => {
  const usuarios = await prisma.usuario.findMany();
  console.log(usuarios);
  res.send(usuarios);
});

export default router;
