import * as dotenv from 'dotenv';
import { IPostgresqlDbConfig } from 'src/interfaces/postgresqlDbConfig.interface';

dotenv.config();

export const databaseConfig: IPostgresqlDbConfig = {
  development: {
    username: process.env.DB_POSTGRES_SQL_USER,
    password: process.env.DB_POSTGRES_SQL_PASS,
    database: process.env.DB_POSTGRES_SQL_NAME_DEVELOPMENT,
    host: process.env.DB_POSTGRES_SQL_HOST,
    port: process.env.DB_POSTGRES_SQL_PORT,
    dialect: process.env.DB_POSTGRES_SQL_DIALECT,
  },
  test: {
    username: process.env.DB_POSTGRES_SQL_USER,
    password: process.env.DB_POSTGRES_SQL_PASS,
    database: process.env.DB_POSTGRES_SQL_NAME_TEST,
    host: process.env.DB_POSTGRES_SQL_HOST,
    port: process.env.DB_POSTGRES_SQL_PORT,
    dialect: process.env.DB_POSTGRES_SQL_DIALECT,
  },
  production: {
    username: process.env.DB_POSTGRES_SQL_USER,
    password: process.env.DB_POSTGRES_SQL_PASS,
    database: process.env.DB_POSTGRES_SQL_NAME_PRODUCTION,
    host: process.env.DB_POSTGRES_SQL_HOST,
    dialect: process.env.DB_POSTGRES_SQL_DIALECT,
  },
};

export default () => databaseConfig;
