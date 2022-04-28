import knex from 'knex';
import { knexfile } from './knexfile';

const config = () => {
  switch (process.env.ENVIRONMENT) {
    default:
      return knexfile.development;
  }
};

export const initDB = () => {
  const Knex = knex(config());
};
