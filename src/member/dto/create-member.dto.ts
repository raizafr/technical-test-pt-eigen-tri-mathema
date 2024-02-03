import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateMemberDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  code: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}
