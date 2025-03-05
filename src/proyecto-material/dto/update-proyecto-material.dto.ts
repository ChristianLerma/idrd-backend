import { PartialType } from '@nestjs/swagger';
import { CreateProyectoMaterialDto } from './create-proyecto-material.dto';

export class UpdateProyectoMaterialDto extends PartialType(CreateProyectoMaterialDto) {}
