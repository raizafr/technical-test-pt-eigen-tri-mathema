import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBorrowedBookDto {
  @IsNotEmpty()
  @IsNumber()
  memberId: number;

  @IsNotEmpty()
  @IsNumber()
  bookId: number;
}
