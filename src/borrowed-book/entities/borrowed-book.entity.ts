import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Book } from 'src/book/entities/book.entity';
import { Member } from 'src/member/entities/member.entity';

@Table
export class BorrowedBook extends Model {
  @ForeignKey(() => Member)
  @Column
  memberId: number;

  @BelongsTo(() => Member)
  member: Member;

  @ForeignKey(() => Book)
  @Column
  bookId: number;

  @BelongsTo(() => Book)
  book: Book;

  @Column
  borrowDate: Date;

  @Column
  returnDate: Date;
}
