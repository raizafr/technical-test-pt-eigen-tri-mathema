import { Sequelize } from 'sequelize-typescript';
import { Book } from 'src/book/entities/book.entity';
import { BorrowedBook } from 'src/borrowed-book/entities/borrowed-book.entity';
import { Member } from 'src/member/entities/member.entity';
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'db_technical_test',
      });
      sequelize.addModels([Member, Book, BorrowedBook]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
