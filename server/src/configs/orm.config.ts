import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { User } from "../entities/user.entity";

dotenv.config();

// const { DB_NAME, DB_USER, DB_PASSWORD, DB_PORT } = process.env;

// if (!DB_NAME || !DB_USER || !DB_PASSWORD || !DB_PORT) {
//   throw new Error("Please provide all necessary environment variables.");
// }

const connection = new DataSource({
  type: "mysql",
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  synchronize: true,
  logging: true,
  entities: [User],
});

export default connection;
