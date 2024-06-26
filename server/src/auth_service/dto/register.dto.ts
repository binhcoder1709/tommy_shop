import { IsEmail, IsNumber, IsString, Length, Max, Min } from "class-validator";

// interface IRegister {
//   user_name: string;
//   email: string;
//   password: string;
//   role: number;
// }

export class RegisterDto {
  @IsString()
  @Length(5, 20)
  user_name!: string;

  @IsString()
  @IsEmail()
  email!: string;

  @IsString()
  @Length(7)
  password!: string;
}
