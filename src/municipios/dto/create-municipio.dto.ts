import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';
export class CreateMunicipioDto {
  @ApiProperty({
    description: 'Nombre del municipio',
    example: 'MALAMBO',
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
}
