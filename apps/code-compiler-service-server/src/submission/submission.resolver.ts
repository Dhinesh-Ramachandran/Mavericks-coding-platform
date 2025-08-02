import * as graphql from "@nestjs/graphql";
import { SubmissionResolverBase } from "./base/submission.resolver.base";
import { Submission } from "./base/Submission";
import { SubmissionService } from "./submission.service";

@graphql.Resolver(() => Submission)
export class SubmissionResolver extends SubmissionResolverBase {
  constructor(protected readonly service: SubmissionService) {
    super(service);
  }
}
