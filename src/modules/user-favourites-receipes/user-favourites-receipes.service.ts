import {ForbiddenException, Injectable, UnauthorizedException} from "@nestjs/common";
import {ReceipeDto} from "../receipes/dto/receipe.dto";
import {ReceipesService} from "../receipes/receipes.service";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {UserFavouritesReceipes} from "./entities/user-favourites-receipes.entity";
import {AuthService} from "../auth/auth.service";
import {ulid} from "ulid";

@Injectable()
export class UserFavouritesReceipesService {
  constructor(
    @InjectRepository(UserFavouritesReceipes)
    private userFavouritesReceipesRepository: Repository<UserFavouritesReceipes>,
    private readonly receipesService: ReceipesService,
    private readonly authService: AuthService
  ) {
  }

  public async addToUserFav(dto: ReceipeDto, token: string): Promise<any> {
    const doesDrinkExist: boolean = !!await this.receipesService.getDrink(dto.idDrink)

    if (!doesDrinkExist) {
      await this.receipesService.create(dto)
    }

    const bartenderId: string = await this.authService.getSelfId(token);

    if (bartenderId) {
      const relationDto = { id: ulid(), bartenderId, receipeId: dto.idDrink }
      const fav = this.userFavouritesReceipesRepository.create(relationDto)
      return this.userFavouritesReceipesRepository.save(fav)
    }

    throw UnauthorizedException
  }

  public async removeFromUserFav(relationId: string, token: string) {
    const bartenderId: string = await this.authService.getSelfId(token);
    const fav = await this.userFavouritesReceipesRepository.findOneBy({ id: relationId })

    if (bartenderId === fav.bartenderId) {
      return this.userFavouritesReceipesRepository.delete({ id: relationId })
    }

    throw ForbiddenException
  }
}