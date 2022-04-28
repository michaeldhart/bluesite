export const knexfile = {
  development: {
    client: 'mysql',
    connection: {
      host: '0.0.0.0',
      port: 3306,
      user: 'bluesite',
      password: 'libs',
    },
    database: 'bluesite_local',
  },
};
