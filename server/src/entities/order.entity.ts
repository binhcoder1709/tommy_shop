import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('orders')
export class Orders
{
    @PrimaryGeneratedColumn('uuid')
    order_id!: string

    @Column()
    
}