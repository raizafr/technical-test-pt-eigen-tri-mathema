import { Controller, Post, Body, Res } from '@nestjs/common';
import { BorrowedBookService } from './borrowed-book.service';
import { CreateBorrowedBookDto } from './dto/create-borrowed-book.dto';
import { Response } from 'express';

@Controller('borrowed-book')
export class BorrowedBookController {
  constructor(private readonly borrowedBookService: BorrowedBookService) {}

  @Post('new')
  newBorrowed(
    @Body() createBorrowedBookDto: CreateBorrowedBookDto,
    @Res() res: Response,
  ) {
    return this.borrowedBookService.newBorrowed(createBorrowedBookDto, res);
  }

  @Post('return')
  returnBorrowed(
    @Body() createBorrowedBookDto: CreateBorrowedBookDto,
    @Res() res: Response,
  ) {
    return this.borrowedBookService.returnBorrowed(createBorrowedBookDto, res);
  }
}
