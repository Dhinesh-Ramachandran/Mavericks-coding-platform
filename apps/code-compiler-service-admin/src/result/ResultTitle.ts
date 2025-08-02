import { Result as TResult } from "../api/result/Result";

export const RESULT_TITLE_FIELD = "id";

export const ResultTitle = (record: TResult): string => {
  return record.id?.toString() || String(record.id);
};
