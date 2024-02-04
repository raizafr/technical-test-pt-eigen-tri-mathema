import {
  Controller,
  Post,
  Body,
  Res,
  Delete,
  Param,
  Get,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Response } from 'express';
import { DeleteBookDto } from './dto/delete-book.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Book')
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @ApiOperation({ description: 'menambahkan/membuat data buku baru' })
  @Post('create')
  createNewBook(@Body() createBookDto: CreateBookDto, @Res() res: Response) {
    return this.bookService.createNewBook(createBookDto, res);
  }

  @ApiOperation({ description: 'menghapus data buku' })
  @Delete(':code/delete')
  deleteBook(@Param() deleteBookDto: DeleteBookDto, @Res() res: Response) {
    return this.bookService.deleteBook(deleteBookDto, res);
  }

  @ApiOperation({
    description:
      'mengambil semua data buku, baik yang masih ada stock, maupun stock 0',
  })
  @Get('all')
  allBook(@Res() res: Response) {
    return this.bookService.allBook(res);
  }

  @ApiOperation({
    description: 'mengambil data buku yang stocknya 1 atau lebih dari 1',
  })
  @Get('exist')
  existBook(@Res() res: Response) {
    return this.bookService.existBook(res);
  }
}
