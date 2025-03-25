import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GpuEntity } from '../entities/gpu.entity';
import { CpuEntity } from '../entities/cpu.entity';
import { MotherboardEntity } from '../entities/motherboard.entity';
import { RamEntity } from '../entities/ram.entity';
import { StorageEntity } from '../entities/storage.entity';
import { PsuEntity } from '../entities/psu.entity';
import { CoolingEntity } from '../entities/cooling.entity';
import { CaseEntity } from '../entities/case.entity';

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

        const cpu = await this.cpuRepo.findOne({ where: { price: budgetDistribution.cpu }, order: { price: 'DESC' } });
        const motherboard = await this.motherboardRepo.findOne({ where: { price: budgetDistribution.motherboard, socket: cpu?.socket, ramType: cpu?.ramType }, order: { price: 'DESC' } });
        const ram = await this.ramRepo.findOne({ where: { price: budgetDistribution.ram, ramType: cpu?.ramType }, order: { price: 'DESC' } });
        const gpu = await this.gpuRepo.findOne({ where: { price: budgetDistribution.gpu }, order: { price: 'DESC' } });
        const storage = await this.storageRepo.findOne({ where: { price: budgetDistribution.storage }, order: { price: 'DESC' } });
        const psu = await this.psuRepo.findOne({ where: { price: budgetDistribution.psu, power: (cpu?.power ?? 0) + (gpu?.power ?? 0) }, order: { price: 'DESC' } });
        const cooling = await this.coolingRepo.findOne({ where: { price: budgetDistribution.cooling, power: cpu?.power }, order: { price: 'DESC' } });
        const pcCase = await this.caseRepo.findOne({ where: { price: budgetDistribution.case }, order: { price: 'DESC' } });

        return { cpu, motherboard, ram, gpu, storage, psu, cooling, pcCase };
    }

    private getBudgetDistribution(budget: number, type: string) {
        const distributions = {
            gaming: { gpu: 0.4, cpu: 0.25, motherboard: 0.1, ram: 0.1, storage: 0.05, psu: 0.05, cooling: 0.025, case: 0.025 },
            workstation: { gpu: 0.3, cpu: 0.35, motherboard: 0.1, ram: 0.15, storage: 0.05, psu: 0.05, cooling: 0.025, case: 0.025 },
            office: { gpu: 0.2, cpu: 0.3, motherboard: 0.15, ram: 0.15, storage: 0.1, psu: 0.05, cooling: 0.025, case: 0.025 },
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
            case: budget * selectedDistribution.case,
        };
    }
}
