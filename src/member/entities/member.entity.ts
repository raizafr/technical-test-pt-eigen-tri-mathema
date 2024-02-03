import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { BorrowedBook } from 'src/borrowed-book/entities/borrowed-book.entity';

@Table
export class Member extends Model {
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  code: string;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.DATE, allowNull: true })
  penalty: Date;

  @HasMany(() => BorrowedBook)
  borrowedBooks: BorrowedBook[];
}
