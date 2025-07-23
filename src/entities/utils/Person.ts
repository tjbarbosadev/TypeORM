import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Person extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column({ type: 'varchar' })
  first_name: string;

  @Column({ type: 'varchar' })
  middle_name: string;

  @Column({ type: 'varchar' })
  last_name: string;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar', unique: true, length: 10 })
  card_number: string;

  @Column({ type: 'numeric' })
  balance: number;
}
