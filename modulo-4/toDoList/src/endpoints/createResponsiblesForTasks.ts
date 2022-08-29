import { Request, Response } from "express";
import { connection } from "../data/baseDataBase";

export default async function createResponsiblesForTasks (req: Request, res: Response) {
  try {
    const { task_id, responsible_user_id } = req.body;

    // Checar se os dados foram enviados corretamente (não vazios).
    if (!task_id || !responsible_user_id) {
      res.statusCode = 400;
      throw new Error(`Please check your fields...`);
    }

    // Checar se existe task com este ID.
    const findTask = await connection("ToDoListTasks").where({
      task_id: task_id,
    });

    if (findTask.length === 0) {
      res.statusCode = 404;
      throw new Error(`Task with this ID was not found.`);
    }

    // Checar se existe(m) usuário(s) com este(s) ID(s).
    const users = [];
    for (let i = 0; i < responsible_user_id.length; i++) {
      const [user] = await connection("ToDoListUsers").where({
        id: responsible_user_id[i],
      });
      if (user) {
        users.push(user);
      }
    }

    if (users.length !== responsible_user_id.length) {
      res.statusCode = 404;
      throw new Error(
        `We couldn't find all the users with these ID's, please check if they all exists.`
      );
    }

    // Checar se já existe esta task como responsabilidade do usuário(s).
    const userResponsibilitiesTasks = await connection(
      "TodoListResponsibleUserTaskRelation"
    ).where({ task_id: task_id });

    const alreadyResponsible: number[] = [];
    userResponsibilitiesTasks.map((task) => {
      for (let i = 0; i < responsible_user_id.length; i++) {
        if (task.responsible_user_id === responsible_user_id[i]) {
          alreadyResponsible.push(responsible_user_id[i]);
        }
      }
    });

    if (alreadyResponsible.length > 0) {
      res.statusCode = 404;
      throw new Error(
        `One or more users are already responsible for this task.`
      );
    }

    // Adicionar todos os ids de usuários passados como responsáveis da tarefa.
    for (let i = 0; i < responsible_user_id.length; i++) {
      await connection.raw(`
            INSERT INTO TodoListResponsibleUserTaskRelation (task_id, responsible_user_id)
            values(${task_id}, ${responsible_user_id[i]});
            `);
    }

    res.status(201).send({ message: `Task added to user(s) responsability successfully.` });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
}
