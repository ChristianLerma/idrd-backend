import { IsNumber, IsString } from 'class-validator';
export class CreateMaterialDto {
  @IsString()
  codigo: string;
  @IsString()
  descripcion: string;
  @IsString()
  unidad: string;
  @IsNumber()
  precio: number;
}
