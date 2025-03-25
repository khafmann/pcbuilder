import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestController } from '../controllers/test.controller';
import { TestService } from '../services/test.service';
import { GpuEntity } from '../entities/gpu.entity';

@Module({
    imports: [TypeOrmModule.forFeature([GpuEntity])],
    controllers: [TestController],
    providers: [TestService],
})
export class TestModule {}
