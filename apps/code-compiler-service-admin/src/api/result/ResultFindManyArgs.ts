import { ResultWhereInput } from "./ResultWhereInput";
import { ResultOrderByInput } from "./ResultOrderByInput";

export type ResultFindManyArgs = {
  where?: ResultWhereInput;
  orderBy?: Array<ResultOrderByInput>;
  skip?: number;
  take?: number;
};
