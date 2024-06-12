import { Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {
  constructor(private readonly userService: UserService) {}

  getUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
      const response = await this.userService.findAll();
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json("Internal Server Error");
    }
  };

  getUserById = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const response = await this.userService.findById(id);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json("Internal Server Error");
    }
  };
}
