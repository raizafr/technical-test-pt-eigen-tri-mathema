import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  Res,
  Get,
} from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { Response } from 'express';
import { DeleteMemberDto } from './dto/delete-member.dto';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get('all')
  getAllMember(@Res() res: Response) {
    return this.memberService.getAllMember(res);
  }

  @Post('create')
  create(@Body() createMemberDto: CreateMemberDto, @Res() res: Response) {
    return this.memberService.create(createMemberDto, res);
  }

  @Delete(':code/delete')
  deleteMember(
    @Param() deleteMemberDto: DeleteMemberDto,
    @Res() res: Response,
  ) {
    return this.memberService.deleteMember(deleteMemberDto, res);
  }
}
