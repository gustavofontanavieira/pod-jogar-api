import { Module } from '@nestjs/common';
import { CategoriesController } from 'src/controllers/categories.controller';
import { PrismaService } from 'src/database/prisma.service';
import { CategoriesService } from 'src/services/categories.service';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService, PrismaService],
})
export class CategoriesModule {}
