import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';

export class AssignMaterialDto {
  @ApiProperty({ description: 'ID del proyecto' })
  @IsInt()
  proyectoId: number;

  @ApiProperty({ description: 'ID del material' })
  @IsInt()
  materialId: number;

  @ApiProperty({ description: 'Cantidad de material asignado' })
  @IsInt()
  @IsPositive()
  cantidad: number;
}
