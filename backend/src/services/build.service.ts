import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
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

        const cpu = await this.cpuRepo.findOne({
            where: { price: Between(Math.round(budgetDistribution.cpu * 0.5), Math.round(budgetDistribution.cpu * 1.1)) },
            order: { price: 'DESC' }
        });

        const motherboard = cpu ? await this.motherboardRepo.findOne({
            where: {
                price: Between(Math.round(budgetDistribution.motherboard * 0.5), Math.round(budgetDistribution.motherboard * 1.1)),
                socket: cpu.socket,
                ramType: cpu.ramType
            },
            order: { price: 'DESC' }
        }) : null;

        const ram = cpu ? await this.ramRepo.findOne({
            where: {
                price: Between(Math.round(budgetDistribution.ram * 0.5), Math.round(budgetDistribution.ram * 1.1)),
                ramType: cpu.ramType
            },
            order: { price: 'DESC' }
        }) : null;

        const gpu = await this.gpuRepo.findOne({
            where: { price: Between(Math.round(budgetDistribution.gpu * 0.5), Math.round(budgetDistribution.gpu * 1.1)) },
            order: { price: 'DESC' }
        });

        const storage = await this.storageRepo.findOne({
            where: { price: Between(Math.round(budgetDistribution.storage * 0.5), Math.round(budgetDistribution.storage * 1.1)) },
            order: { price: 'DESC' }
        });

        const psus = await this.psuRepo.find({
            where: {
                price: Between(Math.round(budgetDistribution.psu * 0.5), Math.round(budgetDistribution.psu * 1.1)),
            },
            order: { price: 'DESC' }
        });

        // Расчет мощности ЦП и видеокарты
        const psu = psus.find(p => p.power >= (cpu?.power ?? 0) + (gpu?.power ?? 0));

        const coolings = await this.coolingRepo.find({
            where: {
                price: Between(Math.round(budgetDistribution.cooling * 0.5), Math.round(budgetDistribution.cooling * 1.1)),
            },
            order: { price: 'DESC' }
        });

        // Выбираем подходящее по мощности рассеивания охлаждение
        const cooling = coolings.find(c => c.power >= (cpu?.power ?? 0)) ?? null;

        const pcCase = await this.caseRepo.findOne({
            where: { price: Between(Math.round(budgetDistribution.case * 0.5), Math.round(budgetDistribution.case * 1.1)) },
            order: { price: 'DESC' }
        });

        return { cpu, motherboard, ram, gpu, storage, psu, cooling, pcCase };
    }

    private getBudgetDistribution(budget: number, type: string) {
        const distributions = {
            gaming: {
                gpu: 0.4,
                cpu: 0.25,
                motherboard: 0.1,
                ram: 0.1,
                storage: 0.05,
                psu: 0.05,
                cooling: 0.025,
                case: 0.025
            },
            workstation: {
                gpu: 0.3,
                cpu: 0.35,
                motherboard: 0.1,
                ram: 0.15,
                storage: 0.05,
                psu: 0.05,
                cooling: 0.025,
                case: 0.025
            },
            office: {
                gpu: 0.2,
                cpu: 0.3,
                motherboard: 0.15,
                ram: 0.15,
                storage: 0.1,
                psu: 0.05,
                cooling: 0.025,
                case: 0.025
            },
        };

        const selectedDistribution = distributions[type];
        return {
            gpu: Math.round(budget * selectedDistribution.gpu),
            cpu: Math.round(budget * selectedDistribution.cpu),
            motherboard: Math.round(budget * selectedDistribution.motherboard),
            ram: Math.round(budget * selectedDistribution.ram),
            storage: Math.round(budget * selectedDistribution.storage),
            psu: Math.round(budget * selectedDistribution.psu),
            cooling: Math.round(budget * selectedDistribution.cooling),
            case: Math.round(budget * selectedDistribution.case),
        };
    }
}
