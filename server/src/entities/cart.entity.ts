import { Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity("carts")
export class Cart {
  @PrimaryColumn()
  user_id!: string;

  @PrimaryColumn()
  product_id!: string;

  
  user!: User
}
