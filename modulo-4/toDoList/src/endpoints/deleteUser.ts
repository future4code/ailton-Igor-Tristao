import { Request, Response } from "express";
import { connection } from "../data/baseDataBase";

export default async function deleteUser(req: Request, res: Response) {
  try {
    const userId = req.params.id;

    if (!userId || userId === ":id") {
      res.statusCode == 400;
      throw new Error(`ID required.`);
    }

    // Checar se existe um usuário com este ID.
    const findUser = await connection("ToDoListUsers").where({ id: userId });

    if (findUser.length === 0) {
      res.statusCode = 404;
      throw new Error(`There is no user with this ID.`);
    }

    // Deletar suas responsabilidades nas tasks (se existirem)
    await connection.raw(`
        DELETE FROM TodoListResponsibleUserTaskRelation
        WHERE TodoListResponsibleUserTaskRelation.responsible_user_id = ${userId};
    `);

    // Pegar todos os ID's das tasks criadas por ele (caso existam)
    const tasksId = await connection("ToDoListTasks")
      .select("task_id")
      .where({ creator_user_id: userId });

    // Se existirem tasks criadas por este usuário execute:
    if (tasksId.length > 0) {
        
      // Deletar todas as tasks na tabela de junção.
      tasksId.map(async (task) => {
        await connection.raw(`
            DELETE FROM TodoListResponsibleUserTaskRelation
            WHERE task_id = ${task.task_id};
      `);
      });

      // Deletar todas as tasks na tabela de tasks.
      tasksId.map(async (task) => {
        await connection.raw(`
        DELETE FROM ToDoListTasks
        WHERE task_id = ${task.task_id};
        `);
      });
    }

    // Deletar o usuário
    await connection.raw(`
        DELETE FROM ToDoListUsers
        WHERE id = "${userId}";
    `);

    res.send({ message: "User deleted successfully." });
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
}
