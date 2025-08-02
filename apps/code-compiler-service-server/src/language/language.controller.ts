import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LanguageService } from "./language.service";
import { LanguageControllerBase } from "./base/language.controller.base";

@swagger.ApiTags("languages")
@common.Controller("languages")
export class LanguageController extends LanguageControllerBase {
  constructor(protected readonly service: LanguageService) {
    super(service);
  }
}
