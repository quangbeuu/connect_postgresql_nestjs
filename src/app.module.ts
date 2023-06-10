import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';

import { PostgresqlModule } from './database/postgresql/postgresql.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // isGlobal: true => Khiến cho các thuộc tính .env ko cần phải import mỗi khi dùng
    }),
    PostgresqlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
