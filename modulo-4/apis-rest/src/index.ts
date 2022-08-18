import express, { Express, Request, Response } from "express";
import cors from "cors";
import { users, User } from "./data";

const app: Express = express();
app.use(express.json());
app.use(cors());

// Exercício 1
// a) Método GET
// b) Entidade: users
app.get("/users", (req: Request, res: Response) => {
  res.send(users);
});

// Exercício 2
// a) Através de pathParams, porque só necessito de uma informação.
// b) Fazendo uma verificação nos dados vindo da requisição (linha 27)
// app.get("/users/:type", (req: Request, res: Response) => {
//   try {
//     const type = req.params.type;

//     if (type !== "ADMIN" && type !== "NORMAL") {
//       res.statusCode = 422;
//       throw new Error(`Invalid type`);
//     }

//     const usersWithType = users.filter((user) => user.type === type);
//     res.send(usersWithType);
//   } catch (error: any) {
//     res.status(res.statusCode).send({ message: error.message });
//   }
// });

// Exercício 3  (só funciona com o exercício 2 comentado)
// a) Query (buscas)
app.get("/users/search", (req: Request, res: Response) => {
  try {
    const name: string = req.query.name as string;

    if (!name) {
      res.statusCode = 422;
      throw new Error(`Please check the fields...`);
    }

    const getUserByName: User[] | undefined = users.filter(
      (user) => user.name === name
    );

    if (!getUserByName || getUserByName.length === 0) {
      res.statusCode = 404;
      throw new Error(`User not found.`);
    }

    res.status(200).send(getUserByName);
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
});

// Exercício 4
// a) Não mudou nada, continua criando.
// b) Não, considero o método post correto, pois estamos criando um usuário NOVO e não editando.
app.post("/users", (req: Request, res: Response) => {
  try {
    const { name, email, type, age }: User = req.body;

    if (!name || !email || !type || !age) {
      res.statusCode = 422;
      throw new Error(`Please check the fields...`);
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof type !== "string" ||
      typeof age !== "number"
    ) {
      res.statusCode = 422;
      throw new Error(
        `Please check the fields... Name, email and type should be a string and age a number.`
      );
    }

    const newUser: User = {
      id: users.length + 1,
      name,
      email,
      type,
      age,
    };

    users.push(newUser);
    res.status(201).send(users);
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
});

// Exercício 5 (desafio)
app.put("/users/:id", (req: Request, res: Response) => {
  try {
    const userId: number = Number(req.params.id);

    if (isNaN(userId)) {
      res.statusCode = 422;
      throw new Error(`Invalid user ID`);
    }

    const findUser: User[] = users.map((user) => {
      if (user.id === userId) {
        return (user = { ...user, name: user.name + " " + "-ALTERADO" });
      } else {
        return user;
      }
    });

    res.send(`User edited successfully`);
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
});

// Exercício 7 (desafio)
app.delete("/users/:id", (req: Request, res: Response) => {
  try {
    const userId: number = Number(req.params.id);

    if(isNaN(userId)) {
        res.statusCode = 422
        throw new Error(`Invalid user ID`)
    }

    const userDeleted = users.filter((user) => user.id !== userId);

    if(userDeleted.length === users.length) {
        res.statusCode = 404
        throw new Error(`User not found`)
    }

    res.send(`User deleted successfully`);
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
});

app.listen(3003, () => {
  console.log("listening on http://localhost:3003");
});
