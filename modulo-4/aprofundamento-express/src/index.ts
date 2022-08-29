import express, { Express, request, Request, Response } from "express";
import cors from "cors";
import { ToDoList, Task } from "./data";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/getAllTasks", (req: Request, res: Response) => {
  res.send(toDoList);
});

// Exercício 1
app.get("/ping", (req: Request, res: Response) => {
  res.send("pong");
});

// Exercício 2
// Arquivo data

// Exercício 3
const toDoList: ToDoList[] = [
  {
    userId: 1,
    id: 1,
    title: "A fazer do primeiro usuário",
    completed: true,
  },
  {
    userId: 1,
    id: 2,
    title: "Outro a fazer do primeiro usuário",
    completed: false,
  },
  {
    userId: 2,
    id: 3,
    title: "A fazer do segundo usuário",
    completed: false,
  },
  {
    userId: 2,
    id: 4,
    title: "Outro a fazer do segundo usuário",
    completed: true,
  },
];

// Exercício 4
app.get("/getTasks/:status", (req: Request, res: Response) => {
  const status: string = req.params.status;

  const toDoListFiltered: ToDoList[] = toDoList.filter((task: ToDoList) => {
    if (task.completed.toString() === status) {
      return task;
    }
  });
  res.send(toDoListFiltered);
});

// Exercício 5
app.post("/createTask", (req: Request, res: Response) => {
  const { userId, title } = req.body;

  const infoTask: Task = {
    userId,
    id: toDoList.length + 1,
    title,
    completed: false,
  };

  toDoList.push(infoTask);
  res.status(201).send("Tarefa criada com sucesso.");
});

// Exercício 6
app.put("/updateTask/:taskId", (req: Request, res: Response) => {
  const id = Number(req.params.taskId);

  const findTask: ToDoList[] = toDoList
    .filter((task) => {
      if (task.id === id) {
        return task;
      }
    })
    .map((task) => {
      return (task = { ...task, completed: !task.completed });
    });

  res.send(findTask);
});

// Exercício 7
app.delete("/deleteTask/:taskId", (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const deletedTask: ToDoList[] = toDoList.filter((task) => {
    return task.id !== id;
  });

  res.send(deletedTask);
});

// Exercício 8 (com desafio)
app.get("/getSelectedTasks/:userId", (req: Request, res: Response) => {
  const userId = Number(req.params.userId);

  const userTasks: ToDoList[] = toDoList.filter((task) => {
    return task.userId === userId;
  });

  const otherTasks: ToDoList[] = toDoList.filter((task) => {
    return task.userId !== userId;
  });

  const tasksSelected = {
    todos: {
      selectedUser: userTasks,
      others: otherTasks,
    },
  };

  res.send(tasksSelected)
});




app.listen(3003, () => {
  console.log("Server is running http://localhost:3003");
});
