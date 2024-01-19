import {Module} from "@nestjs/common";
import {UserFavouritesReceipesController} from "./user-favourites-receipes.controller";
import {UserFavouritesReceipesService} from "./user-favourites-receipes.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserFavouritesReceipes} from "./entities/user-favourites-receipes.entity";
import {AuthService} from "../auth/auth.service";
import {ReceipesService} from "../receipes/receipes.service";
import {BartendersService} from "../bartenders/bartenders.service";
import {JwtService} from "@nestjs/jwt";
import {Receipe} from "../receipes/entities/receipe.entity";
import {Bartender} from "../bartenders/entities/bartender.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserFavouritesReceipes, Receipe, Bartender])
  ],
  controllers: [UserFavouritesReceipesController],
  providers: [UserFavouritesReceipesService, AuthService, ReceipesService, BartendersService, JwtService],
})
export class UserFavouritesReceipesModule {}