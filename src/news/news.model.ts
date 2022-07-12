import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { CategoriesModel } from '../categories/categories.model';

@Table({ tableName: 'News', createdAt: false, updatedAt: false })
export class NewsModel extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  image: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  date: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  shortDescription: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  likesQuantity: number;

  @ForeignKey(() => CategoriesModel)
  @Column({ type: DataType.INTEGER })
  categoryId: number;

  @BelongsTo(() => CategoriesModel)
  category: CategoriesModel;
}
