import { InputJsonValue } from "../../types";
import { SubmissionUpdateManyWithoutUsersInput } from "./SubmissionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  submissions?: SubmissionUpdateManyWithoutUsersInput;
  username?: string;
};
