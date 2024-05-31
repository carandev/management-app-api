import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3307,
      username: "management_app_user",
      password: "root",
      database: "management_app_db",
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule { }
