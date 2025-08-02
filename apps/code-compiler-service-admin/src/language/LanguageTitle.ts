import { Language as TLanguage } from "../api/language/Language";

export const LANGUAGE_TITLE_FIELD = "name";

export const LanguageTitle = (record: TLanguage): string => {
  return record.name?.toString() || String(record.id);
};
