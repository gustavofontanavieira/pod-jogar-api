import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const Categories = [
  'Ação',
  'Aventura',
  'MOBA',
  'RPG',
  'Multiplayer',
  'Singleplayer',
  'Mundo aberto',
  'Primeira pessoa',
  'Terror',
  'Hack and slash',
  'Souls like',
  'Corrida',
  'Romance visual',
  'Luta',
  'Esportes',
  'Estratégia',
  'Sobrevivência',
  'Quebra cabeça',
  'Anime',
  'Retrô',
  'FPS',
  'Battle Royale',
  'Metroidvania',
];

async function main() {
  await prisma.categories.createMany({
    data: Categories.map((data) => {
      return { name: data };
    }),
  });
}
export default main;
