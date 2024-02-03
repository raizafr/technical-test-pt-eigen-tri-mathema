import { Module } from '@nestjs/common';
import { BorrowedBookService } from './borrowed-book.service';
import { BorrowedBookController } from './borrowed-book.controller';
import { borrowedBookProviders } from './borrowed-book.providers';
import { memberProviders } from 'src/member/member.providers';
import { bookProviders } from 'src/book/book.providers';
import { MemberService } from 'src/member/member.service';
import { BookService } from 'src/book/book.service';

@Module({
  controllers: [BorrowedBookController],
  providers: [
    BorrowedBookService,
    ...borrowedBookProviders,
    ...memberProviders,
    ...bookProviders,
    MemberService,
    BookService,
  ],
})
export class BorrowedBookModule {}
