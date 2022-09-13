import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from 'net'
import getAllUsers from "./endpoints/getAllUsers";
import createUser from "./endpoints/createUser";
import getUserById from "./endpoints/getUserById";
import createTask from "./endpoints/createTask";
import getTaskById from "./endpoints/getTaskById";
import getTasksCreatedByUser from "./endpoints/getTasksCreatedByUser";
import updateTaskStatus from "./endpoints/updateTaskStatus";
import deleteTask from "./endpoints/deleteTask";
import deleteUser from "./endpoints/deleteUser";
import searchUser from "./endpoints/searchUser";
import editUser from "./endpoints/editUser";
import searchTaskStatus from "./endpoints/searchTasksStatus";
import searchTaskByTitleOrDescription from "./endpoints/searchTaskByTitleOrDescription";
import createResponsiblesForTasks from "./endpoints/createResponsiblesForTasks";
import getDelayedTasks from "./endpoints/getDelayedTasks";
import deleteResponsibleUserByTask from "./endpoints/deleteResponsibleUserByTask";
import getAllResponsiblesByTask from "./endpoints/getAllResponsiblesByTask";

const app: Express = express();
app.use(express.json());
app.use(cors());

// Pesquisar Usuário com termo - 8
app.get("/user", searchUser);

// Criar um usuário - 1
app.post("/user", createUser);

// Pegar todos os usuários - 6
app.get("/user/all", getAllUsers)

// Pegar usuário pelo id - 2
app.get("/user/:id", getUserById);

// Deletar um usuário - 20
app.delete('/user/:id', deleteUser)

// Editar usuário - 3
app.put("/user/edit/:id", editUser);

// Tarefas
// Pegar tarefas criadas por um usuário - 7
app.get("/task/user", getTasksCreatedByUser);

// Criar tarefa - 4
app.post("/task", createTask);

// Pegar todas as tarefas por status - 13
app.get('/task/status', searchTaskStatus)

// Procurar tarefa por termo - 17
app.get('/task/', searchTaskByTitleOrDescription)

// Atribuir um usuário responsável a uma tarefa 9 (16)
app.post("/task/responsible", createResponsiblesForTasks);

// Pegar todas as tarefas atrasadas - 14
app.get('/task/delayed', getDelayedTasks)

// Pegar tarefa pelo id - 5 (11)
app.get("/task/:id", getTaskById);

// Deletar tarefa - 19
app.delete('/task/:id', deleteTask)

// Atualizar o status da tarefa 12 (18)
app.put('/task/status/edit', updateTaskStatus)

// Retirar um usuário responsável de uma tarefa - 15
app.delete('/task/:taskId/responsible/:responsibleUserId', deleteResponsibleUserByTask)

// Pegar usuários responsáveis por uma tarefa - 10
app.get('/task/:id/responsible', getAllResponsiblesByTask)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
  } else {
      console.error(`Failure upon starting server.`);
  }
});