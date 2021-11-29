import express from "express";
import FileRoutes from "./app/routes/index";
import cors from "cors";
import { CLIENT_HOST, API_PORT } from "./app/config/config_env";

const app = express();
const whiteList: any = [CLIENT_HOST];
const corsOption = {
  origin: (origin: any, callback: (arg0: null, arg1: boolean) => void) => {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true);
      console.log(`Enable CORS for this request: ${origin}`);
    } else {
      callback(null, false);
      console.error(`Disable CORS for this request: ${origin}`);
    }
  },
};

app.use(cors(corsOption));

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(FileRoutes);

app.listen(API_PORT, () =>
  console.log(
    `⚡️ [server]: Server is running at http://localhost:${API_PORT}⚡️`
  )
);
