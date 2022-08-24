import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Person } from './person.entity';
@Entity('professors')
export class Professor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('float4', { nullable: true, default: 0.0 })
  salary: number;

  @OneToOne(() => Person, {
    eager: true,
    nullable: true,
    cascade: true,
  })
  @JoinColumn({ name: 'parson_id' })
  parson_id: Person;
}
