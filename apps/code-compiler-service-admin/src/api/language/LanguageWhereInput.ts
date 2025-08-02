import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SubmissionListRelationFilter } from "../submission/SubmissionListRelationFilter";

export type LanguageWhereInput = {
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  name?: StringNullableFilter;
  submissions?: SubmissionListRelationFilter;
  version?: StringNullableFilter;
};
