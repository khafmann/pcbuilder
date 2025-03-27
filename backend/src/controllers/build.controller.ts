import {BadRequestException, Controller, Get, Query} from '@nestjs/common';
import { BuildService } from '../services/build.service';

@Controller('build')
export class BuildController {
    constructor(private readonly buildService: BuildService) {}

    @Get()
    async getBuild(@Query('budget') budget: string, @Query('type') type: 'gaming' | 'workstation' | 'office') {
        const budgetValue = parseInt(budget, 10);

        if (isNaN(budgetValue)) {
            throw new BadRequestException('Invalid budget value');
        }

        return this.buildService.generateBuild(budgetValue, type);
    }

}