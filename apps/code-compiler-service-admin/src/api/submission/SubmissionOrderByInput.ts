import { SortOrder } from "../../util/SortOrder";

export type SubmissionOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  input?: SortOrder;
  languageId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
