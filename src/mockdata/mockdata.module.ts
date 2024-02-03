import { Module } from '@nestjs/common';
import { MockdataService } from './mockdata.service';
import { MockdataController } from './mockdata.controller';
import { MemberModule } from 'src/member/member.module';
import { memberProviders } from 'src/member/member.providers';
import { BookModule } from 'src/book/book.module';
import { bookProviders } from 'src/book/book.providers';

@Module({
  imports: [MemberModule, BookModule],
  controllers: [MockdataController],
  providers: [MockdataService, ...memberProviders, ...bookProviders],
})
export class MockdataModule {}
