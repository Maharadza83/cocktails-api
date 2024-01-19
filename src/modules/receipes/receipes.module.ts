import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { ReceipesController } from './receipes.controller';
import { Receipe } from './entities/receipe.entity';
import { ReceipesService } from './receipes.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([Receipe])
  ],
  controllers: [ReceipesController],
  providers: [ReceipesService],
  exports: [ReceipesService]
})
export class ReceipesModule {}