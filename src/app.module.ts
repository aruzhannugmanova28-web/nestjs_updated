import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from 'product/products.module';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot('mongodb+srv://user_0:user_0@cluster0.6e19qrz.mongodb.net/')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
