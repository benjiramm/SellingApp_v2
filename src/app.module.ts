import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { StaffModule } from './staff/staff.module';
import { ItemsModule } from './items/items.module';
import { LogModule } from './logs/log.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env"
    }),
    MongooseModule.forRoot(process.env.MONGOURI),
    UsersModule,
    StaffModule,
    ItemsModule,
    LogModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
