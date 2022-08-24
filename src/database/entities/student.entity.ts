import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Person } from './person.entity';
@Entity('students')
export class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { nullable: true, length: 5 })
  student_number: string;

  @OneToOne(() => Person, {
    eager: true,
    nullable: true,
    cascade: true,
  })
  @JoinColumn({ name: 'parson_id' })
  parson_id: Person;
}
