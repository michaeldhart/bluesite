import { Person } from '../../../../shared/src/js/models/Person';
import { Api } from './api';

export const PeopleApi = {
  create: async (person: Person): Promise<Person | undefined> => {
    return await Api.post('/people', person);
  },
  list: async (): Promise<Person[] | undefined> => {
    return await Api.get('people');
  },
  get: async (guid: string): Promise<Person | undefined> => {
    return await Api.get(`/people/${guid}`);
  },
  update: async (person: Person): Promise<Person | undefined> => {
    return await Api.put(`/people/${person.guid}`, person);
  },
  delete: async (guid: string): Promise<string | undefined> => {
    return await Api.delete(`/people/${guid}`);
  },
};
