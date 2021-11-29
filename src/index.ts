import express from "express";
import FileRoutes from "./app/routes/index";
import cors from "cors";
import "./app/config/config_env";

const app = express();
app.use(cors());
const PORT = process.env.API_PORT;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(FileRoutes);

app.listen(PORT, () =>
  console.log(`⚡️ [server]: Server is running at http://localhost:${PORT}⚡️`)
);
