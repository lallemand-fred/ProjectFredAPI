import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ulid } from 'ulid';
import { Profile } from '../../../profile/data/entity/profile.entity';
import { stubTrue } from 'lodash';

@Entity()
export class Account{
  @PrimaryColumn('varchar', { length:26, default: () => `'${ulid()}'` })
  account_id: string;
  @Column()
  firstname: string;
  @Column()
  lastname: string;
  @Column()
  birthdate: Date;
  @Column()
  mail: string;

  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
  @OneToOne( ()=> Profile,(profile)=>profile.accounts,{cascade:true, eager:true})
  profiles: Profile[];
}
//Account 1 --> N Profile --> FK --> Profile (account_id_fk) "pas le choix"
//Account 1 --> 1 Profile --> FK --> Libre à l'architechte data "toi qui choisi!"
//Account N --> N Profile --> Nouvelle table de liaison account_profile (account_id_fk, profile_id_fk) "Table de liaison"
