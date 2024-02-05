import { Sequelize } from 'sequelize-typescript';
import { Member } from 'src/member/entities/member.entity';
import { Book } from 'src/book/entities/book.entity';
import { BorrowedBook } from 'src/borrowed-book/entities/borrowed-book.entity';
import { config } from 'dotenv';
config();

const host = process.env.DB_HOST;
const port = parseInt(process.env.DB_PORT, 10);
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: host,
        port: port ?? 3306,
        username: username,
        password: password,
        database: database,
      });
      sequelize.addModels([Member, Book, BorrowedBook]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
