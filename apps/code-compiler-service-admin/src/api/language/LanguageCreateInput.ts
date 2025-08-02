import { SubmissionCreateNestedManyWithoutLanguagesInput } from "./SubmissionCreateNestedManyWithoutLanguagesInput";

export type LanguageCreateInput = {
  isActive?: boolean | null;
  name?: string | null;
  submissions?: SubmissionCreateNestedManyWithoutLanguagesInput;
  version?: string | null;
};
