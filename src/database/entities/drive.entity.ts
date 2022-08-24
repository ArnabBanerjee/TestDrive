import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Vehicle } from './vehicle.entity';
@Entity('drives')
export class Drive {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('float4', { nullable: true, default: 0.0 })
  distance: number;

  @CreateDateColumn({ nullable: false })
  date: Date;

  @ManyToOne(() => Vehicle, { nullable: true, cascade: true, eager: true, })
  @JoinColumn({ name: 'vehicle_id' })
  vehicle_id: Vehicle;
}
