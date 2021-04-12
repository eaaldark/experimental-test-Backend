import express from "express";
import FileRoutes from './routes/index';
import './config/config_env'
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Routes
app.use(FileRoutes);

app.listen(3000, () => console.log("App Listening on port " + 3000));
