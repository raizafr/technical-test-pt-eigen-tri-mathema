import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateMemberDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  code: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
}
