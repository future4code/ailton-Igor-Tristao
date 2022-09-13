import { Request, Response } from "express";
import { connection } from "../data/baseDataBase";

export default async function updateTaskStatus(req: Request, res: Response) {
  try {
    const { taskId, status } = req.body;

    // Checar se os novos status estão sendo mandados corretamente.
    if (status !== "to_do" && status !== "doing" && status !== "done") {
      res.statusCode = 400;
      throw new Error(`New status required.`);
    }

    // Checar se o ID está chegando corretamente.
    if (!taskId) {
      res.statusCode = 400;
      throw new Error(`taskId required and should be a number.`);
    }

    // Pegando a(s) task(s) com o(s) ID(s) passado(s). 
    const tasks = [];
    for (let i = 0; i < taskId.length; i++) {
      const [task] = await connection("ToDoListTasks").where({
        task_id: taskId[i],
      });
      if (task) {
        tasks.push(task);
      }
    }

    if (tasks.length === 0) {
      res.statusCode = 404;
      throw new Error(`There is no task(s) with this ID(s).`);
    }

    // Atualizar o(s) status da(s) task(s)
    for (let i = 0; i < tasks.length; i++) {
      await connection("ToDoListTasks")
        .update({ status: status })
        .where({ task_id: taskId[i] });
    }

    res.send({ message: "Task(s) status changed successfully." });
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
}
