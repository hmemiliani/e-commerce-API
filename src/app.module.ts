import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Product } from './products/product/product.entity';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { User } from './users/user/user.entity';
import { Order } from './orders/order/order.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', //password
      database: 'Ecommercedb',
      entities: [Product, User, Order],
      synchronize: false,
    }),
    AuthModule,
    ProductsModule,
    UsersModule,
    OrdersModule,
  ],
})
export class AppModule {}
