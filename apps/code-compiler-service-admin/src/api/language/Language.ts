import { Submission } from "../submission/Submission";

export type Language = {
  createdAt: Date;
  id: string;
  isActive: boolean | null;
  name: string | null;
  submissions?: Array<Submission>;
  updatedAt: Date;
  version: string | null;
};
