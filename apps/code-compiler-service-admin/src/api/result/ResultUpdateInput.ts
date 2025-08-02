import { SubmissionWhereUniqueInput } from "../submission/SubmissionWhereUniqueInput";

export type ResultUpdateInput = {
  errorField?: string | null;
  executionTime?: number | null;
  output?: string | null;
  submission?: SubmissionWhereUniqueInput | null;
};
