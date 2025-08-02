import { SubmissionWhereInput } from "./SubmissionWhereInput";
import { SubmissionOrderByInput } from "./SubmissionOrderByInput";

export type SubmissionFindManyArgs = {
  where?: SubmissionWhereInput;
  orderBy?: Array<SubmissionOrderByInput>;
  skip?: number;
  take?: number;
};
