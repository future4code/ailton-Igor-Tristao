import dotenv from "dotenv";
import knex from "knex";

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    port: 3306,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    multipleStatements: true,
  },
});
