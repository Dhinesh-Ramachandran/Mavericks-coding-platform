import { Submission } from "../submission/Submission";

export type Result = {
  createdAt: Date;
  errorField: string | null;
  executionTime: number | null;
  id: string;
  output: string | null;
  submission?: Submission | null;
  updatedAt: Date;
};
