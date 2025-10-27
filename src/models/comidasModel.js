import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const findAll = async () => {
    return await prisma.comidas.findMany({
        orderBy: { id: 'asc' }
    });
}

export const findOne = async (id) => {
    return await prisma.comidas.findUnique({
        where: { id: Number(id) }
    });
}

export const create = async (data) => {
  return await prisma.comidas.create({
    data: {
      nome: data.nome,
      tipo: data.tipo,
      preco: data.preco,
      descricao: data.descricao
    },
  });
}

export const deletar = async (id) => {
  return await prisma.comidas.delete({
    where: { id: Number(id) },
  });
};

export const atualizar = async (id, data) => {
  return await prisma.comidas.update({
    where: { id: Number(id) },
    data: {
      ...(data.nome && { nome: data.nome }),
      ...(data.tipo && { tipo: data.tipo }),
      ...(data.preco && { preco: data.preco }),
      ...(data.descricao && { descricao: data.descricao })
    }
  });
}