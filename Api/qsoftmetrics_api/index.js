import { PrismaClient } from "@prisma/client";
import { categorias } from "./datos.js";
const prisma = new PrismaClient();

async function main() {
  //crea las caracteristicas
  for (const categoria of categorias) {
    const cat = await prisma.caracteristica.create({
      data: {
        nombre: categoria.nombre,
      },
    });
    for (const subcategoria of categoria.subcategorias) {
      const subcat = await prisma.subcaracteristica.create({
        data: {
          nombre: subcategoria.nombre,
          caracteristica_id: cat.id_caracteristica,
        },
      });
      await prisma.pregunta.create({
        data: {
          pregunta: subcategoria.pregunta,
          subcaracteristica_id: subcat.id_subcaracteristica,
          tipo_pregunta: 1,
        },
      });
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
