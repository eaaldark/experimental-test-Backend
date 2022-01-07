import { Router } from "express";
import { login, register } from "../controllers/AuthController";

const authRoute = Router();

authRoute.post("/login", login);
authRoute.post("/register", register);

export {authRoute} ;
