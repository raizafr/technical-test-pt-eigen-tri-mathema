import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import { memberProviders } from './member.providers';

@Module({
  controllers: [MemberController],
  providers: [MemberService, ...memberProviders],
})
export class MemberModule {}
