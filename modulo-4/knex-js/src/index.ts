import express, { Express, Request, Response } from "express";
import cors from "cors";
import knex from "knex";
import dotenv from "dotenv";
import { Movie } from "./types"

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

// Exercício 1
// a)
// Retorna um array dentro de um array, por isto usamos [0] para retornar apenas as informações que queremos.

// b)
app.get("/actor", async (req, res) => {
  try {
    const name: string = req.query.name as string;

    if (!name || name === ":name") {
      res.statusCode = 400;
      throw new Error(`Name is required.`);
    }

    const [getUser] = await connection.raw(`
        SELECT * FROM Actor
        WHERE name = "${name}";
        `);

    if (getUser.length === 0) {
      res.statusCode = 404;
      throw new Error(`User not found.`);
    }

    res.status(200).send(getUser[0]);
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

// c)
app.get("/actor/gender/:gender", async (req, res) => {
  try {
    const gender: string = req.params.gender as string;

    if (!gender || gender === ":gender") {
      res.statusCode = 400;
      throw new Error(`Required a gender.`);
    }

    if (gender !== "male" && gender !== "female") {
      res.statusCode = 406;
      throw new Error(`This field only accepts 'male' or 'female', try again.`);
    }

    const [getUsers] = await connection.raw(`
        SELECT COUNT(*) as Quantity FROM Actor
        WHERE gender = "${gender}";
        `);

    res.status(200).send(getUsers[0]);
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

// Exercício 2
// a)
app.put("/actor/update/salary", async (req, res) => {
  try {
    const { id, newSalary } = req.body;

    if (
      !id ||
      !newSalary ||
      typeof id !== "string" ||
      typeof newSalary !== "number"
    ) {
      res.statusCode = 400;
      throw new Error(`Please check your fields...`);
    }

    const findUser = await connection("Actor").where("id", id);

    if (findUser.length === 0) {
      res.statusCode = 404;
      throw new Error(`User not found.`);
    }

    await connection("Actor").where({ id: id }).update({ salary: newSalary });

    res.status(200).send({ message: "Salary updated successfully" });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

// b)
app.delete("/actor/:id", async (req, res) => {
  try {
    const userId: string = req.params.id as string;

    if (!userId || userId === ":id") {
      res.statusCode = 400;
      throw new Error(`ID required.`);
    }

    const findUser = await connection("Actor").where({ id: userId });

    if (findUser.length === 0) {
      res.statusCode = 404;
      throw new Error(`User not found.`);
    }

    await connection("Actor").where({ id: userId }).delete();

    res.status(200).send({ message: `User deleted successfully.` });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

// c)
app.get("/actor/avgSalary/:gender", async (req, res) => {
  try {
    const gender: string = req.params.gender as string;

    if (!gender || gender === ":gender") {
      res.statusCode = 400;
      throw new Error(`Gender required.`);
    }

    if (gender !== "male" && gender !== "female") {
      res.statusCode = 400;
      throw new Error(`This field only accepts 'male' or 'female', try again.`);
    }

    const [avgSalary] = await connection("Actor")
      .where({ gender: gender })
      .avg("salary as averageSalary");

    res.send(avgSalary);
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
});

// Exercício 3
// a)
app.get("/actor", async (req, res) => {
  try {
    const gender: string = req.query.gender as string;

    if (!gender || gender === ":gender") {
      res.statusCode = 400;
      throw new Error(`Required a gender.`);
    }

    if (gender !== "male" && gender !== "female") {
      res.statusCode = 406;
      throw new Error(`This field only accepts 'male' or 'female', try again.`);
    }

    const quantity = await connection("Actor")
      .count("* as quantity")
      .where({ gender: gender });

    res.status(200).send(quantity);
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

// Exercício 4
// a) Já feito no exercício 2)a)
// b) Já feito no exercício 2)b)

// Desafios
// Exercício 5
app.post("/movie", async (req, res) => {
  try {
    const { title, synopsis, release_date, rating, playing_limit_date } =
      req.body;

    if (
      !title ||
      !synopsis ||
      !release_date ||
      !rating ||
      !playing_limit_date
    ) {
      res.statusCode = 406;
      throw new Error(`Please check your fields...`);
    }

    const newMovie: Movie = {
      title,
      synopsis,
      release_date,
      rating,
      playing_limit_date,
    };

    await connection("Movies").insert(newMovie);

    res.send({ message: "Movie added successfully" });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

// Exercício 6
app.get("/movie/all", async (req, res) => {
  try {
    const movies = await connection("Movies").limit(15);

    res.status(200).send({ movies: movies });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

// Exercício 7
app.get("/movie/search", async (req, res) => {
  try {
    const name: string = req.query.name as string;

    if(!name) {
        res.statusCode = 406
        throw new Error(`Name required.`)
    }

    const getMovies = await connection.raw(`
        SELECT * FROM Movies
        WHERE (title LIKE "%${name}%" OR synopsis LIKE "%${name}%")
        ORDER BY release_date ASC;
        `);

    if(getMovies[0].length === 0) {
        res.statusCode = 404
        throw new Error(`This name wasn't found in the list of movies.`)
    }

    res.send({ movies: getMovies[0] });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

app.listen("3003", () => {
  console.log("listening on http://localhost:3003");
});
