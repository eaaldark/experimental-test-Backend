import { Pool, QueryResult } from "pg";
import {
  PG_DATABASE,
  PG_HOST,
  PG_PORT,
  PG_USER,
  PS_PASSWORD,
} from "./config_env";

const postgreSQLConnect = new Pool({
  user: PG_USER,
  host: PG_HOST,
  password: PS_PASSWORD,
  database: PG_DATABASE,
  port: Number(PG_PORT),
});

postgreSQLConnect.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }

  client.query("SELECT NOW()", (err, result) => {
    release();
    if (err) {
      return console.error("Error executing query", err.stack);
    } else {
      return console.log(`⚡️ The database was started at ${result.rows[0].now}⚡️`);
    }
  });
});

export { postgreSQLConnect, QueryResult };
