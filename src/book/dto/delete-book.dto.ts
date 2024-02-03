import { IsNotEmpty, MinLength } from 'class-validator';

export class DeleteBookDto {
  @IsNotEmpty()
  @MinLength(5)
  code: string;
}
