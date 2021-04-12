import * as path from 'path';
import { config } from 'dotenv';
config({
    path: path.join(__dirname, "../../../.env")
});

const {
    NODE_ENV,
    API_PORT,
    KEY_ID,
    PG_USER,
    PG_HOST,
    PS_PASSWORD,
    PG_DATABASE,
    PG_PORT
} = process.env;

const enviromentsConfig = {
    local: {
        port: API_PORT,
        kid: KEY_ID,
        dbuser: PG_USER,
        dbhost: PG_HOST,
        dbppass: PS_PASSWORD,
        dbname: PG_DATABASE,
        dbport: PG_PORT
    }
}

export { config }
