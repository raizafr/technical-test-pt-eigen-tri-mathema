import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { BorrowedBook } from 'src/borrowed-book/entities/borrowed-book.entity';

@Table
export class Book extends Model {
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  code: string;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING, allowNull: false })
  author: string;

  @Column({ type: DataType.INTEGER, allowNull: true })
  stock: number;

  @HasMany(() => BorrowedBook)
  borrowedBooks: BorrowedBook[];
}
