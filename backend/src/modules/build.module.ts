import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuildService } from '../services/build.service';
import { BuildController } from '../controllers/build.controller';
import { GpuEntity } from '../entities/gpu.entity';
import { CpuEntity } from '../entities/cpu.entity';
import { MotherboardEntity } from '../entities/motherboard.entity';
import { RamEntity } from '../entities/ram.entity';
import { StorageEntity } from '../entities/storage.entity';
import { PsuEntity } from '../entities/psu.entity';
import { CoolingEntity } from '../entities/cooling.entity';
import { CaseEntity } from '../entities/case.entity';

@Module({
    imports: [TypeOrmModule.forFeature([GpuEntity, CpuEntity, MotherboardEntity, RamEntity, StorageEntity, PsuEntity, CoolingEntity, CaseEntity])],
    controllers: [BuildController],
    providers: [BuildService],
})
export class BuildModule {}
