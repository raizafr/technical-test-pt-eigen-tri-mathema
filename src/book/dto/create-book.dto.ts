import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateBookDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  code: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  author: string;

  @ApiProperty()
  @IsNumber()
  stock: number;
}
