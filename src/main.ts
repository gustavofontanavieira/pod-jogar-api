import { NestFactory } from '@nestjs/core';
import main from 'prisma/seed';
import { AppModule } from './app.module';
import { PrismaClient } from '@prisma/client';
import { arrayBuffer } from 'stream/consumers';
const prisma = new PrismaClient();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const isClear = await prisma.categories.findMany();
  if (isClear == null || isClear == undefined || isClear.length === 0) {
    main();
  }
}
bootstrap();
