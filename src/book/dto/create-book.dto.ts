import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  code: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  title: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  author: string;

  @IsNumber()
  stock: number;
}
