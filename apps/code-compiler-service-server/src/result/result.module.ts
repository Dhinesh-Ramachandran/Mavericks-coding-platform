import { Module } from "@nestjs/common";
import { ResultModuleBase } from "./base/result.module.base";
import { ResultService } from "./result.service";
import { ResultController } from "./result.controller";
import { ResultResolver } from "./result.resolver";

@Module({
  imports: [ResultModuleBase],
  controllers: [ResultController],
  providers: [ResultService, ResultResolver],
  exports: [ResultService],
})
export class ResultModule {}
