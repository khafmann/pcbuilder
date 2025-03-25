import {Controller, Get} from "@nestjs/common";
import {TestService} from "../services/test.service";

@Controller('test')
export class TestController {
    constructor(private readonly service: TestService) {}

    @Get('gpu')
    async GetAllGpu() {
        return this.service.getAllGpus();
    }
}