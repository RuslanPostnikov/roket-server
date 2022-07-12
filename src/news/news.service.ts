import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { NewsModel } from './news.model';

@Injectable()
export class NewsService {
  constructor(@InjectModel(NewsModel) private newsRepo: typeof NewsModel) {}

  async getStory(id: number) {
    const story = await this.newsRepo.findByPk(id);

    if (!story) return { message: 'No story found' };

    return story;
  }

  async getNewsByCategory(categoryId: number, page: number) {
    const limit = 10;
    const data = await this.newsRepo.findAndCountAll({
      where: { categoryId },
      limit,
      offset: page * limit,
    });

    if (!data.rows.length)
      return { message: 'No news found for selected category' };

    return {
      totalPages: Math.ceil(data.count / limit),
      content: data.rows,
    };
  }
}
