import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
  ) {}

  findAll(): Promise<Order[]> {
    return this.ordersRepository.find({ relations: ['user', 'products'] });
  }

  findOne(id: number): Promise<Order> {
    return this.ordersRepository.findOne({
      where: { id },
      relations: ['user', 'products'],
    });
  }

  create(order: Order): Promise<Order> {
    return this.ordersRepository.save(order);
  }

  async remove(id: number): Promise<void> {
    await this.ordersRepository.delete(id);
  }

  async update(id: number, order: Partial<Order>): Promise<void> {
    await this.ordersRepository.update(id, order);
  }
}
