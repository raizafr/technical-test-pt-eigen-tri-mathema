import { IsNotEmpty, MinLength } from 'class-validator';

export class DeleteMemberDto {
  @IsNotEmpty()
  @MinLength(4)
  code: string;
}
