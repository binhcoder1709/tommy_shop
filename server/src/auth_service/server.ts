import express from "express";
import dotenv from "dotenv";
import connection from "../configs/orm.config";
import { AuthRoute } from "./auth.route";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserService } from "../user_service/user.service";
import { AuthMiddleware } from "./auth.middleware";
import cors from "cors";

const app = express();
const port = process.env.AUTH_PORT || 3001;

dotenv.config();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

const userService = new UserService();
const authService = new AuthService(userService);
const authMiddleware = new AuthMiddleware(userService);
const authController = new AuthController(authService);

// Khởi tạo và sử dụng AuthRoute
const authRoute = new AuthRoute(authController, authMiddleware);
app.use("/api/v1/auth", authRoute.router);

connection
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });
