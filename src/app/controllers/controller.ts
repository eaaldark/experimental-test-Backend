import { Request, Response } from "express";
import { pool } from "../config/database";
import { QueryResult } from "pg";

//Queries
const QITEMS = "select * from public.experimental_table";
const QITEM = "select * from public.experimental_table where id = $1";
const QINSERT = "INSERT INTO public.experimental_table(firtsname, middlename, lastname, phonenumber, birthday, email) values ($1, $2, $3, $4, $5, $6);";
const QUPDATE = "UPDATE public.experimental_table SET firtsname=$1, middlename=$2, lastname=$3, phonenumber=$4, email=$5 WHERE id = $6;";
const QDELETE = "DELETE FROM public.experimental_table WHERE id = $1;";
const QMAXITEM = "SELECT * FROM public.experimental_table where id = (SELECT max(id) FROM public.experimental_table);"

const homePage = async (req: Request, res: Response): Promise<Response> => {
  try {
    return res.status(200).json("Hola");
  } catch (error) {
    return res.status(500).json("Internal Server error");
  }
};

const getItems = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query(QITEMS);
    return res.status(200).json(response.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal Server error");
  }
};

const getItem = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.body;
  try {
    const response: QueryResult = await pool.query(QITEM, [id]);
    return res.status(200).json(response.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal Server error");
  }
};

const insertItem = async (req: Request, res: Response): Promise<Response> => {
  const { firtsname, middlename, lastname, phonenumber, birthday, email } = req.body;
  try {
    const response: QueryResult  = await pool.query(QINSERT, [
      firtsname,
      middlename,
      lastname,
      phonenumber,
      birthday,
      email,
    ]);
    const lastItem: QueryResult = await pool.query(QMAXITEM);
    return res
      .status(200)
      .json({ message: "Item Added OK", rowcount: response.rowCount, element: lastItem.rows });
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal Server error");
  }
};

const updateItem = async (req: Request, res: Response): Promise<Response> => {
  const { id, firtsname, middlename, lastname, phonenumber, email } = req.body;
  try {
    const currentItem: QueryResult = await pool.query(QITEM, [id]);
    const response: QueryResult = await pool.query(QUPDATE, [
      firtsname,
      middlename,
      lastname,
      phonenumber,
      email,
      id,
    ]);
    return res
      .status(200)
      .json({
        message: "Item Update OK",
        rowcount: response.rowCount,
        element: currentItem.rows,
      });
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal Server error");
  }
};

const deleteItem = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.body;
  try {
    const currentItem : QueryResult = await pool.query(QITEM, [id]);
    const response : QueryResult = await pool.query(QDELETE, [id]);
    return res.status(200).json({
      message: "Item deleted OK",
      rowcount: response.rowCount,
      element: currentItem.rows,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json("Internal Server error");
  }
};

export { homePage, getItems, getItem, insertItem, updateItem, deleteItem };
