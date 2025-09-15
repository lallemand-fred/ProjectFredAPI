import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { ulid } from 'ulid';
import { Account } from '../../../account/data/entity/account.entity';

@Entity()
export class Profile{
  @PrimaryColumn('varchar',{length:26,default: ()=>`'${ulid()}'`})
  profile_id:string;
  @Column()
  ndLike:number;
  @OneToOne(()=> Account,(account)=>account.profiles)
  //@OneToOne(()=> Account,(account)=>account.profiles) " c'est une jointure (clefs bleu sur datagripe) 1 à 1"
  //@ManyToOne(()=> Account,(account)=>account.profiles)  " c'est une jointure (clefs bleu sur datagripe) n à 1"
  //@ManyToMany(()=> Account,(account)=>account.profiles)  " c'est une table de jointure crée une nouvelle table (clefs bleu sur datagripe) n à n"
  //@JoinColumn({referencedColumnName:'account_id', name:'account_id_fk'}) "Changer le nom de la jointure"selectionner puis changer dans name"

    /*@JoinTable({
    name:'account_profile',
    inverseJoinColumn: {name:'account_id_fk', referencedColumnName:'account_id'},
    joinColumn:{name:'profile_id_fk', referencedColumnName:'profile_id'}
  })
  */
  accounts: Account[];//account avec s "comme il y a plusieurs accounts si non sans s " quand c est ManyToMany "!!!
  //account: Account; "account quand c est OneToOne ou ManyToOne
}

