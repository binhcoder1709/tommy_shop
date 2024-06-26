import connection from "../configs/orm.config";
import { User } from "../entities/user.entity";

export class UserService {
  findAll = async (): Promise<User[]> => {
    return await connection.getRepository(User).find();
  };

  findById = async (id: string): Promise<User | null> => {
    const user = await connection
      .getRepository(User)
      .findOneBy({ user_id: id });
    return user;
  };

  findByEmail = async (email: string): Promise<User | null> => {
    const user = await connection
      .getRepository(User)
      .findOneBy({ email: email });
    return user;
  };
}
