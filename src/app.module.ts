import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BartendersModule } from './modules/bartenders/bartenders.module';
import { AuthModule } from './modules/auth/auth.module';
import { Bartender } from './modules/bartenders/entities/bartender.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'psql01.mikr.us',
    password: 'FB18_7de531',
    username: 'm390',
    entities: [Bartender],
    database: 'db_m390',
    synchronize: true,
    logging: true,
  }),
  BartendersModule,
  AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
