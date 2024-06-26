import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  user_id!: string;

  @Column()
  user_name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column({ default: 1 })
  role!: number;

  @CreateDateColumn({ type: "datetime", default: () => "current_timestamp" })
  created_at!: Date;

  
}
