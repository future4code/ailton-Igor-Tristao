import { Request, Response } from "express";
import { connection } from "../data/baseDataBase";

export default async function deleteTask(req: Request, res: Response) {
  try {
    const taskId = req.params.id;

    if (!taskId || taskId === ":id") {
      res.statusCode = 400;
      throw new Error(`ID required.`);
    }

    const findTask = await connection("ToDoListTasks").where({
      task_id: taskId,
    });

    if(findTask.length === 0) {
        res.statusCode = 404
        throw new Error(`There is no task with this ID.`)
    }

    // Deletando os usuários responsáveis por esta tarefa
    await connection.raw(`
        DELETE FROM TodoListResponsibleUserTaskRelation
        WHERE TodoListResponsibleUserTaskRelation.task_id = ${taskId};
    `)

    // Deletando a tarefa
    await connection.raw(`
        DELETE FROM ToDoListTasks
        WHERE task_id = ${taskId}
    `)

    res.send({ message: 'Task deleted successfully.'})
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
}
