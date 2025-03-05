import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';
export class CreateProyectoDto {
  @ApiProperty({
    description: 'Nombre del proyecto',
    example: 'Proyecto Número 1',
  })
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  nombre: string;

  @ApiProperty({
    description: 'ID del departamento - Foreign Key',
    example: '2',
  })
  @IsNumber()
  departamentoId: number;

  @ApiProperty({
    description: 'ID del municipio',
    example: '3',
  })
  @IsNumber()
  municipioId: number;
}
