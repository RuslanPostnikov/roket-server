import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { NewsModel } from '../news/news.model';

@Table({ tableName: 'Categories', createdAt: false, updatedAt: false })
export class CategoriesModel extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  title: string;

  @HasMany(() => NewsModel)
  news: NewsModel[];
}
