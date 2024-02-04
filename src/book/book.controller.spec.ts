import { Test, TestingModule } from '@nestjs/testing';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { bookProviders } from './book.providers';
import { CreateBookDto } from './dto/create-book.dto';
import { Response } from 'express';
import { DeleteBookDto } from './dto/delete-book.dto';

describe('BookController', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let bookController: BookController;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let bookService: BookService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
      providers: [BookService, ...bookProviders],
    }).compile();

    bookController = app.get<BookController>(BookController);
    bookService = app.get<BookService>(BookService);
  });

  describe('createNewBook', () => {
    it('harus memanggil method createNewBook di BookService dengan parameter yang benar', async () => {
      const createBookDto = {} as CreateBookDto;
      const mockResponse = {} as Response;
      const createSpy = jest
        .spyOn(bookService, 'createNewBook')
        .mockResolvedValue(mockResponse);
      await bookController.createNewBook(createBookDto, mockResponse as any);
      expect(createSpy).toHaveBeenCalledWith(createBookDto, mockResponse);
    });
  });

  describe('deleteBook', () => {
    it('harus memanggil method deleteBook di BookService dengan parameter yang benar', async () => {
      const deleteBookDto = {} as DeleteBookDto;
      const mockResponse = {} as Response;
      const createSpy = jest
        .spyOn(bookService, 'deleteBook')
        .mockResolvedValue(mockResponse);
      await bookController.deleteBook(deleteBookDto, mockResponse as any);
      expect(createSpy).toHaveBeenCalledWith(deleteBookDto, mockResponse);
    });
  });

  describe('allBook', () => {
    it('harus memanggil method allBook di BookService dengan parameter yang benar', async () => {
      const mockResponse = {} as Response;
      const createSpy = jest
        .spyOn(bookService, 'allBook')
        .mockResolvedValue(mockResponse);
      await bookController.allBook(mockResponse as any);
      expect(createSpy).toHaveBeenCalledWith(mockResponse);
    });
  });

  describe('existBook', () => {
    it('harus memanggil method existBook di BookService dengan parameter yang benar', async () => {
      const mockResponse = {} as Response;
      const createSpy = jest
        .spyOn(bookService, 'existBook')
        .mockResolvedValue(mockResponse);
      await bookController.existBook(mockResponse as any);
      expect(createSpy).toHaveBeenCalledWith(mockResponse);
    });
  });
});
