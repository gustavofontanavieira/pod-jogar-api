import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async listCategories() {
    try {
      return await this.prisma.categories.findMany();
    } catch (error) {
      console.log(error.message);
      return 'Erro ao listar categorias';
    }
  }
}
