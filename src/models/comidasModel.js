import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const findAll = async () => {
    return await prisma.comidas.findMany({
        orderBy: { nome: 'asc' }
    });
}

export const findOne = async (id) => {
    return await prisma.comidas.findUnique({
        where: { id: Number(id) }
    });
}