import { NextFunction, Request, Response } from "express";
import { RegisterDto } from "./dto/register.dto";
import { plainToClass } from "class-transformer";
import { ValidationError, validate } from "class-validator";
import bcrypt from "bcrypt";
import { UserService } from "../user_service/user.service";
import { LoginDto } from "./dto/login.dto";

interface IPayload {
  user_id: string;
}

export class AuthMiddleware {
  constructor(private readonly userService: UserService) {}
  registerMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const createUserDTO = plainToClass(RegisterDto, req.body);

    const error: ValidationError[] = await validate(createUserDTO);

    if (error.length > 0) {
      const messages = error
        .map((err: ValidationError) =>
          Object.values(err.constraints ?? {}).join("?")
        )
        .join("?");
      return res.status(400).json({ message: messages });
    }

    const checkEmptyUser = await this.userService.findByEmail(req.body.email);
    if (checkEmptyUser) {
      return res.status(400).json({ message: "Data Exist" });
    }

    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(req.body.password, salt);
      req.body.password = hash;
    } catch (error) {
      return res.status(500).json({ message: "Error hashing password" });
    }

    next();
  };

  loginMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const loginDTO = plainToClass(LoginDto, req.body);
    const error: ValidationError[] = await validate(loginDTO);

    if (error.length > 0) {
      const messages = error
        .map((err: ValidationError) =>
          Object.values(err.constraints ?? {}).join("?")
        )
        .join("?");
      return res.status(400).json({ message: messages });
    }

    const user = await this.userService.findByEmail(req.body.email);
    if (!user) {
      return res.status(404).json({ message: "Not Found Data" });
    }

    if (user.role === 0) {
      return res.status(403).json({ message: "Account Blocked!" });
    }

    const comparePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!comparePassword) {
      return res.status(401).json({ message: "Invalid Password!" });
    }

    // const payload: IPayload = {
    //   user_id: user.user_id,
    // };

    next();
  };
}
