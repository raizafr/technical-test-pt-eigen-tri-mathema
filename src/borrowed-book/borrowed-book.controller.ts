import { Controller, Post, Body, Res } from '@nestjs/common';
import { BorrowedBookService } from './borrowed-book.service';
import { CreateBorrowedBookDto } from './dto/create-borrowed-book.dto';
import { Response } from 'express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Pinjaman')
@Controller('borrowed-book')
export class BorrowedBookController {
  constructor(private readonly borrowedBookService: BorrowedBookService) {}

  @ApiOperation({ description: 'melakukan pinjaman buku' })
  @Post('new')
  newBorrowed(
    @Body() createBorrowedBookDto: CreateBorrowedBookDto,
    @Res() res: Response,
  ) {
    return this.borrowedBookService.newBorrowed(createBorrowedBookDto, res);
  }

  @ApiOperation({ description: 'melakukan pengembalian buku' })
  @Post('return')
  returnBorrowed(
    @Body() createBorrowedBookDto: CreateBorrowedBookDto,
    @Res() res: Response,
  ) {
    return this.borrowedBookService.returnBorrowed(createBorrowedBookDto, res);
  }
}
