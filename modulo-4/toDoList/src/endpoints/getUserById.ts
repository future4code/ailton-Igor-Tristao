import { Request, Response } from "express";
import { connection } from "../data/baseDataBase";
import { User } from "../data/types";

export default async function getUserById(req: Request, res: Response) {
  try {
    const userId: string = req.params.id as string;

    if (!userId || userId === ":id") {
      res.statusCode = 400;
      throw new Error(`ID required.`);
    }

    const findUser: User[] = await connection("ToDoListUsers")
      .select("id", "nickname")
      .where({
        id: userId,
      });

    if (findUser.length === 0) {
      res.statusCode = 404;
      throw new Error(`User not found`);
    }

    res.status(200).send({ user: findUser });
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
}
