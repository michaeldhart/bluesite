import { Languages } from '../../../../shared/src/js/enums/languages';
import { Api } from './api';
import { PageContent } from '../../../../shared/src/js/models/PageContent';

export const PagesApi = {
  getPage: async (
    lang: Languages,
    name: string
  ): Promise<PageContent | undefined> => {
    return await Api.get(`/markdown/${lang}/pages/${name}`);
  },
};
