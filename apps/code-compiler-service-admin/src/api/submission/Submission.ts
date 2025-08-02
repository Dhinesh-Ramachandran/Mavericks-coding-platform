import { Language } from "../language/Language";
import { Result } from "../result/Result";
import { User } from "../user/User";

export type Submission = {
  code: string | null;
  createdAt: Date;
  id: string;
  input: string | null;
  language?: Language | null;
  results?: Array<Result>;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
