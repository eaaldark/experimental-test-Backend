import { Request, response, Response } from 'express';
import { pool } from '../config/database';
import { QueryResult } from 'pg';

//Queries
const QLIST = 'select * from public.experimental_table'
const QINSERT = 'insert into public.experimental_table(firtsname, middlename, lastname, phonenumber, birthday, email) values ($1, $2, $3, $4, $5, $6);';

const homePage = async (req: Request, res: Response): Promise<Response> => {
    try {
        return res.status(200).json("Hola");
    } catch (error) {
        return res.status(500).json('Internal Server error');
    }
}

const getItems = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await
            pool.query(QLIST);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
}

const getItem = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await
            pool.query(QLIST);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
}

const insertItem = async (req: Request, res: Response): Promise<Response> => {
    const { firtsname, middlename, lastname, phonenumber, birthday, email } = req.body
    try {
        const response = await pool.query(QINSERT, [firtsname, middlename, lastname, phonenumber, birthday, email]);
        return res.status(200).json({ message: 'Item Added OK', rowcount: response.rowCount });
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
}

const updateItem = async (req: Request, res: Response): Promise<Response> => {
    const { firtsname, middlename, lastname, phonenumber, birthday, email } = req.body
    try {
        const response = await pool.query(QINSERT, [firtsname, middlename, lastname, phonenumber, birthday, email]);
        return res.status(200).json({ message: 'Item Added OK', rowcount: response.rowCount });
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
}


const deleteItem = async (req: Request, res: Response): Promise<Response> => {
    const { firtsname, middlename, lastname, phonenumber, birthday, email } = req.body
    try {
        const response = await pool.query(QINSERT, [firtsname, middlename, lastname, phonenumber, birthday, email]);
        return res.status(200).json({ message: 'Item Added OK', rowcount: response.rowCount });
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
}

export { homePage, getItem, getItems, insertItem, updateItem, deleteItem}