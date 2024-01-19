import {Injectable} from "@nestjs/common";
import {ReceipeDto} from "./dto/receipe.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Receipe} from "./entities/receipe.entity";

@Injectable()
export class ReceipesService {
  constructor(
    @InjectRepository(Receipe)
    private receipeRepository: Repository<Receipe>,
  ) {
  }

  public async create(dto: ReceipeDto): Promise<any> {
    const newReceipe = this.receipeRepository.create(dto);
    return this.receipeRepository.save(newReceipe);
  }

  public async getDrink(idDrink: string): Promise<any> {
      return  this.receipeRepository.findOneBy({ idDrink });
  }
}