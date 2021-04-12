import { Pool } from 'pg';
import './config_env';

export const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    password: process.env.PS_PASSWORD,
    database: process.env.PG_DATABASE,
    port: Number(process.env.PG_PORT)
});