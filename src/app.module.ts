import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberModule } from './member/member.module';
import { DatabaseModule } from './database/database.module';
import { BookModule } from './book/book.module';
import { MockdataModule } from './mockdata/mockdata.module';
import { BorrowedBookModule } from './borrowed-book/borrowed-book.module';

@Module({
  imports: [MemberModule, DatabaseModule, BookModule, MockdataModule, BorrowedBookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
