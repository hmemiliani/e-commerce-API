import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Order } from '../../orders/order/order.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column()
  description: string;

  @ManyToMany(() => Order, (order) => order.products)
  orders: Order[];
}
