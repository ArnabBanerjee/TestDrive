import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Person } from './person.entity';
@Entity('vehicles')
export class Vehicle {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { nullable: true, length: 15 })
  model: string;

  @Column('varchar', { nullable: true, length: 15 })
  plate_number: string;

  @ManyToOne(() => Person, { nullable: true, cascade: true, eager: true, })
  @JoinColumn({ name: 'parson_id' })
  parson_id: Person;
}
