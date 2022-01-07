import { Router } from "express";
import { authRoute } from "./auth";

import {
  insertItem,
  getItems,
  getItem,
  homePage,
  updateItem,
  deleteItem,
} from "../controllers/PublicController";
const router = Router();

router.use("/user", authRoute);
router.get("/", homePage);
router.get("/get", getItems);
router.post("/getitem", getItem);
router.post("/insert", insertItem);
router.post("/update", updateItem);
router.post("/delete", deleteItem);
router.use("/user", authRoute);

export default router;
