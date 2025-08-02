import { LanguageWhereUniqueInput } from "../language/LanguageWhereUniqueInput";
import { ResultCreateNestedManyWithoutSubmissionsInput } from "./ResultCreateNestedManyWithoutSubmissionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubmissionCreateInput = {
  code?: string | null;
  input?: string | null;
  language?: LanguageWhereUniqueInput | null;
  results?: ResultCreateNestedManyWithoutSubmissionsInput;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
