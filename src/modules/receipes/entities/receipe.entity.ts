import {Column, Entity, OneToMany, PrimaryColumn} from "typeorm";
import { UserFavouritesReceipes } from '../../user-favourites-receipes/entities/user-favourites-receipes.entity';

@Entity()
export class Receipe {
  @PrimaryColumn()
  idDrink: string;

  @Column("varchar", { array: true, nullable: true })
  ingredients: [];

  @Column("varchar", { array: true, nullable: true })
  measures: string[];

  @Column({ nullable: true })
  strAlcoholic: string;

  @Column({ nullable: true })
  strCategory: string;

  @Column({ nullable: true })
  strCreativeCommonsConfirmed: string;

  @Column({ nullable: true })
  strDrink: string;

  @Column({ nullable: true })
  strDrinkThumb: string;

  @Column({ nullable: true })
  strGlass: string;

  @Column({ nullable: true })
  strIBA: string;

  @Column({ nullable: true })
  strImageAttribution: string;

  @Column({ nullable: true })
  strImageSource: string;

  @Column({ nullable: true })
  strInstructions: string;

  @Column({ nullable: true })
  strInstructionsDE: string;

  @Column({ nullable: true })
  strInstructionsIT: string;

  @Column({ nullable: true })
  strTags: string;

  @Column({ nullable: true })
  strVideo: string;

  @OneToMany(() => UserFavouritesReceipes, (favRecipe) => favRecipe.receipe)
  favBartenders: UserFavouritesReceipes[];
}