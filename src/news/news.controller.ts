import { Controller, Get, Param } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private newsService: NewsService) {}

  @Get(':id')
  getStory(@Param('id') id: number) {
    return this.newsService.getStory(id);
  }
}
