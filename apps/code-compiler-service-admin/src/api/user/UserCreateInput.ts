import { InputJsonValue } from "../../types";
import { SubmissionCreateNestedManyWithoutUsersInput } from "./SubmissionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  submissions?: SubmissionCreateNestedManyWithoutUsersInput;
  username: string;
};
