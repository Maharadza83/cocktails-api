import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { BartendersModule } from '../bartenders/bartenders.module';
import { BartendersService } from '../bartenders/bartenders.service';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bartender } from '../bartenders/entities/bartender.entity';

@Module({
  imports:[
    BartendersModule,
    JwtModule.register({
      secret: 'megier',
      signOptions: { expiresIn: "60m" }
    }),
   TypeOrmModule.forFeature([Bartender])
  ],
  controllers:[AuthController],
  providers: [AuthService,BartendersService]
})
export class AuthModule{}
