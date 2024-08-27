import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { UserSigninDto } from './user-signin.dto';

export class UserSignUpDto extends UserSigninDto {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'Name must be a string' })
  name: string;
}
