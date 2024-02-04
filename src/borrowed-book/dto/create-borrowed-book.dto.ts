import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBorrowedBookDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  memberId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  bookId: number;
}
