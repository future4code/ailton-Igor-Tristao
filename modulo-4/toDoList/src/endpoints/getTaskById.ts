import { Request, Response } from "express";
import { connection } from "../data/baseDataBase";

export default async function getTaskById(req: Request, res: Response) {
  try {
    const taskId: number = Number(req.params.id);

    // Pegando a task com tal ID.
    const [getTask] = await connection.raw(`
        SELECT ToDoListTasks.task_id as taskId, title, description, limit_date as limitDate, status, creator_user_id as creatorUserId, creator_user_nickname as creatorUserNickname
        FROM ToDoListTasks
        JOIN ToDoListUsers
        ON ToDoListTasks.creator_user_id = ToDoListUsers.id
        where ToDoListTasks.task_id = ${taskId};
    `);

    // Checar se existe task com este ID.
    if (getTask.length === 0) {
      res.statusCode = 404;
      throw new Error(`There is no Task with this ID.`);
    }

    // Pegando os usuários responsáveis pela tarefa (se existirem)
    const getResponsibles = await connection.raw(`
        SELECT responsible_user_id as id, ToDoListUsers.nickname as nickname
        FROM TodoListResponsibleUserTaskRelation
        JOIN ToDoListUsers
        ON TodoListResponsibleUserTaskRelation.responsible_user_id = ToDoListUsers.id
        JOIN ToDoListTasks
        ON TodoListResponsibleUserTaskRelation.task_id = ToDoListTasks.task_id
        WHERE ToDoListTasks.task_id = ${taskId};
    `)

    // Trocando as informações do objeto de retorno ao usuário (arrumando data, adicionado usuários responsáveis)
    getTask[0].responsibleUsers = getResponsibles[0];
    getTask[0].limitDate = getTask[0].limitDate.toLocaleDateString();

    res.send({ task: getTask[0] });
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
}
