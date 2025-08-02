import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SubmissionWhereUniqueInput } from "../submission/SubmissionWhereUniqueInput";

export type ResultWhereInput = {
  errorField?: StringNullableFilter;
  executionTime?: FloatNullableFilter;
  id?: StringFilter;
  output?: StringNullableFilter;
  submission?: SubmissionWhereUniqueInput;
};
