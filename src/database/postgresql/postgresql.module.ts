import { Module } from '@nestjs/common';
import { postgresqlDatabaseProviders } from './postgresql.provider';

@Module({
  providers: [...postgresqlDatabaseProviders],
  exports: [...postgresqlDatabaseProviders],
})
export class PostgresqlModule {}
