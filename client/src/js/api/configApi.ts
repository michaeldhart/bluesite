import { AppConfig } from '../../../../shared/src/js/models/AppConfig';
import { Api } from './api';

export const AppConfigApi = {
  get: async (): Promise<AppConfig | undefined> => {
    return await Api.get('/config');
  },
};
