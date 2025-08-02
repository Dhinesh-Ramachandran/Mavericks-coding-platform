import { Module } from "@nestjs/common";
import { SubmissionModuleBase } from "./base/submission.module.base";
import { SubmissionService } from "./submission.service";
import { SubmissionController } from "./submission.controller";
import { SubmissionResolver } from "./submission.resolver";

@Module({
  imports: [SubmissionModuleBase],
  controllers: [SubmissionController],
  providers: [SubmissionService, SubmissionResolver],
  exports: [SubmissionService],
})
export class SubmissionModule {}
