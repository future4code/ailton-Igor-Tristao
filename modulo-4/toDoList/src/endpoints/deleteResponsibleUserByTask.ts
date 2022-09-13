import { Request, Response } from "express";
import { connection } from "../data/baseDataBase";

export default async function deleteResponsibleUserByTask ( req: Request, res: Response ) {
  try {
    const { taskId, responsibleUserId } = req.params;

    if (!taskId || taskId === ":taskId") {
      res.statusCode = 400;
      throw new Error(`Task ID required.`);
    }

    if (!responsibleUserId || responsibleUserId === ":responsibleUserId") {
      res.statusCode = 400;
      throw new Error(`User ID required.`);
    }


    // Checar se existe uma tarefa com este ID.
    const findTask = await connection("ToDoListTasks").where({
      task_id: taskId,
    });

    if (findTask.length === 0) {
      res.statusCode = 404;
      throw new Error(`Task not found.`);
    }

    // Checar se existe um usuário com este ID.
    const findUser = await connection("ToDoListUsers").where({
      id: responsibleUserId,
    });

    if (findUser.length === 0) {
      res.statusCode = 404;
      throw new Error(`User not found.`);
    }

    // Pegar os responsáveis da tarefa.
    const getTaskAndResponsibles = await connection.raw(`
    SELECT ToDoListTasks.task_id as taskId, responsible_user_id as responsibleUserId
    FROM TodoListResponsibleUserTaskRelation
    JOIN ToDoListUsers
    ON TodoListResponsibleUserTaskRelation.responsible_user_id = ToDoListUsers.id
    JOIN ToDoListTasks
    ON TodoListResponsibleUserTaskRelation.task_id = ToDoListTasks.task_id
    WHERE ToDoListTasks.task_id = ${taskId};
    `)

    // Checar se o usuário é responsável pela tarefa.
    const findResponsible = getTaskAndResponsibles[0].filter((task: any) => task.responsibleUserId === Number(responsibleUserId))

    if(findResponsible.length === 0) {
        res.statusCode = 404
        throw new Error(`User isn't responsible for this task.`)
    }

    // Tirar a responsabilidade do usuário naquela tarefa.
    await connection.raw(`
    DELETE FROM TodoListResponsibleUserTaskRelation
    WHERE task_id = ${taskId} AND responsible_user_id = ${responsibleUserId};
    `)

    res.send({ message: 'Success! User is no longer responsible for this task.'});
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
}
