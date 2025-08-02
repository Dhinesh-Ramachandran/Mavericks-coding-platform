import { Submission as TSubmission } from "../api/submission/Submission";

export const SUBMISSION_TITLE_FIELD = "id";

export const SubmissionTitle = (record: TSubmission): string => {
  return record.id?.toString() || String(record.id);
};
