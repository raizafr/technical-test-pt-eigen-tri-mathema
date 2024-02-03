import { Controller, Get, Res } from '@nestjs/common';
import { MockdataService } from './mockdata.service';
import { Response } from 'express';

@Controller('mockdata')
export class MockdataController {
  constructor(private readonly mockdataService: MockdataService) {}

  @Get('members')
  createMockMember(@Res() res: Response) {
    return this.mockdataService.createMockMember(res);
  }

  @Get('books')
  createMockBook(@Res() res: Response) {
    return this.mockdataService.createMockBook(res);
  }
}
