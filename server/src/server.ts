import express from "express";
import dotenv from "dotenv";
import connection from "./configs/orm.config";
import { UserRoute } from "./user_service/user.route";
import { UserController } from "./user_service/user.controller";
import { UserService } from "./user_service/user.service";

const app = express();
const port = process.env.PORT || 3000;

const userController = new UserController(new UserService());
const userRoute = new UserRoute(userController);

dotenv.config();

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
// app.listen(port, (): void => {
//   console.log("server is running with port:", port);
// });
