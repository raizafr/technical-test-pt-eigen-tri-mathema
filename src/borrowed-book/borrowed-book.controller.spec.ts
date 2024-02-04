import { Test, TestingModule } from '@nestjs/testing';
import { BorrowedBookController } from './borrowed-book.controller';
import { BorrowedBookService } from './borrowed-book.service';
import { CreateBorrowedBookDto } from './dto/create-borrowed-book.dto';
import { Response } from 'express';
import { BookService } from '../book/book.service';
import { borrowedBookProviders } from './borrowed-book.providers';
import { memberProviders } from '../member/member.providers';
import { bookProviders } from '../book/book.providers';
import { MemberService } from '../member/member.service';

describe('BorrowedBookController', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let borrowedBookController: BorrowedBookController;
  let borrowedBookService: BorrowedBookService;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BorrowedBookController],
      providers: [
        BorrowedBookService,
        MemberService,
        BookService,
        ...borrowedBookProviders,
        ...memberProviders,
        ...bookProviders,
      ],
    }).compile();

    borrowedBookController = app.get<BorrowedBookController>(
      BorrowedBookController,
    );
    borrowedBookService = app.get<BorrowedBookService>(BorrowedBookService);
  });

  describe('newBorrowed', () => {
    it('harus memanggil method newBorrowed di BorrowedBookService dengan parameter yang benar', async () => {
      const createBorrowedBookDto = {} as CreateBorrowedBookDto;
      const mockResponse = {} as Response;
      const newBorrowedSpy = jest
        .spyOn(borrowedBookService, 'newBorrowed')
        .mockResolvedValue(mockResponse);
      await borrowedBookController.newBorrowed(
        createBorrowedBookDto,
        mockResponse as any,
      );
      expect(newBorrowedSpy).toHaveBeenCalledWith(
        createBorrowedBookDto,
        mockResponse,
      );
    });
  });

  describe('returnBorrowed', () => {
    it('harus memanggil method returnBorrowed di BorrowedBookService dengan parameter yang benar', async () => {
      const createBorrowedBookDto = {} as CreateBorrowedBookDto;
      const mockResponse = {} as Response;
      const returnBorrowedSpy = jest
        .spyOn(borrowedBookService, 'returnBorrowed')
        .mockResolvedValue(mockResponse);
      await borrowedBookController.returnBorrowed(
        createBorrowedBookDto,
        mockResponse as any,
      );
      expect(returnBorrowedSpy).toHaveBeenCalledWith(
        createBorrowedBookDto,
        mockResponse,
      );
    });
  });
});
