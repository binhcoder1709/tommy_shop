import connection from "../configs/orm.config";
import { User } from "../entities/user.entity";
import { UserService } from "../user_service/user.service";
import jwt from "jsonwebtoken";

export class AuthService {
  constructor(private readonly userService: UserService) {}
  registerService = async (data: Partial<User>): Promise<boolean> => {
    const user = await connection.getRepository(User).save(data);
    return !!user;
  };

  loginService = async (email: string): Promise<string | undefined> => {
    if (!process.env.TOKEN_SECRET) {
      throw new Error("Not Found Secret");
    }
    try {
      const user = await this.userService.findByEmail(email);
      const accessToken = jwt.sign(
        { user_id: user?.user_id, email: user?.email },
        process.env.TOKEN_SECRET,
        {
          expiresIn: "30m",
        }
      );
      return accessToken;
    } catch (error) {
      console.error(error);
    }
  };
}
