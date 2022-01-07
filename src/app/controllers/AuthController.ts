import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { postgreSQLConnect, QueryResult } from "../config/database";
import fs from "fs";

const login = async (req: Request, res: Response): Promise<Response> => {
  let { email, password } = req.body;

  try {
    // const response: QueryResult = await postgreSQLConnect.query("select now()");
    // return res.status(200).json(response.rows);
    const user = {
      email: email.toLowerCase(),
      password: password,
    };

    var privateKey = fs.readFileSync("private.key");
    let token = jwt.sign( user , privateKey, { algorithm: "HS256", expiresIn: "1h" });
    return res.status(200).json(token);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Tripalosky: "Xd" });
  }
};

const register = async (req: Request, res: Response): Promise<Response> => {
  const {
    email,
    password,
    firstname,
    middlename,
    lastname,
    birthday,
    phonenumber,
  } = req.body;

  console.log(
    email,
    password,
    firstname,
    middlename,
    lastname,
    birthday,
    phonenumber
  );

  try {
    const response: QueryResult = await postgreSQLConnect.query("select now()");
    return res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Tripalosky: "Xd" });
  }
};

export { login, register };
