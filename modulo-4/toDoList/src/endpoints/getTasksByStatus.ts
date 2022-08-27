import { Request, Response } from "express";
import { connection } from "../data/baseDataBase";

export default async function getTaskByStatus(req: Request, res: Response) {
  try {
    const status = req.query.status;

    if (!status) {
      res.statusCode = 400;
      throw new Error(`Status required.`);
    }

    const getTasks = await connection("ToDoListTasks").where({
      status: status,
    });

    // Arrumando a data das tasks encontradas.
    getTasks.map((task: any) => {
      task.limit_date = task.limit_date.toLocaleDateString();
    });

    res.send({ tasks: getTasks });
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
}
