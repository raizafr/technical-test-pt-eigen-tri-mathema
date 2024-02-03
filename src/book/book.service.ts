import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { Response } from 'express';
import { Book } from './entities/book.entity';
import { DeleteBookDto } from './dto/delete-book.dto';
import { Op } from 'sequelize';

@Injectable()
export class BookService {
  constructor(@Inject('BOOK_REPOSITORY') private bookRepository: typeof Book) {}
  async createNewBook(createBookDto: CreateBookDto, res: Response) {
    const { code, title, author, stock } = createBookDto;
    try {
      const storeBook = await this.bookRepository.create({
        code,
        title,
        author,
        stock,
      });
      return res
        .status(201)
        .json({ message: 'Successfully added book', data: storeBook });
    } catch (err) {
      return res.status(400).json(err.errors);
    }
  }

  async deleteBook(deleteBookDto: DeleteBookDto, res: Response) {
    const { code } = deleteBookDto;
    try {
      const findMember = await this.bookRepository.findOne({
        where: { code },
      });
      if (!findMember) {
        return res
          .status(404)
          .json({ message: `delete failed book code ${code} not found ` });
      }
      await findMember.destroy();
      return res.status(200).json({ message: 'resource delete successfully' });
    } catch (err) {
      return res.status(400).json(err.errors);
    }
  }

  async allBook(res: Response) {
    try {
      const books = await await this.bookRepository.findAll();
      return res.status(200).json({
        message: 'get all books successfully',
        total: books.length,
        data: books,
      });
    } catch (err) {
      return res.status(400).json(err.errors);
    }
  }

  async existBook(res: Response) {
    try {
      const books = await this.bookRepository.findAll({
        where: {
          stock: {
            [Op.and]: [{ [Op.not]: null }, { [Op.gt]: 0 }],
          },
        },
      });
      return res.status(200).json({
        message: 'get exist books successfully',
        total: books.length,
        data: books,
      });
    } catch (err) {
      return res.status(400).json(err.errors);
    }
  }

  async findBookById(bookId: number) {
    try {
      const book = await this.bookRepository.findOne({ where: { id: bookId } });
      return book;
    } catch (err) {
      throw err;
    }
  }
}
