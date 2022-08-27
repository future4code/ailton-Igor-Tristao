import { Request, Response } from "express";
import { connection } from "../data/baseDataBase";

export default async function getUserTasksResponsible ( req: Request, res: Response ) {
  try {
    const taskId: number = Number(req.params.id)

    if (!taskId) {
      res.statusCode = 400;
      throw new Error(`Task ID Required.`);
    }

    const getUsers = await connection.raw(`
        SELECT id, nickname
        FROM TodoListResponsibleUserTaskRelation
        JOIN ToDoListUsers
        ON TodoListResponsibleUserTaskRelation.responsible_user_id = ToDoListUsers.id
        JOIN ToDoListTasks
        ON TodoListResponsibleUserTaskRelation.task_id = ToDoListTasks.task_id
        WHERE ToDoListTasks.task_id = ${taskId};
        `);

    res.status(200).send({ users: getUsers[0] });

  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message || error.sqlMessage });
  }
}
