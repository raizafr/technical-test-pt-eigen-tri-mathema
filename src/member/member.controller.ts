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
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Member')
@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @ApiOperation({ description: 'mengambil semua data member' })
  @Get('all')
  getAllMember(@Res() res: Response) {
    return this.memberService.getAllMember(res);
  }

  @ApiOperation({ description: 'menambah/membuat data member baru' })
  @Post('create')
  create(@Body() createMemberDto: CreateMemberDto, @Res() res: Response) {
    return this.memberService.create(createMemberDto, res);
  }

  @ApiOperation({ description: 'menghapus/delete data member' })
  @ApiParam({
    name: 'code',
    required: true,
    description: 'params ini adalah code member',
  })
  @Delete(':code/delete')
  deleteMember(
    @Param() deleteMemberDto: DeleteMemberDto,
    @Res() res: Response,
  ) {
    return this.memberService.deleteMember(deleteMemberDto, res);
  }
}
