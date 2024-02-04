import { Controller, Get, Res } from '@nestjs/common';
import { MockdataService } from './mockdata.service';
import { Response } from 'express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Mock Data')
@Controller('mockdata')
export class MockdataController {
  constructor(private readonly mockdataService: MockdataService) {}

  @ApiOperation({
    description:
      'create mock data members untuk melakukan uji coba."jika running di local, sebelum melakukan peminjaman lakukan request ke endpoint ini"',
  })
  @Get('members')
  createMockMember(@Res() res: Response) {
    return this.mockdataService.createMockMember(res);
  }

  @ApiOperation({
    description:
      'create mock data books untuk melakukan uji coba.."jika running di local, sebelum melakukan peminjaman lakukan request ke endpoint ini"',
  })
  @Get('books')
  createMockBook(@Res() res: Response) {
    return this.mockdataService.createMockBook(res);
  }
}
