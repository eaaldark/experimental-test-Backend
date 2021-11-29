import * as path from "path";
import { config } from "dotenv";
config({
  path: path.join(__dirname, "../../../.env"),
});

const {
  NODE_ENV,
  API_PORT,
  KEY_ID,
  PG_USER,
  PG_HOST,
  PS_PASSWORD,
  PG_DATABASE,
  PG_PORT,
  CLIENT_HOST,
} = process.env;

export {
  NODE_ENV,
  API_PORT,
  KEY_ID,
  PG_USER,
  PG_HOST,
  PS_PASSWORD,
  PG_DATABASE,
  PG_PORT,
  CLIENT_HOST,
};
