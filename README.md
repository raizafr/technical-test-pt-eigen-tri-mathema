## Description

Technical test PT. EIGEN TRI MATHEMA.

Techstack yang saya gunakan dalam pengerjaan test:

- nestjs
- typescript
- mysql
- sequelize
- swagger(dokumentasi api)

## Installation

Clone project

```bash
$ git clone https://github.com/raizafr/technical-test-pt-eigen-tri-mathema.git
$ cd technical-test-pt-eigen-tri-mathema
```

Install semua dependencies

```bash
$ npm install
```

## Add .env file di root project

Create file .env, contoh field dan value sudah saya sediakan di .env.example

## Create Database

Create database dan tambahkan di file .env `# DB_NAME = namaDatabase`

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

server akan running [http://localhost:3000](http://localhost:3000).

## Swagger docs

akses dokumentasi api [http://localhost:3000/api/docs](http://localhost:3000/api/docs)

sebelum melakukan melakukan pinjaman buku, silahkan lakukan request pada endpoit `/api/v1/mockdata/members ` dan `/api/v1/mockdata/books`, saya membuat service ini untuk membuat mock data

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
