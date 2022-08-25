import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import knex from "knex";
import { User } from "./types";

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors());

const connection = knex({
  client: "mysql",
  connection: {
    port: 3306,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    multipleStatements: true,
  },
});

// Criar um usuário
app.post("/user", async (req: Request, res: Response) => {
  try {
    const { name, nickname, email } = req.body;

    if (
      typeof name !== "string" ||
      typeof nickname !== "string" ||
      typeof email !== "string"
    ) {
      res.statusCode = 406;
      throw new Error(`Please check your fields...`);
    }

    const newUser: User = {
      name,
      nickname,
      email,
    };

    await connection("Users").insert(newUser);

    res.status(201).send({ message: "User created successfully." });
  } catch (error: any) {
    // if (error.sqlMessage.includes("Duplicate entry")) {
    //   res.status(401).send({ message: "Email is already in use." });
    // }

    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

// Pegar usuário pelo id
app.get("/user/:id", async (req, res) => {
  try {
    const userId: string = req.params.id as string;

    if (!userId || userId === ":id") {
      res.statusCode = 400;
      throw new Error(`ID required.`);
    }

    const findUser: User[] = await connection("Users").where({ id: userId });

    if (findUser.length === 0) {
      res.statusCode = 404;
      throw new Error(`User not found`);
    }

    const user = {
      id: findUser[0].id,
      nickname: findUser[0].nickname,
    };

    res.status(200).send(user);
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

// Editar usuário
app.put("/user/edit/:id", async (req, res) => {
  try {
    const userId: string = req.params.id as string;
    const { name, nickname, email } = req.body;

    if (name?.length === 0 || nickname?.length === 0 || email?.length === 0) {
      res.statusCode = 400;
      throw new Error(`Please check your fields...`);
    }

    await connection("Users")
      .where({ id: userId })
      .update({ name: name, nickname: nickname, email: email });

    res.status(200).send({ message: "User edited successfully" });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

// Criar tarefa
app.post("/task", async (req, res) => {
  try {
    const { title, description, limitDate, creatorUserId } = req.body;
    
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
});

// INSERT INTO tasks (title, description, limitDate, creatorUserId, creatorUserNickname)
// values('Correr', 'acordar cedo e ir correr', '2025/1/1', '2', 'bzerkA');

app.listen("3003", () => {
  console.log("listening on http://localhost:3003");
});
