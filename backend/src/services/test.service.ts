import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {GpuEntity} from "../entities/gpu.entity";
import {Repository} from "typeorm";

@Injectable()
export class TestService {
    constructor(
        @InjectRepository (GpuEntity) private readonly gpuRepo: Repository<GpuEntity>
    ) {}

    async getAllGpus() {
        return this.gpuRepo.find();
    }
}