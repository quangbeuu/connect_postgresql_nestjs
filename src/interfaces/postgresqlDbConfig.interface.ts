export interface IPostgresqlDbConfigAttributes {
  username?: string;
  password?: string;
  database?: string;
  host?: string;
  port?: number | string;
  dialect?: string;
  urlDatabase?: string;
}

export interface IPostgresqlDbConfig {
  development: IPostgresqlDbConfigAttributes;
  test: IPostgresqlDbConfigAttributes;
  production: IPostgresqlDbConfigAttributes;
}
