import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn("uuid")
  product_id!: string;

  @Column()
  product_name!: string;

  @Column()
  quantity!: number;

  @Column()
  price!: number;

  @Column()
  type!: string;

  @Column()
  description!: string;

  @CreateDateColumn({ type: "datetime", default: () => "current_timestamp" })
  created_at!: Date;
}
