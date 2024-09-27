import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/software", async (req, res) => {
  const software = await prisma.software.findMany();
  console.log(software);
  res.send(software);
});
