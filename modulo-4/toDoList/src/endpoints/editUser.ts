import { Request, Response } from "express";
import { connection } from "../data/baseDataBase";

export default async function editUser (req: Request, res: Response) {
  try {
    const userId: string = req.params.id as string;
    const { name, nickname, email } = req.body;

    if (name?.length === 0 || nickname?.length === 0 || email?.length === 0) {
      res.statusCode = 400;
      throw new Error(`Please check your fields...`);
    }

    await connection("ToDoListUsers")
      .where({ id: userId })
      .update({ name: name, nickname: nickname, email: email });

    res.status(200).send({ message: "User edited successfully" });
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
}
