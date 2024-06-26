import { Request, Response } from "express";
import { AuthService } from "./auth.service";

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  registerController = async (req: Request, res: Response) => {
    try {
      const data = req.body;
      await this.authService.registerService(data);
      return res.status(201).json({ message: "Data Created Successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  };

  loginController = async (
    req: Request,
    res: Response
  ): Promise<Response | undefined> => {
    try {
      const { email } = req.body;
      const response = await this.authService.loginService(email);
      return res.status(200).json({ token: response });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  };
}
