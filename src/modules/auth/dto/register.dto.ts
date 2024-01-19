import { IsEmail, IsNotEmpty, MaxLength, MinLength, Matches} from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(32)
  username: string;

  @IsEmail()
  @MaxLength(128)
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(128)
  @Matches('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$')
  password: string;
}