import { Request, Response, Router } from "express";
import { QueryResult } from "pg";
import { pool } from "../config/database";
import sign from "jsonwebtoken";
import bcrypt from "bcrypt";
import cors from "cors";

const userRouter = Router();

const SALT = "64";
const EXPIRES = "1h";

userRouter.post("/login", async (req: Request, res: Response): Promise<Response> => {

    const {email, password} = req.body;

    try {
      const response: QueryResult = await pool.query("");
      return res.status(200).json(response.rows);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ "Tripalosky" : "Xd" });
    }
  }
);
