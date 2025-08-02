import { SortOrder } from "../../util/SortOrder";

export type ResultOrderByInput = {
  createdAt?: SortOrder;
  errorField?: SortOrder;
  executionTime?: SortOrder;
  id?: SortOrder;
  output?: SortOrder;
  submissionId?: SortOrder;
  updatedAt?: SortOrder;
};
