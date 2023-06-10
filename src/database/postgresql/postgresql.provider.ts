import { Sequelize } from 'sequelize-typescript';
import { databaseConfig } from 'src/configs/database.config';

import {
  DEVELOPMENT,
  POSTGRESQL_DATABASE,
  PRODUCTION,
  TEST,
} from 'src/constant/database.constant';

export const postgresqlDatabaseProviders = [
  {
    provide: POSTGRESQL_DATABASE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);

      sequelize
        .authenticate()
        .then(() => {
          console.log('Connection has been established successfully.');
        })
        .catch((err) => {
          console.error('Unable to connect to the database:', err);
        });

      sequelize.addModels(['models goes here']);
      await sequelize.sync();
      return sequelize;
    },
  },
];
