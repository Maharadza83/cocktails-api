import {Column, Entity, OneToMany, PrimaryColumn} from "typeorm";
import { UserFavouritesReceipes } from '../../user-favourites-receipes/entities/user-favourites-receipes.entity';


@Entity()
export class Bartender {
  @PrimaryColumn()
  id: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => UserFavouritesReceipes, (favReceipe) => favReceipe.bartender)
  favRecipes: UserFavouritesReceipes[];
}