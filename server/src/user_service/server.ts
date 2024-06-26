import express from "express";
import dotenv from "dotenv";
import connection from "../configs/orm.config";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { UserRoute } from "./user.route";

const app = express();
const port = process.env.USER_PORT || 3002;

dotenv.config();

app.use(express.json());

const userService = new UserService();
const userController = new UserController(userService);
const userRoute = new UserRoute(userController);

app.use("/api/v1", userRoute.router);

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
