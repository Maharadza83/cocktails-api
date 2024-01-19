import { Controller, Get, UseGuards, Headers } from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard';
import { AuthService } from '../auth/auth.service';
import { BartendersService } from './bartenders.service';

@Controller('Auth')
@UseGuards(AuthGuard)
export class BartendersController {
  constructor(
    private readonly bartendersService: BartendersService,
    private readonly authService: AuthService
  ) {
  }

  @Get('fav')
  public async getFav(@Headers('bearer') token: string): Promise<any> {
    const id = await this.authService.getSelfId(token)
    return this.bartendersService.getFav(id)
  }
}

