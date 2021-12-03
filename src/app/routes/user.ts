import { Router } from "express";

const userRouter = Router();

userRouter.post("/user");
userRouter.get("/users");
userRouter.post("/newuser");
userRouter.put("/adduser");
userRouter.delete("/eraseuser");

export { userRouter };
