import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './product/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])], // Asegúrate de que Product está aquí
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
