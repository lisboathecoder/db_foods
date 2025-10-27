import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
await prisma.comidas.createMany({
  data: [
    { nome: 'Risoto de Camarão', tipo: 'Prato Principal', preco: 45.0, descricao: 'Risoto cremoso com camarões salteados' },
    { nome: 'Filé Mignon ao Molho Madeira', tipo: 'Prato Principal', preco: 58.0, descricao: 'Medalhão de filé com redução de vinho' },
    { nome: 'Picanha Grelhada', tipo: 'Prato Principal', preco: 62.5, descricao: 'Picanha fatiada com farofa e vinagrete' },
    { nome: 'Spaghetti alla Carbonara', tipo: 'Prato Principal', preco: 38.0, descricao: 'Massa com creme, pancetta e parmesão' },
    { nome: 'Lasanha Bolonhesa', tipo: 'Prato Principal', preco: 35.0, descricao: 'Lasanha ao forno com molho bolonhesa' },
    { nome: 'Frango à Parmegiana', tipo: 'Prato Principal', preco: 32.0, descricao: 'Peito empanado coberto com molho e mussarela' },
    { nome: 'Bacalhau à Brás', tipo: 'Prato Principal', preco: 55.0, descricao: 'Bacalhau desfiado com batata palha e ovos' },
    { nome: 'Salmão Grelhado com Legumes', tipo: 'Prato Principal', preco: 49.0, descricao: 'Salmão suculento servido com legumes grelhados' },
    { nome: 'Moqueca de Peixe', tipo: 'Prato Principal', preco: 46.0, descricao: 'Cozido de peixe com leite de coco e dendê' },
    { nome: 'Camarão na Moranga', tipo: 'Prato Principal', preco: 65.0, descricao: 'Creme de camarão servido na moranga assada' },
    { nome: 'Strogonoff de Carne', tipo: 'Prato Principal', preco: 34.0, descricao: 'Cubos de carne ao molho cremoso com cogumelos' },
    { nome: 'Risoto de Funghi', tipo: 'Prato Principal', preco: 39.0, descricao: 'Risoto aromático com mix de funghi' },
    { nome: 'Nhoque ao Molho Gorgonzola', tipo: 'Prato Principal', preco: 36.0, descricao: 'Nhoque artesanal com molho de gorgonzola' },
    { nome: 'Costela Barbecue', tipo: 'Prato Principal', preco: 58.0, descricao: 'Costela suína assada com molho barbecue' },
    { nome: 'Polenta com Ragu', tipo: 'Prato Principal', preco: 30.0, descricao: 'Polenta cremosa servida com ragu de carne' },
    { nome: 'Medalhão de Filé com Bacon', tipo: 'Prato Principal', preco: 55.0, descricao: 'Medalhão envolto em bacon e molho demi-glace' },
    { nome: 'Espaguete ao Pomodoro', tipo: 'Prato Principal', preco: 28.0, descricao: 'Massa com molho de tomate, alho e manjericão' },
    { nome: 'Burrata com Tomate e Manjericão', tipo: 'Entrada', preco: 29.0, descricao: 'Burrata fresca com tomates confit e rúcula' },
    { nome: 'Salada Caesar com Frango', tipo: 'Salada', preco: 27.0, descricao: 'Alface, frango grelhado, croutons e parmesão' },
    { nome: 'Salada Mediterrânea', tipo: 'Salada', preco: 25.0, descricao: 'Mix de folhas, azeitonas, pepino e feta' },
    { nome: 'Bruschetta Tradicional', tipo: 'Entrada', preco: 18.0, descricao: 'Pão tostado com tomate, alho e manjericão' },
    { nome: 'Carpaccio de Carne', tipo: 'Entrada', preco: 33.0, descricao: 'Fatias finas de carne crua com alcaparras' },
    { nome: 'Tartar de Salmão', tipo: 'Entrada', preco: 42.0, descricao: 'Salmão fresco picado com temperos cítricos' },
    { nome: 'Sushi Misto (10 peças)', tipo: 'Prato Principal', preco: 48.0, descricao: 'Seleção de nigiris e makis' },
    { nome: 'Tempurá de Legumes', tipo: 'Entrada', preco: 26.0, descricao: 'Legumes empanados e fritos com molho' },
    { nome: 'Yakissoba de Frango', tipo: 'Prato Principal', preco: 31.0, descricao: 'Macarrão oriental salteado com legumes e frango' },
    { nome: 'Feijoada (porção)', tipo: 'Prato Principal', preco: 40.0, descricao: 'Feijoada completa com arroz, couve e laranja' },
    { nome: 'Bobó de Camarão', tipo: 'Prato Principal', preco: 44.0, descricao: 'Camarões em creme de mandioca e coco' },
    { nome: 'Paella de Mariscos', tipo: 'Prato Principal', preco: 69.0, descricao: 'Arroz com variados frutos do mar' },
    { nome: 'Quiche Lorraine', tipo: 'Entrada', preco: 24.0, descricao: 'Quiche com bacon e creme de ovos' },
    { nome: 'Omelete Especial', tipo: 'Prato Principal', preco: 22.0, descricao: 'Omelete recheada com queijo e ervas' },
    { nome: 'Hambúrguer Artesanal', tipo: 'Prato Principal', preco: 35.0, descricao: 'Burger bovino com queijo, alface e tomate' },
    { nome: 'Batata Frita (porção)', tipo: 'Acompanhamento', preco: 12.0, descricao: 'Porção de batatas crocantes' },
    { nome: 'Onion Rings', tipo: 'Acompanhamento', preco: 14.0, descricao: 'Anéis de cebola empanados e fritos' },
    { nome: 'Ratatouille', tipo: 'Prato Principal', preco: 29.0, descricao: 'Ensopado de legumes ao estilo francês' },
    { nome: 'Ceviche de Peixe', tipo: 'Entrada', preco: 37.0, descricao: 'Peixe marinado em cítricos com cebola roxa' },
    { nome: 'Polvo à Lagareiro', tipo: 'Prato Principal', preco: 70.0, descricao: 'Polvo assado com batatas e muito alho' },
    { nome: 'Filé de Tilápia ao Molho de Alcaparras', tipo: 'Prato Principal', preco: 38.0, descricao: 'Tilápia grelhada com molho ácido de alcaparras' },
    { nome: 'Frango ao Curry com Arroz', tipo: 'Prato Principal', preco: 33.0, descricao: 'Frango ao molho curry servido com arroz basmati' },
    { nome: 'Katsu Curry', tipo: 'Prato Principal', preco: 36.0, descricao: 'Lombo empanado servido com curry japonês' },
    { nome: 'Yakitori (6 espetos)', tipo: 'Petisco', preco: 28.0, descricao: 'Espetos de frango grelhados com molho tare' },
    { nome: 'Sopa de Cebola Gratinada', tipo: 'Entrada', preco: 19.0, descricao: 'Sopa rústica gratinada com queijo' },
    { nome: 'Fondue de Queijo (porção)', tipo: 'Prato Principal', preco: 58.0, descricao: 'Fondue de queijos servido com pães e acompanhamentos' },
    { nome: 'Fondue de Chocolate (sobremesa)', tipo: 'Sobremesa', preco: 32.0, descricao: 'Chocolate quente para mergulhar frutas e bolos' },
    { nome: 'Tiramisu', tipo: 'Sobremesa', preco: 20.0, descricao: 'Sobremesa italiana com café e mascarpone' },
    { nome: 'Pudim de Leite', tipo: 'Sobremesa', preco: 16.0, descricao: 'Pudim cremoso com calda de caramelo' },
    { nome: 'Cheesecake de Frutas Vermelhas', tipo: 'Sobremesa', preco: 22.0, descricao: 'Cheesecake clássico com coulis de frutas' },
    { nome: 'Brownie com Sorvete', tipo: 'Sobremesa', preco: 21.0, descricao: 'Brownie quente servido com sorvete de baunilha' },
    { nome: 'Suco Natural (Laranja)', tipo: 'Bebida', preco: 8.0, descricao: 'Suco 100% natural espremido na hora' },
    { nome: 'Caipirinha (dose)', tipo: 'Bebida', preco: 18.0, descricao: 'Coquetel brasileiro com limão e cachaça' }
  ],
});
}

main()
    .then(() => console.log('Seed concluído.'))
    .catch(e => {
        console.error('Erro no seed:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })