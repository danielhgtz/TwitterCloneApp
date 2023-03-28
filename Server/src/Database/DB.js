import mySQL from "mysql2";
import * as dotenv from "dotenv";

dotenv.config();

export const pool = mySQL.createPool({
  host: process.env.DEV_HOST,
  user: process.env.DEV_USER,
  database: process.env.DB,
  password: process.env.DEV_PASSWORD,

  connectionLimit: 10,
});
