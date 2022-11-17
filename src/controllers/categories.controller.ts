import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from 'src/services/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get('list')
  async getAll() {
    return await this.categoriesService.listCategories();
  }
}
