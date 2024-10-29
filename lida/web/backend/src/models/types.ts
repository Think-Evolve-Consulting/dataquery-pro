import { Dialect, Model } from 'sequelize';

export interface DatabaseConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: Dialect;
}

export interface Database {
  [key: string]: Model;
}
