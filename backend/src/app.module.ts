import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BuildModule } from './modules/build.module';
import { CpuEntity } from './entities/cpu.entity';
import { GpuEntity } from './entities/gpu.entity';
import { MotherboardEntity } from './entities/motherboard.entity';
import { RamEntity } from './entities/ram.entity';
import { StorageEntity } from './entities/storage.entity';
import { PsuEntity } from './entities/psu.entity';
import { CoolingEntity } from './entities/cooling.entity';
import { CaseEntity } from './entities/case.entity';
import { TestModule } from './modules/test.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule, TestModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST', 'db'),
        port: configService.get<number>('DB_PORT', 5432),
        username: configService.get('DB_USER', 'postgres'),
        password: configService.get('DB_PASS', '123456'),
        database: configService.get('DB_NAME', 'pcbuilder'),
        entities: [
          CpuEntity, GpuEntity, MotherboardEntity, RamEntity,
          StorageEntity, PsuEntity, CoolingEntity, CaseEntity
        ],
        synchronize: true,
      }),
    }),
    BuildModule
  ],
})
export class AppModule {}
