import { Inject, Injectable } from '@nestjs/common';
import { Response } from 'express';
import { Book } from 'src/book/entities/book.entity';
import { Member } from 'src/member/entities/member.entity';

@Injectable()
export class MockdataService {
  constructor(
    @Inject('MEMBER_REPOSITORY') private memberRepository: typeof Member,
    @Inject('BOOK_REPOSITORY') private bookRepository: typeof Book,
  ) {}

  async createMockMember(res: Response) {
    const mockData = [
      {
        code: 'M001',
        name: 'Angga',
      },
      {
        code: 'M002',
        name: 'Ferry',
      },
      {
        code: 'M003',
        name: 'Putri',
      },
    ];
    try {
      const insertMockMembers =
        await this.memberRepository.bulkCreate(mockData);
      return res.status(201).json({
        message: 'create mock data member successfully',
        data: insertMockMembers,
      });
    } catch (err) {
      return res.status(400).json(err.errors);
    }
  }

  async createMockBook(res: Response) {
    const mockData = [
      {
        code: 'JK-45',
        title: 'Harry Potter',
        author: 'J.K Rowling',
        stock: 1,
      },
      {
        code: 'SHR-1',
        title: 'A Study in Scarlet',
        author: 'Arthur Conan Doyle',
        stock: 1,
      },
      {
        code: 'TW-11',
        title: 'Twilight',
        author: 'Stephenie Meyer',
        stock: 1,
      },
      {
        code: 'HOB-83',
        title: 'The Hobbit, or There and Back Again',
        author: 'J.R.R. Tolkien',
        stock: 1,
      },
      {
        code: 'NRN-7',
        title: 'The Lion, the Witch and the Wardrobe',
        author: 'C.S. Lewis',
        stock: 1,
      },
    ];
    try {
      const insertMockBooks = await this.bookRepository.bulkCreate(mockData);
      return res.status(201).json({
        message: 'create mock data books successfully',
        data: insertMockBooks,
      });
    } catch (err) {
      return res.status(400).json(err.errors);
    }
  }
}
