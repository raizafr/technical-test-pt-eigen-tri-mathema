import { BorrowedBook } from './entities/borrowed-book.entity';

export const borrowedBookProviders = [
  {
    provide: 'BORROWED_BOOK_REPOSITORY',
    useValue: BorrowedBook,
  },
];
