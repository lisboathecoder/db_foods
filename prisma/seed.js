import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
await prisma.comidas.createMany({
    data: [
        { nome: 'Arroz', tipo: 'Cereais', preco: 5.5, descricao: 'Arroz branco cozido' },
        { nome: 'Feijão', tipo: 'Leguminosas', preco: 7.0, descricao: 'Feijão preto temperado' },
        { nome: 'Maçã', tipo: 'Frutas', preco: 3.25, descricao: 'Maçã vermelha' },
    ],
});
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