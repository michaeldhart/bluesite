import { Languages } from '../../../../shared/src/js/enums/languages';
import { Api } from './api';
import { PageContent } from '../../../../shared/src/js/models/PageContent';

export const BlogApi = {
  getBlog: async (
    lang: Languages,
    name: string
  ): Promise<PageContent | undefined> => {
    return await Api.get(`/markdown/${lang}/blogs/${name}`);
  },
};
