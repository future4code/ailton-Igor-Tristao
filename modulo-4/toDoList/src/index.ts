import express, { Express } from "express";
import cors from "cors";
import getAllUsers from "./endpoints/getAllUsers";
import createUser from "./endpoints/createUser";
import getUserById from "./endpoints/getUserById";
import updateUser from "./endpoints/updateUser";
import createTask from "./endpoints/createTask";
import getTaskById from "./endpoints/getTaskById";
import getTasksCreatedByUser from "./endpoints/getTasksCreatedByUser";
import getUserQuery from "./endpoints/getUserQuery";
import setTaskToAnUser from "./endpoints/setTaskToAnUser";
import getUserTasksResponsible from "./endpoints/getUserTasksResponsible";
import updateTaskStatus from "./endpoints/updateTaskStatus";
import getTaskByStatus from "./endpoints/getTasksByStatus";
import getTasksDelayed from "./endpoints/getTasksDelayed";
import deleteTaskResponsible from "./endpoints/deleteTaskResponsible";
import getTaskByQuery from "./endpoints/getTaskByQuery";
import deleteTask from "./endpoints/deleteTask";
import deleteUser from "./endpoints/deleteUser";

const app: Express = express();
app.use(express.json());
app.use(cors());

// Pegar todos os usuários
app.get("/user/all", getAllUsers)

// Criar um usuário
app.post("/user", createUser);

// Pegar usuário pelo id
app.get("/user/:id", getUserById);

// Editar usuário
app.put("/user/edit/:id", updateUser);

// Criar tarefa
app.post("/task", createTask);

// Procurar tarefa por query 
app.get('/task/', getTaskByQuery)

// Pegar tarefas criadas por um usuário
app.get("/task/user", getTasksCreatedByUser);

// Pesquisar Usuário com termo
app.get("/user", getUserQuery);

// Atribuir um usuário responsável a uma tarefa
app.post("/task/responsible", setTaskToAnUser);

// Pegar usuários responsáveis por uma tarefa
app.get('/task/:id/responsible', getUserTasksResponsible)

// Atualizar o status da tarefa
app.put('/task/status/edit', updateTaskStatus)

// Pegar todas as tarefas por status 
app.get('/task/status', getTaskByStatus)

// Pegar todas as tarefas atrasadas
app.get('/task/delayed', getTasksDelayed)

// Pegar tarefa pelo id
app.get("/task/:id", getTaskById);

// Retirar um usuário responsável de uma tarefa
app.delete('/task/:taskId/responsible/:responsibleUserId', deleteTaskResponsible)

// Deletar tarefa
app.delete('/task/:id', deleteTask)

// Deletar um usuário
app.delete('/user/:id', deleteUser)

app.listen("3003", () => {
  console.log("listening on http://localhost:3003");
});
