import express from "express";
import { AuthController } from "./auth.controller";
import { AuthMiddleware } from "./auth.middleware";

export class AuthRoute {
  public router = express.Router();
  private authController: AuthController;
  private authMiddleware: AuthMiddleware;

  constructor(authController: AuthController, authMiddleware: AuthMiddleware) {
    this.authController = authController;
    this.authMiddleware = authMiddleware;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      "/register",
      this.authMiddleware.registerMiddleware,
      this.authController.registerController
    );

    this.router.post(
      "/login",
      this.authMiddleware.loginMiddleware,
      this.authController.loginController
    );
  }
}
