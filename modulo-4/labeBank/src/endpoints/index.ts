import express, { Express, Request, Response } from "express";
import cors from "cors";
import { users, User, Extrato } from "../data/users";

const app: Express = express();
app.use(express.json());
app.use(cors());

// Visualizar todos usuarios
app.get("/users", (req: Request, res: Response) => {
  res.status(200).send(users);
});

// Retornar saldo da conta com um CPF
app.get("/users/:cpf", (req: Request, res: Response) => {
  try {
    const userCpf = req.params.cpf;

    let userBalance = 0;

    const userInfo = users.filter((user) => {
      if (user.cpf === userCpf) {
        userBalance = user.saldo;
        return user;
      }
    });

    // Checa se existe um usuário com este cpf
    if (userInfo.length === 0) {
      res.statusCode = 404;
      throw new Error(`User not found.`);
    }

    res.send(`Saldo: R$${userBalance}`);
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
});

// Criar um novo usuário
app.post("/users", (req: Request, res: Response) => {
  try {
    const { nome, cpf, dataNascimento } = req.body;

    // Checar se está recebendo os valores e se estão no formato correto.
    if (
      !nome ||
      !cpf ||
      !dataNascimento ||
      typeof nome !== "string" ||
      typeof cpf !== "string" ||
      typeof dataNascimento !== "string"
    ) {
      res.statusCode = 422;
      throw new Error(`Please check your fields...`);
    }

    // Checar a idade no momento do cadastro
    const currentDate: number = new Date().getTime();
    const dateOfBirth: number = new Date(dataNascimento).getTime();
    const idade: number = Math.floor((currentDate - dateOfBirth) / 31536000000);

    if (idade < 18) {
      res.statusCode = 422;
      throw new Error(`You need to be at least 18 years old to continue.`);
    }

    // Checar se estão enviando o cpf com 11 números
    if (cpf.toString().length !== 11) {
      res.statusCode = 422;
      throw new Error(`Invalid CPF`);
    }

    // Checar se já existe alguém com o mesmo cpf cadastrado
    const currentUsersCpf = users.map((user) => user.cpf);
    if (currentUsersCpf.includes(cpf.toString())) {
      res.statusCode = 422;
      throw new Error(
        `That CPF is already in use, please use a different one.`
      );
    }

    const newUser: User = {
      nome,
      cpf,
      dataNascimento,
      saldo: 0,
      extratoBancario: [],
    };

    users.push(newUser);
    res.status(201).send(users);
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
});

// Pagar uma conta
app.post("/userPayment", (req: Request, res: Response) => {
  try {
    const { data, valor, cpf } = req.body;

    const currentDate: number = new Date().getTime();
    const expireDate: number = new Date(data).getTime();

    const novoExtrato: Extrato = {
      value: valor,
      date: data || new Date().toLocaleDateString().toString(),
      description: "Conta para efetuar pagamento",
      status: "Não paga.",
    };

    if (expireDate < currentDate) {
      res.statusCode = 422;
      throw new Error(`This date has already passed.`);
    }

    let foundUser = "false";
    const [addBillToPay] = users.map((user) => {
      if (user.cpf === cpf) {
        if (user.saldo < valor) {
          res.statusCode = 422;
          throw new Error(`You dont have enough money. Your balance is: ${user.saldo}`);
        }
        foundUser = "true";
        return (user = {
          ...user,
          extratoBancario: [...user.extratoBancario, novoExtrato],
        });
      } else {
        return user;
      }
    });

    // Checa se existe um usuário com este nome e cpf.
    if (foundUser === "false") {
      res.statusCode = 404;
      throw new Error(`User not found.`);
    }

    res.send(addBillToPay);
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
});

// Adicionar um valor ao saldo
app.put("/users", (req: Request, res: Response) => {
  try {
    const { nome, cpf, valor } = req.body;

    const novoExtrato: Extrato = {
      value: valor,
      date: new Date().toLocaleDateString().toString(),
      description: "Depósito de dinheiro.",
    };

    let foundUser = "false";
    const [addBalance]: User[] = users.map((user) => {
      if (user.nome === nome && user.cpf === cpf) {
        foundUser = "true";
        return (user = {
          ...user,
          saldo: user.saldo + valor,
          extratoBancario: [...user.extratoBancario, novoExtrato],
        });
      } else {
        return user;
      }
    });

    // Checa se existe um usuário com este nome e cpf.
    if (foundUser === "false") {
      res.statusCode = 404;
      throw new Error(`User not found.`);
    }

    res.send(addBalance);
  } catch (error: any) {
    res.status(res.statusCode).send({ message: error.message });
  }
});

app.listen(3003, () => {
  console.log(`Server is running in http://localhost:3003`);
});
