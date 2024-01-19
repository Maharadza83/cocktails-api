import { Body, Controller, Get, Post, Headers } from '@nestjs/common';
import {AuthService} from "./auth.service";
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {
  }

  @Post('login')
  public async login(@Body() loginDto: LoginDto) {
    const {  username, password } = loginDto;
    return this.authService.login(username, password)
  }

  @Post('register')
  public async register(@Body() registerDto: RegisterDto) {
    const {  username, password, email } = registerDto;
    return this.authService.register(username, email, password)

  }
  @Get('self')
  public async getSelf(@Headers('bearer') token: string) {
    return this.authService.getSelf(token)
  }
}