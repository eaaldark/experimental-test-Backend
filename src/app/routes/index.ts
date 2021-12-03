import { Router } from "express";
const router = Router();
import {
  insertItem,
  getItems,
  getItem,
  homePage,
  updateItem,
  deleteItem,
} from "../controllers/PublicController";
import { userRouter } from "./user";

router.get("/", homePage);
router.get("/get", getItems);
router.post("/getitem", getItem);
router.post("/insert", insertItem);
router.post("/update", updateItem);
router.post("/delete", deleteItem);
router.use("/user", userRouter);

export default router;
