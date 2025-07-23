import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';
import { Person } from './utils/Person';

@Entity('client')
export class Client extends Person {
  @Column({ type: 'numeric' })
  balance: number;

  @Column({ type: 'boolean', default: true, name: 'active' })
  is_active: boolean;

  @Column({ type: 'jsonb', nullable: true })
  additional_info: {
    age: number;
    hair_color: string;
  } | null;

  @Column({ type: 'text', array: true, nullable: true })
  family_members: string[] | null;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
