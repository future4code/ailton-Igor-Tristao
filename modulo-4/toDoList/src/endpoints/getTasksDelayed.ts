import { Request, Response } from "express";
import { connection } from "../data/baseDataBase";

export default async function getTasksDelayed(req: Request, res: Response) {
  try {

    // Pegar as tasks atrasadas
    const getTasks = await connection.raw(`
    SELECT *
    FROM ToDoListTasks
    WHERE limit_date < current_date()
    `);

    // Arrumar as datas.
    getTasks[0].map((task: any) => {
      task.limit_date = task.limit_date.toLocaleDateString();
    });

    res.status(200).send({ tasks: getTasks[0] });
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
}
