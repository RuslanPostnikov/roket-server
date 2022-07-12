import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoriesModel } from './categories.model';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { NewsModule } from '../news/news.module';

@Module({
  imports: [SequelizeModule.forFeature([CategoriesModel]), NewsModule],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
