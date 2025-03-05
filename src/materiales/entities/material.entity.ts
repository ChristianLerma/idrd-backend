import { ApiProperty } from '@nestjs/swagger';
import { ProyectoMaterial } from 'src/proyecto-material/entities/proyecto-material.entity';
import {
  Column,
  Entity,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Material {
  @ApiProperty({ description: 'ID único del material' })
  @Column({ primary: true, generated: true })
  id: number;

  @ApiProperty({ description: 'Código del material' })
  @Column()
  codigo: string;

  @ApiProperty({ description: 'Descripción del material' })
  @Column()
  descripcion: string;

  @ApiProperty({ description: 'Unidad de medida del material' })
  @Column()
  unidad: string;

  @ApiProperty({ description: 'Precio del material' })
  @Column()
  precio: number;

  @ApiProperty({ description: 'Fecha de creación del registro' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'Fecha de actualización del registro' })
  @UpdateDateColumn()
  updatedAt: Date;

  @ApiProperty({ description: 'Fecha de eliminación del registro' })
  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(
    () => ProyectoMaterial,
    (proyectoMaterial) => proyectoMaterial.material,
  )
  proyectoMateriales: ProyectoMaterial[];
}
