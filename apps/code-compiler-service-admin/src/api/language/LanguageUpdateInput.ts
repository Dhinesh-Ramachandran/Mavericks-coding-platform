import { SubmissionUpdateManyWithoutLanguagesInput } from "./SubmissionUpdateManyWithoutLanguagesInput";

export type LanguageUpdateInput = {
  isActive?: boolean | null;
  name?: string | null;
  submissions?: SubmissionUpdateManyWithoutLanguagesInput;
  version?: string | null;
};
