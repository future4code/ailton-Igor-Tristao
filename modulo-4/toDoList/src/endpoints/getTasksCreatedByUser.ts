import { Request, Response } from "express";
import { connection } from "../data/baseDataBase";
import { User } from "../data/types";

export default async function getTasksCreatedByUser (req: Request, res: Response) {
  try {
    const creatorUserId: number = Number(req.query.creatorUserId);

    if (!creatorUserId) {
      res.statusCode = 400;
      throw new Error(`ID Required.`);
    }

    // Checar se existe um usuário com este ID
    const findUser: User[] = await connection("ToDoListUsers").where({
      id: creatorUserId,
    });

    if (findUser.length === 0) {
      res.statusCode = 404;
      throw new Error(`User not found.`);
    }

    // Pegando as tasks do usuário com tal ID.
    const getTask = await connection.raw(`
        SELECT task_id as taskId, title, description, limit_date as limitDate, status, creator_user_id as creatorUserId, creator_user_nickname as creatorUserNickname
        FROM ToDoListTasks
        JOIN ToDoListUsers
        ON creator_user_id = ToDoListUsers.id
        WHERE creator_user_id = ${creatorUserId}
        `);

    // Arrumando as datas de todas as tasks que vierem.
    getTask[0].map((task: any) => {
      return (task.limitDate = task.limitDate.toLocaleDateString());
    });

    res.send({ tasks: getTask[0] });
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
}
