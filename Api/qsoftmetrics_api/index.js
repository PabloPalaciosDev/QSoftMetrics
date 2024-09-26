const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.usuario.create({
    data: {
      nombre: "Alice",
      correo: "manolo@gmail.com",
      contrase_a: "1234",
      rol: "desarrollador",
    },
  });

  const allUsers = await prisma.usuario.findMany();
  console.log(allUsers);
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
