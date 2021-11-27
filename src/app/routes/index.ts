import { Router } from "express";
const router = Router();
import {
  insertItem,
  getItems,
  getItem,
  homePage,
  updateItem,
  deleteItem,
} from "../controllers/controller";

router.get("/", homePage);
router.get("/get", getItems);
router.get("/getitem", getItem);
router.post("/insert", insertItem);
router.post("/update", updateItem);
router.post("/delete", deleteItem);

export default router;
