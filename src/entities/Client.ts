import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('client')
export class Client extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column({ type: 'varchar' })
  first_name: string;

  @Column({ type: 'varchar' })
  last_name: string;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar', unique: true, length: 10 })
  card_number: string;

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
