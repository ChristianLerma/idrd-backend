import { Test, TestingModule } from '@nestjs/testing';
import { ProyectoMaterialService } from './proyecto-material.service';

describe('ProyectoMaterialService', () => {
  let service: ProyectoMaterialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProyectoMaterialService],
    }).compile();

    service = module.get<ProyectoMaterialService>(ProyectoMaterialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
