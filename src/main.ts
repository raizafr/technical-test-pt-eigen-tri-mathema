import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');
  const config = new DocumentBuilder()
    .setTitle('Documentasi API Technical Test PT. Eigen Tri Mathema')
    .setVersion('1.0')
    .setDescription(
      'sebelum melakukan uji coba lakukan dulu request pada Mock Data "/api/v1/mockdata/members" untuk membuat mock data member, dan "/api/v1/mockdata/books" untuk membuat mock data books ',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
