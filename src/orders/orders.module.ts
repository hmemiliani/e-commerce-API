import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order } from './order/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order])], // Asegúrate de que Order está aquí
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
