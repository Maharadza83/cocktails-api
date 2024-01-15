import {Body, Controller, Post} from "@nestjs/common";
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {
  }

  @Post('login')
  public async login(@Body() loginDto: { username: string, password: string }) {
    const {  username, password } = loginDto;
    return this.authService.login(username, password)
  }

  @Post('register')
  public async register(@Body() loginDto: { username: string, email: string, password: string }) {
    const {  username, password, email } = loginDto;
    return this.authService.register(username, email, password)
  }
}