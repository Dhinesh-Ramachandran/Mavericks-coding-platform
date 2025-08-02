import { JsonValue } from "type-fest";
import { Submission } from "../submission/Submission";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  submissions?: Array<Submission>;
  updatedAt: Date;
  username: string;
};
