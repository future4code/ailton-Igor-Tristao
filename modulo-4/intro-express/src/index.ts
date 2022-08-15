import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// Exercício 1
app.get("/", (req: Request, res: Response) => {
  res.send("Funcionou!");
});

// Exercício 2
type User = {
  id: number;
  name: string;
  phone: string;
  email: string;
  website: string;
};

// Exercício 3
const users: User[] = [
  {
    id: 1,
    name: "Igor Castro",
    phone: "22 92206-4415",
    email: "igorcastro55@hotmail.com",
    website: "bzerka.com",
  },
  {
    id: 2,
    name: "Alan Castro",
    phone: "22 95506-4985",
    email: "alan@hotmail.com",
    website: "alan.com",
  },
  {
    id: 3,
    name: "Carlos Rodrigues",
    phone: "21 98844-3241",
    email: "carlos@hotmail.com",
    website: "carlos.com",
  },
];

// Exercício 4
app.get("/users", (req: Request, res: Response) => {
  res.send(users);
});

// Exercício 5
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// Exercício 6
// Melhor criar fora, pois ele recebe um id do usuário de qualquer forma.

const posts: Post[] = [
  {
    userId: 1,
    id: 1,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
  {
    userId: 1,
    id: 2,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
  },
  {
    userId: 2,
    id: 3,
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
  },
  {
    userId: 3,
    id: 4,
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
  },
];

// Exercício 7
app.get("/posts", (req: Request, res: Response) => {
  res.send(posts);
});

// Exercício 8
app.get("/posts/:id", (req: Request, res: Response) => {
  const userId = +req.params.id;
  const idPosts = posts.filter((post) => {
    return post.userId === userId;
  });
  res.send(idPosts);
});

// Desafios
// Exercício 9
app.delete("/deletePost/:id", (req: Request, res: Response) => {
  const postId = +req.params.id;
  const postRemoved = posts.filter((post) => {
    return post.id !== postId;
  });
  res.send(postRemoved);
});

// Exercício 10
app.delete("/deleteUser/:id", (req: Request, res: Response) => {
  const userId = +req.params.id;
  const userRemoved = users.filter((user) => {
    return user.id !== userId;
  });
  res.send(userRemoved);
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
