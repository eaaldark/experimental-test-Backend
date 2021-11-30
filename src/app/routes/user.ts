import { Router } from "express";
import { login, register } from "../controllers/controller.user";

const userRouter = Router();

userRouter.post("/login", login);
userRouter.post("/register", register);

export { userRouter };
