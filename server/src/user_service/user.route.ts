import express from "express";
import { UserController } from "./user.controller";

export class UserRoute {
  public router = express.Router();
  private userController: UserController;

  constructor(userController: UserController) {
    this.userController = userController;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/users", this.userController.getUsers);
    this.router.get("/users/:id", this.userController.getUserById);
  }
}
