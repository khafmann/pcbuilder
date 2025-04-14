import { DataSource } from 'typeorm';
import { CpuEntity } from './entities/cpu.entity';
import { GpuEntity } from './entities/gpu.entity';
import { MotherboardEntity } from './entities/motherboard.entity';
import { RamEntity } from './entities/ram.entity';
import { StorageEntity } from './entities/storage.entity';
import { PsuEntity } from './entities/psu.entity';
import { CoolingEntity } from './entities/cooling.entity';
import { CaseEntity } from './entities/case.entity';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'db',
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || '123456',
    database: process.env.DB_NAME || 'pcbuilder',
    entities: [
        CpuEntity, GpuEntity, MotherboardEntity, RamEntity,
        StorageEntity, PsuEntity, CoolingEntity, CaseEntity
    ],
    migrations: ['src/migrations/*.ts'],
    synchronize: false,
});
