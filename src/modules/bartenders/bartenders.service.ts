import { ConflictException, Injectable } from '@nestjs/common';
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



  public async create(username: string, email: string, pass: string): Promise<any> {
    const isUsernameFree = !await this.bartendersRepository.findOneBy({ username })
    const isEmailFree = !await this.bartendersRepository.findOneBy({ email })

    if (isEmailFree && isUsernameFree) {
      const dto = {
        id: ulid(),
        username,
        email,
        password: await hash(pass, await genSalt(10))
      }

      const bartender: Bartender = this.bartendersRepository.create(dto);
      const newUser = await this.bartendersRepository.save(bartender);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...rest } = newUser

      return rest
    }

    if (!isUsernameFree) throw new ConflictException({ message: 'Login jest już zajęty' })
    if (!isEmailFree) throw new ConflictException({ message: 'Email jest już zajęty' })
  }
  public async findOne(username: string): Promise<any> {
    return this.bartendersRepository.findOneBy({username});
    }
  public async getFav(id: string): Promise<any> {
    const data =  await this.bartendersRepository.findOne({ where: { id }, relations: ['favRecipes', 'favRecipes.receipe'] });

    return data.favRecipes.map(el => el.receipe)
  }

}
