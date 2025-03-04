import {
  Column,
  Entity,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Material {
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  codigo: string;

  @Column()
  descripcion: string;

  @Column()
  unidad: string;

  @Column()
  precio: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
