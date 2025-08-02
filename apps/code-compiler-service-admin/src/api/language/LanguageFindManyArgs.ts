import { LanguageWhereInput } from "./LanguageWhereInput";
import { LanguageOrderByInput } from "./LanguageOrderByInput";

export type LanguageFindManyArgs = {
  where?: LanguageWhereInput;
  orderBy?: Array<LanguageOrderByInput>;
  skip?: number;
  take?: number;
};
