import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BartendersModule } from './modules/bartenders/bartenders.module';
import { AuthModule } from './modules/auth/auth.module';
import { Bartender } from './modules/bartenders/entities/bartender.entity';
import { UserFavouritesReceipes } from './modules/user-favourites-receipes/entities/user-favourites-receipes.entity';
import { Receipe } from './modules/receipes/entities/receipe.entity';
import { UserFavouritesReceipesModule } from './modules/user-favourites-receipes/user-favourites-receipes.module';
import { ReceipesModule } from './modules/receipes/receipes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'psql01.mikr.us',
    password: 'FB18_7de531',
    username: 'm390',
    entities: [Bartender, UserFavouritesReceipes, Receipe],
    database: 'db_m390',
    synchronize: true,
    logging: true,
  }),
  BartendersModule,
  AuthModule,
    ReceipesModule,
    UserFavouritesReceipesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
