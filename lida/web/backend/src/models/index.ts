'use strict';

import fs from 'fs';
import { Sequelize } from 'sequelize';
// import process from 'process';
import path from 'path';
import { Database, DatabaseConfig } from './types';

const basename = path.basename(__filename);

// const { DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env;

// console.log('process.env', DB_NAME, DB_USER);

const DB_HOST = '20.198.20.220';
const DB_NAME = 'bpd';
const DB_PORT = 3306;
const DB_USER = 'root';
const DB_PASS = 'pass123';

export const sequelize = new Sequelize({
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASS,
  host: DB_HOST,
  dialect: 'mysql',
  port: DB_PORT,
  dialectOptions: {
    decimalNumbers: true,
  },
});

export * from './types';

export * from './grnModel';
