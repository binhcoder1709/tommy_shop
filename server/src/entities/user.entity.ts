import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn("uuid")
  user_id: string;

  @Column()
  user_name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: 1 })
  role: number;

  constructor(
    user_id: string,
    user_name: string,
    email: string,
    password: string,
    role: number
  ) {
    this.user_id = user_id;
    this.user_name = user_name;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}
