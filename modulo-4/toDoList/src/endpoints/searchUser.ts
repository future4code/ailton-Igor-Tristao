import { Request, Response } from "express";
import { connection } from "../data/baseDataBase";

export default async function searchUser (req: Request, res: Response) {
  try {
    const searchWord = req.query.query;

    if (!searchWord) {
      res.statusCode = 400;
      throw new Error(`Required a word/letter to search.`);
    }

    const findUser = await connection.raw(`
            SELECT id, nickname
            FROM ToDoListUsers
            WHERE nickname LIKE "%${searchWord}%" OR email LIKE "%${searchWord}%"
            `);

    if (findUser[0].length === 0) {
      res.statusCode = 404;
      throw new Error(`No user was found.`);
    }

    res.send({ users: findUser[0] });
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
}
