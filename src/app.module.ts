import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { VendorsModule } from './vendors/vendors.module';
import { UsersModule } from './users/users.module';
import { CartsModule } from './carts/carts.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductsModule,
    VendorsModule,
    UsersModule,
    CartsModule,
    MongooseModule.forRoot('mongodb://localhost/nest-backend-assignment'),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
