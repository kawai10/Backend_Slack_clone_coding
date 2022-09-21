import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule,ConfigService } from "@nestjs/config";
import { LoggerMiddleware } from "./middlewares/logger.middleware";
import { UsersModule } from './users/users.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { ChannelsModule } from './channels/channels.module';
import { DmsModule } from './dms/dms.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "./entities/Users";
import { AuthModule } from "./auth/auth.module";
import { EventsModule } from './events/events.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}), AuthModule,UsersModule, WorkspacesModule, ChannelsModule, DmsModule,
  TypeOrmModule.forRootAsync({
    inject:[ConfigService],
    useFactory: async (configService:ConfigService) => {
      return {
        type:'mysql',
        host:'localhost',
        port:3306,
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities:['entities/*.js'],
        synchronize:true,
        logging: true
    }}
  }), TypeOrmModule.forFeature([Users]), EventsModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule implements NestModule{

  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }


}
