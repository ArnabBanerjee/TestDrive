import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('persons')
export class Person {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { nullable: false, length: 50 })
  name: string;
}
