import { Module } from '@nestjs/common';
import { BartendersController } from './bartenders.controller';
import { BartendersService } from './bartenders.service';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bartender } from './entities/bartender.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Bartender])],
  controllers:[BartendersController],
  providers: [BartendersService, JwtService],
  exports: [BartendersService]
})
export class BartendersModule {}
