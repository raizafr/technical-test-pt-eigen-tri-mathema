import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { bookProviders } from './book.providers';

@Module({
  controllers: [BookController],
  providers: [BookService, ...bookProviders],
})
export class BookModule {}
