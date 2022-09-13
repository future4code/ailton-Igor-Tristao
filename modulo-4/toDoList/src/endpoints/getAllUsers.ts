import { Request, Response } from "express";
import { connection } from "../data/baseDataBase";
import { User } from "../data/types";

export default async function getAllUsers(req: Request, res: Response) {
  try {
    const getUsers: User[] = await connection("ToDoListUsers").select(
      "id",
      "nickname"
    );

    if (getUsers.length === 0) {
      res.statusCode = 404;
      throw new Error(`There is no user yet.`);
    }

    res.status(200).send({ users: getUsers });
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
}
