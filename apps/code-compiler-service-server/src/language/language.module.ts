import { Module } from "@nestjs/common";
import { LanguageModuleBase } from "./base/language.module.base";
import { LanguageService } from "./language.service";
import { LanguageController } from "./language.controller";
import { LanguageResolver } from "./language.resolver";

@Module({
  imports: [LanguageModuleBase],
  controllers: [LanguageController],
  providers: [LanguageService, LanguageResolver],
  exports: [LanguageService],
})
export class LanguageModule {}
