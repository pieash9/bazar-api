import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class UserSigninDto {
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Please provide a valid email' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(5, { message: 'Password must be at least 5 characters long' })
  password: string;
}
