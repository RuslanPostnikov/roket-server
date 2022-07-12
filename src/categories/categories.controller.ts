import { Controller, Get, Param, Query } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  getCategories() {
    return this.categoriesService.GetCategories();
  }

  @Get(':id')
  getNewsByCategory(
    @Param('id') categoryId: number,
    @Query('page') page: number,
  ) {
    return this.categoriesService.getNewsByCategory(categoryId, page);
  }
}
