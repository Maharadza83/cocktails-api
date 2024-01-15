import { Column, Entity, PrimaryColumn} from 'typeorm';

@Entity()
  export class Bartender {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;
}