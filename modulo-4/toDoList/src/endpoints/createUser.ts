import { Request, Response } from "express";
import { connection } from "../data/baseDataBase";
import { User } from "../data/types";

export default async function createUser(req: Request, res: Response) {
  try {
    const { name, nickname, email } = req.body;

    if (
      typeof name !== "string" ||
      typeof nickname !== "string" ||
      typeof email !== "string"
    ) {
      res.statusCode = 406;
      throw new Error(`Please check your fields...`);
    }

    const newUser: User = {
      name,
      nickname,
      email,
    };

    await connection("ToDoListUsers").insert(newUser);

    res.status(201).send({ message: "User created successfully." });
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
}
