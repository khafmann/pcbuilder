import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GpuEntity } from '../entities/gpu.entity';
import { CpuEntity } from '../entities/cpu.entity';
import { MotherboardEntity } from '../entities/motherboard.entity';
import { RamEntity } from '../entities/ram.entity';
import { StorageEntity } from '../entities/storage.entity';
import { PsuEntity } from '../entities/psu.entity';
import { CoolingEntity } from "../entities/cooling.entity";
import { CaseEntity } from "../entities/case.entity";

@Injectable()
export class BuildService {
    constructor(
        @InjectRepository(GpuEntity) private readonly gpuRepo: Repository<GpuEntity>,
        @InjectRepository(CpuEntity) private readonly cpuRepo: Repository<CpuEntity>,
        @InjectRepository(MotherboardEntity) private readonly motherboardRepo: Repository<MotherboardEntity>,
        @InjectRepository(RamEntity) private readonly ramRepo: Repository<RamEntity>,
        @InjectRepository(StorageEntity) private readonly storageRepo: Repository<StorageEntity>,
        @InjectRepository(PsuEntity) private readonly psuRepo: Repository<PsuEntity>,
        @InjectRepository(CoolingEntity) private readonly coolingRepo: Repository<CoolingEntity>,
        @InjectRepository(CaseEntity) private readonly caseRepo: Repository<CaseEntity>,
    ) {}

    async generateBuild(budget: number, type: 'gaming' | 'workstation' | 'office') {
        let budgetDistribution = this.getBudgetDistribution(budget, type);

        const gpu = await this.gpuRepo.findOne({ where: { price: budgetDistribution.gpu }, order: { price: 'DESC' } });
        const cpu = await this.cpuRepo.findOne({ where: { price: budgetDistribution.cpu }, order: { price: 'DESC' } });
        const motherboard = await this.motherboardRepo.findOne({ where: { price: budgetDistribution.motherboard }, order: { price: 'DESC' } });
        const ram = await this.ramRepo.findOne({ where: { price: budgetDistribution.ram }, order: { price: 'DESC' } });
        const storage = await this.storageRepo.findOne({ where: { price: budgetDistribution.storage }, order: { price: 'DESC' } });
        const psu = await this.psuRepo.findOne({ where: { price: budgetDistribution.psu }, order: { price: 'DESC' } });
        const cooling = await this.coolingRepo.findOne({ where: { price: budgetDistribution.cooling }, order: { price: 'DESC' } });
        const compcase = await this.caseRepo.findOne({ where: { price: budgetDistribution.compcase }, order: { price: 'DESC' } });

        return { gpu, cpu, motherboard, ram, storage, psu, cooling, compcase };
    }

    private getBudgetDistribution(budget: number, type: string) {
        const distributions = {
            office: { gpu: 0.2, cpu: 0.3, motherboard: 0.1, ram: 0.1, storage: 0.1, psu: 0.1, cooling: 0.05, compcase: 0.05 },
            gaming: { gpu: 0.4, cpu: 0.15, motherboard: 0.1, ram: 0.1, storage: 0.1, psu: 0.05, cooling: 0.05, compcase: 0.05 },
            workstation: { gpu: 0.3, cpu: 0.25, motherboard: 0.1, ram: 0.15, storage: 0.05, psu: 0.05, cooling: 0.05, compcase: 0.05 }
        };

        const selectedDistribution = distributions[type];
        return {
            gpu: budget * selectedDistribution.gpu,
            cpu: budget * selectedDistribution.cpu,
            motherboard: budget * selectedDistribution.motherboard,
            ram: budget * selectedDistribution.ram,
            storage: budget * selectedDistribution.storage,
            psu: budget * selectedDistribution.psu,
            cooling: budget * selectedDistribution.cooling,
            compcase: budget * selectedDistribution.compcase
        };
    }
}