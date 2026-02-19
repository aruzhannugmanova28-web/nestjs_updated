import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from 'product/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
