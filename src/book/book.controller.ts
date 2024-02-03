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

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post('create')
  createNewBook(@Body() createBookDto: CreateBookDto, @Res() res: Response) {
    return this.bookService.createNewBook(createBookDto, res);
  }

  @Delete(':code/delete')
  deleteBook(@Param() deleteBookDto: DeleteBookDto, @Res() res: Response) {
    return this.bookService.deleteBook(deleteBookDto, res);
  }

  @Get('all')
  allBook(@Res() res: Response) {
    return this.bookService.allBook(res);
  }

  @Get('exist')
  existBook(@Res() res: Response) {
    return this.bookService.existBook(res);
  }
}
