import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard';

@Controller('Auth')
@UseGuards(AuthGuard)
export class BartendersController {


}