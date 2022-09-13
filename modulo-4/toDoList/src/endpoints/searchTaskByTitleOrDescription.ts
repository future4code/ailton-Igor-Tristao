import { Request, Response } from "express";
import { connection } from "../data/baseDataBase";

export default async function searchTaskByTitleOrDescription (req: Request, res: Response) {
  try {
    const { query } = req.query;

    // Pegando a(s) task(s) que apresentam o termo no título ou descrição.
    const getTask = await connection.raw(`
            SELECT *
            FROM ToDoListTasks
            WHERE title LIKE "%${query}%" AND description LIKE "%${query}%";
        `);

    // Alterando a data
    getTask[0].map((task: any) => {
      task.limit_date = task.limit_date.toLocaleDateString();
    });

    res.send({ tasks: getTask[0] });

  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
}
