import {Injectable} from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Bartender } from './entities/bartender.entity';
import { Repository } from 'typeorm';
import { ulid } from 'ulid';
import { genSalt, hash } from 'bcrypt';

@Injectable()
export class BartendersService {
  constructor(
    @InjectRepository(Bartender)
    private  bartendersRepository: Repository<Bartender>,
  ) {
  }



  public async create(username: string, email: string, password: string): Promise<any> {
    const dto = {
      id: ulid(),
      username,
      email,
      password: await hash(password, await genSalt(10))

    }
    const bartender: Bartender = this.bartendersRepository.create(dto);
    return this.bartendersRepository.save(bartender);
  }
  public async findOne(username: string): Promise<any> {
    return this.bartendersRepository.findOneBy({username});
    }
  }
