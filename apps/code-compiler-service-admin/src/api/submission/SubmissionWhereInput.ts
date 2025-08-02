import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LanguageWhereUniqueInput } from "../language/LanguageWhereUniqueInput";
import { ResultListRelationFilter } from "../result/ResultListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubmissionWhereInput = {
  code?: StringNullableFilter;
  id?: StringFilter;
  input?: StringNullableFilter;
  language?: LanguageWhereUniqueInput;
  results?: ResultListRelationFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
