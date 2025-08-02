import { LanguageWhereUniqueInput } from "../language/LanguageWhereUniqueInput";
import { ResultUpdateManyWithoutSubmissionsInput } from "./ResultUpdateManyWithoutSubmissionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubmissionUpdateInput = {
  code?: string | null;
  input?: string | null;
  language?: LanguageWhereUniqueInput | null;
  results?: ResultUpdateManyWithoutSubmissionsInput;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
