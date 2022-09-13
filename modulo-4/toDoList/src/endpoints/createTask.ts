import { Request, Response } from "express";
import { connection } from "../data/baseDataBase";
import { User, Task } from "../data/types";

export default async function createTask(req: Request, res: Response) {
  try {
    const { title, description, limitDate, creatorUserId } = req.body;

    if (!title || !description || !limitDate || !creatorUserId) {
      res.statusCode = 400;
      throw new Error(`Please check your fields...`);
    }

    const [day, month, year] = limitDate.split("/");
    const limitDateFixed: string = `${year}/${month}/${day}`;

    // Encontrar usuário para checar se existe com este ID + pegar apelido.
    const [findUser]: User[] = await connection("ToDoListUsers").where({
      id: creatorUserId,
    });

    // Checar se encontrou algum usuário
    if (!findUser) {
      res.statusCode = 404;
      throw new Error(`User not found.`);
    }

    const newTask: Task = {
      title,
      description,
      limit_date: limitDateFixed,
      creator_user_id: creatorUserId,
      creator_user_nickname: findUser.nickname,
    };

    // Adicionar nova tarefa na lista.
    await connection("ToDoListTasks").insert(newTask);

    res.status(201).send({ message: "Task created successfully." });
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
}
