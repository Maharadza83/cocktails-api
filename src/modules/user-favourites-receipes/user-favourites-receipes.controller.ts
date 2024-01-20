import { Body, Controller, Delete, Get, Headers, Param, Post, UseGuards } from '@nestjs/common';
import {UserFavouritesReceipesService} from "./user-favourites-receipes.service";
import {ReceipeDto} from "../receipes/dto/receipe.dto";
import {AuthGuard} from "../auth/guards/auth.guard";

@Controller('userFavouritesReceipes')
export class UserFavouritesReceipesController {
  constructor(
    private readonly userFavouritesReceipesService: UserFavouritesReceipesService
  ) {
  }

  @UseGuards(AuthGuard)
  @Post('')
  public addToUserFav(@Body() dto: ReceipeDto, @Headers('bearer') token: string): Promise<any> {
    return this.userFavouritesReceipesService.addToUserFav(dto, token)
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  public deleteFromUserFav(@Param() params: { id: string }, @Headers('bearer') token: string): Promise<any> {
    console.log(token)

    return this.userFavouritesReceipesService.removeFromUserFav(params.id, token)

  }

  @UseGuards(AuthGuard)
  @Get(':id')
  public checkIfIsFav(@Param() params: { id: string }, @Headers('bearer') token: string): Promise<any> {
      return this.userFavouritesReceipesService.checkIfIsFavourite(params.id, token)
  }


  }
