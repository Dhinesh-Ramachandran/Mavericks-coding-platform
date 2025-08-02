import { SortOrder } from "../../util/SortOrder";

export type LanguageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  version?: SortOrder;
};
