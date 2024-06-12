import { IsEmail, IsNumber, IsString, Length, Max } from "class-validator";

interface IRegister {
  user_name: string;
  email: string;
  password: string;
  role: number;
}

export class RegisterDto implements IRegister {
  @IsString()
  @Length(20)
  user_name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @Length(100)
  password: string;

  @IsNumber()
  @Max(2)
  role: number;

  constructor(
    user_name: string,
    email: string,
    password: string,
    role: number
  ) {
    this.user_name = user_name;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}
