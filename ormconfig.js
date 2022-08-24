const dotenv = require('dotenv');
dotenv.config();
const {
  DB_TYPE,
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  DB_PORT,
  DB_NAME,
  DB_LOGGING,
  DB_SCHEMA_NAME,
  DB_SYNCHRONIZE,
  CACHE_TIMEOUT,
} = process.env;

module.exports = {
  type: DB_TYPE,
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  schema: DB_SCHEMA_NAME,
  logging: JSON.parse(DB_LOGGING),
  cache: {
    duration: Number(CACHE_TIMEOUT) * 60 * 1000, // 60 mins
  },
  synchronize: JSON.parse(DB_SYNCHRONIZE),
  entities: ['dist/database/entities/**/*.entity{.ts,.js}'],
};
