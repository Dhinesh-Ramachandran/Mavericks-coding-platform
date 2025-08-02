import * as graphql from "@nestjs/graphql";
import { LanguageResolverBase } from "./base/language.resolver.base";
import { Language } from "./base/Language";
import { LanguageService } from "./language.service";

@graphql.Resolver(() => Language)
export class LanguageResolver extends LanguageResolverBase {
  constructor(protected readonly service: LanguageService) {
    super(service);
  }
}
