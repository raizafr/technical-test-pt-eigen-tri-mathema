import { Inject, Injectable } from '@nestjs/common';
import { CreateBorrowedBookDto } from './dto/create-borrowed-book.dto';
import { Response } from 'express';
import { BorrowedBook } from './entities/borrowed-book.entity';
import { Member } from 'src/member/entities/member.entity';
import { Book } from 'src/book/entities/book.entity';
import { MemberService } from 'src/member/member.service';
import { BookService } from 'src/book/book.service';

@Injectable()
export class BorrowedBookService {
  constructor(
    @Inject('BORROWED_BOOK_REPOSITORY')
    private borrowedBookRepository: typeof BorrowedBook,
    @Inject('MEMBER_REPOSITORY') private memberRepository: typeof Member,
    @Inject('BOOK_REPOSITORY') private bookRepostitory: typeof Book,
    private memberService: MemberService,
    private bookService: BookService,
  ) {}

  async newBorrowed(
    createBorrowedBookDto: CreateBorrowedBookDto,
    res: Response,
  ) {
    const { memberId, bookId } = createBorrowedBookDto;
    try {
      const borrowDate = new Date();
      const returnDate = new Date(
        borrowDate.getTime() + 7 * 24 * 60 * 60 * 1000,
      );

      const existMember = await this.memberService.findMemberById(memberId);
      if (!existMember) {
        return res.status(404).json({
          message: `failed member id ${memberId} not exist.`,
        });
      }

      const existBook = await this.bookService.findBookById(bookId);
      if (!existBook) {
        return res.status(404).json({
          message: `failed book id ${bookId} not exist.`,
        });
      }
      if (existBook.stock === 0 || !existBook.stock) {
        return res.status(404).json({
          message: `The stock of the book with id ${bookId} has run out.`,
        });
      }
      if (borrowDate < existMember.penalty) {
        return res.status(409).json({
          message: `The member is unable to borrow books as they are still under penalty, which will end on ${existMember.penalty}`,
        });
      }

      const existBorrowdMe = await this.borrowedBookRepository.findOne({
        where: { memberId, bookId },
      });
      if (existBorrowdMe) {
        return res.status(409).json({
          message: `You have already borrowed this book. You cannot borrow the same book twice.`,
        });
      }

      const someoneBorrowd = await this.borrowedBookRepository.findOne({
        where: { bookId },
      });

      if (someoneBorrowd) {
        return res.status(409).json({
          message: `That book has already been borrowed by another member. You can't borrow it anymore.`,
        });
      }

      const borrowdAmount = await this.borrowedBookRepository.findAll({
        where: { memberId },
      });
      if (borrowdAmount.length >= 2) {
        return res.status(409).json({
          message: `Member with id ${memberId} has borrowed 2 books, the member cannot borrow any more books.`,
        });
      }
      const storeNewBorrowed = await this.borrowedBookRepository.create({
        memberId,
        bookId,
        borrowDate,
        returnDate,
      });
      await existBook.update({ stock: existBook.stock - 1 });
      res
        .status(201)
        .json({ message: 'create new borrowd book ', data: storeNewBorrowed });
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  async returnBorrowed(
    createBorrowedBookDto: CreateBorrowedBookDto,
    res: Response,
  ) {
    const { memberId, bookId } = createBorrowedBookDto;
    try {
      const existMember = await this.memberService.findMemberById(memberId);
      if (!existMember) {
        return res.status(404).json({
          message: `failed member id ${memberId} not exist.`,
        });
      }

      const existBook = await this.bookService.findBookById(bookId);
      if (!existBook) {
        return res.status(404).json({
          message: `failed book id ${bookId} not exist.`,
        });
      }
      const findBorrowed = await this.borrowedBookRepository.findOne({
        where: { memberId, bookId },
      });

      if (!findBorrowed) {
        return res.status(404).json({
          message: `Member with id ${memberId} has not borrowed book with ID ${bookId} yet.`,
        });
      }

      const returnDate = findBorrowed.returnDate;
      const currentDate = new Date();
      if (currentDate > returnDate) {
        const penalty = new Date(
          currentDate.getTime() + 3 * 24 * 60 * 60 * 1000,
        );
        await existMember.update({ penalty });
        await findBorrowed.destroy();
        await existBook.update({ stock: existBook.stock + 1 ?? 1 });
        return res.status(200).json({
          message: `The book has been returned.`,
          penalty: `Late return of books. Member is subject to penalty until ${penalty}`,
        });
      }

      await findBorrowed.destroy();
      await existBook.update({ stock: existBook.stock + 1 ?? 1 });
      return res.status(200).json({ message: `The book has been returned.` });
    } catch (err) {
      return res.status(400).json(err.errors);
    }
  }
}
