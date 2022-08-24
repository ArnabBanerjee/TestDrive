import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Person } from './person.entity';
@Entity('addresses')
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { nullable: false, length: 50 })
  street: string;

  @Column('varchar', { nullable: false, length: 30 })
  city: string;

  @Column('varchar', { nullable: false, length: 25 })
  country: string;

  @ManyToOne(() => Person, { nullable: true, cascade: true, eager: true, })
  @JoinColumn({ name: 'parson_id' })
  parson_id: Person;
}
