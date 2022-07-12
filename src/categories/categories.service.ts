import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CategoriesModel } from './categories.model';
import { NewsService } from '../news/news.service';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(CategoriesModel)
    private categoriesRepo: typeof CategoriesModel,
    private newsService: NewsService,
  ) {}

  async GetCategories() {
    const categories = await this.categoriesRepo.findAll();

    if (!categories) return { message: 'No categories found' };

    return categories;
  }

  getNewsByCategory(categoryId: number, page: number) {
    return this.newsService.getNewsByCategory(categoryId, page);
  }
}
