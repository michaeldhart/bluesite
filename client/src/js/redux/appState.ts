import { Person } from '../../../../shared/src/js/models/Person';
import { AppConfig } from '../../../../shared/src/js/models/AppConfig';
import { PageContent } from '../../../../shared/src/js/models/PageContent';
import { BlogContent } from '../../../../shared/src/js/models/BlogContent';
import { Languages } from '../enums/languages';

export type AppConfigState = {
  appConfig: AppConfig;
};

export type PagesState = {
  pages: PageContent[];
};

export type BlogState = {
  blogs: BlogContent[];
};

export type ContactsState = {
  contacts: Person[];
  selectedContact?: Person;
};

export type GlobalUIState = {
  language: Languages;
};

export type ContactsUIState = {
  addEditContactDialogState: boolean;
};
