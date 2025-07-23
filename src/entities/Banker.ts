import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, UpdateDateColumn } from 'typeorm';
import { Person } from './utils/Person';
import { Client } from './Client';

@Entity('banker')
export class Banker extends Person {
  @Column({
    unique: true,
    length: 10,
  })
  employee_number: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToMany(() => Client)
  @JoinTable({
    name: 'bankers_clients',
    joinColumns: [
      {
        name: 'banker_id',
        referencedColumnName: 'id',
      },
    ],
    inverseJoinColumns: [
      {
        name: 'client_id',
        referencedColumnName: 'id',
      },
    ],
  })
  clients: Client[];
}
