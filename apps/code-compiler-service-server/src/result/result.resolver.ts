import * as graphql from "@nestjs/graphql";
import { ResultResolverBase } from "./base/result.resolver.base";
import { Result } from "./base/Result";
import { ResultService } from "./result.service";

@graphql.Resolver(() => Result)
export class ResultResolver extends ResultResolverBase {
  constructor(protected readonly service: ResultService) {
    super(service);
  }
}
