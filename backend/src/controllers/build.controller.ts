import { Controller, Get, Query } from '@nestjs/common';
import { BuildService } from '../services/build.service';

@Controller('build')
export class BuildController {
    constructor(private readonly buildService: BuildService) {}

    @Get()
    async getBuild(@Query('budget') budget: number, @Query('type') type: 'gaming' | 'workstation' | 'office') {
        return this.buildService.generateBuild(budget, type);
    }
}