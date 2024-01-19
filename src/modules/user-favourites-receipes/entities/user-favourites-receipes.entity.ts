import {Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import {Receipe} from "../../receipes/entities/receipe.entity";
import {Bartender} from "../../bartenders/entities/bartender.entity";

@Entity()
export class UserFavouritesReceipes {
  @PrimaryColumn()
  id: string;

  @Column()
  receipeId: string;

  @Column()
  bartenderId: string;

  @ManyToOne(() => Bartender, (bartender) => bartender.favRecipes)
  @JoinColumn({ name: 'bartenderId' })
  bartender: Bartender;

  @ManyToOne(() => Receipe, (recipe) => recipe.favBartenders)
  @JoinColumn({ name: 'receipeId' })
  receipe: Receipe;
}