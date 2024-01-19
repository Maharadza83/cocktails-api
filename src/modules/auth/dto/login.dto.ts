import { IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(32)
  username: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(128)
  password: string;
}