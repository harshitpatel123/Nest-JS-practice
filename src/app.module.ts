import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { usercontroller } from './user/user.controller';
import { usermodule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from './user/entity/user.entity';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
import { LoggingMiddleware } from './middleware/logging.middleware';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [usermodule,
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Harshit@123',
    database: 'harshit_mysql', 
    entities: [user],
    synchronize: true,
  }), AuthModule, ProfileModule,],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
