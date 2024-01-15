import {Injectable, UnauthorizedException} from "@nestjs/common";
import {BartendersService} from "../bartenders/bartenders.service";
import {JwtService} from "@nestjs/jwt";
import {compare} from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private readonly bartendersService: BartendersService,
    private readonly jwtService: JwtService
  ) {
  }

  public async login(username: string, pass: string): Promise<any> {
    const user = await this.bartendersService.findOne(username);
    const passwordMatch = await compare(user.password, pass);
    console.log(pass)
    console.log(user.password)

    if (passwordMatch) {
      return { accessToken: await this.jwtService.signAsync({ sub: user.userId, username: user.username })}
    }

    throw new UnauthorizedException({ message: ["Invalid userdata"] });
  }

  public register(username: string, email: string, password: string): Promise<any> {
    return this.bartendersService.create(username, email, password)
  }
}