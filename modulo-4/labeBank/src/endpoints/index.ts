import express, { Express, Request, Response } from "express";
import cors from "cors";
import { users } from "../data/users";
import {
  CreateUserBody,
  AddBillBody,
  AddBalanceBody,
  User,
  Extrato,
  TransferBody,
} from "../data/types";

const app: Express = express();
app.use(express.json());
app.use(cors());

// Visualizar todos os usuarios
app.get("/users", (req: Request, res: Response) => {
  res.status(200).send(users);
});

// Consultar saldo de um usuário
app.get("/users/:cpf/balance", (req: Request, res: Response) => {
  try {
    const cpf: string = req.params.cpf;

    const [userInfo]: User[] = users.filter((user) => user.cpf === cpf);

    // Checa se existe um usuário com este cpf
    if (!userInfo) {
      res.statusCode = 404;
      throw new Error(`User not found.`);
    }

    res.send({ message: `Saldo: R$${userInfo.balance}` });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

// Criar um novo usuário
app.post("/users", (req: Request, res: Response) => {
  try {
    const { name, cpf, birthDate }: CreateUserBody = req.body;

    // Checar se está recebendo os valores e se estão no formato correto.
    if (
      !name ||
      !cpf ||
      !birthDate ||
      typeof name !== "string" ||
      typeof cpf !== "string" ||
      typeof birthDate !== "string"
    ) {
      res.statusCode = 400;
      throw new Error(`Please check your fields...`);
    }

    const [day, month, year] = birthDate.split("/");
    const birthDateFixed: string = `${year}/${month}/${day}`;

    // Checar a idade no momento do cadastro
    const currentDate: number = new Date().getTime();
    const dateOfBirth: number = new Date(birthDateFixed).getTime();
    const idade: number = Math.floor((currentDate - dateOfBirth) / 31536000000);

    if (idade < 18) {
      res.statusCode = 401;
      throw new Error(`You need to be at least 18 years old to continue.`);
    }

    // Checar se estão enviando o cpf com 11 números
    if (cpf.length !== 11) {
      res.statusCode = 400;
      throw new Error(`Invalid CPF`);
    }

    // Checar se já existe alguém com o mesmo cpf cadastrado
    const [findCpf] = users.filter((user) => user.cpf === cpf);
    if (findCpf) {
      res.statusCode = 400;
      throw new Error(
        `That CPF is already in use, please use a different one.`
      );
    }

    const newUser: User = {
      name,
      cpf,
      birthDate,
      balance: 0,
      bankStatement: [],
    };

    users.push(newUser);
    res.status(201).send({ message: `User created successfully` });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

// Adicionar uma conta para pagar
app.post("/users/payment", (req: Request, res: Response) => {
  try {
    const { date, value, cpf }: AddBillBody = req.body;

    if (
      !date ||
      !value ||
      !cpf ||
      typeof date !== "string" ||
      typeof value !== "number" ||
      typeof cpf !== "string"
    ) {
      res.statusCode = 400;
      throw new Error("Please check your fields...");
    }

    const [day, month, year]: string[] = date.split("/");
    const dateFixed: string = `${year}/${month}/${day}`;

    const currentDate: number = new Date().getTime();
    const expireDate: number = new Date(dateFixed).getTime();

    // Checa se a data já passou.
    if (expireDate < currentDate) {
      res.statusCode = 422;
      throw new Error(`This date has already passed.`);
    }

    const novoExtrato: Extrato = {
      value: value,
      date: date || new Date().toLocaleDateString().toString(),
      description: "Conta para efetuar pagamento",
      status: "Não paga.",
    };

    const [userFound] = users.filter((user) => user.cpf === cpf);

    // Checa se existe um usuário com este cpf.
    if (!userFound) {
      res.statusCode = 404;
      throw new Error(`User not found.`);
    }

    // Checa se o saldo é maior que o valor da conta
    if (userFound.balance < value) {
      res.statusCode = 406;
      throw new Error(
        `You dont have enough money. Your balance is: ${userFound.balance}`
      );
    }

    users.map((user) => {
      if (user.cpf === cpf) {
        user.bankStatement.push(novoExtrato);
      }
    });

    res.send({
      message: `Payment entered successfully, it expires on ${date}`,
    });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

// Transferencia entre contas
app.post("/users/transfer", (req: Request, res: Response) => {
  try {
    const {
      name,
      userCpf,
      recipientName,
      recipientCpf,
      value,
    }: TransferBody = req.body;

    if (
      !name ||
      !userCpf ||
      !recipientName ||
      !recipientCpf ||
      !value
    ) {
      res.statusCode = 400;
      throw new Error("Please check your fields...");
    }

    // Extrato de quem realizou a transação
    const transacaoEfetuada: Extrato = {
      value: value,
      date: new Date().toLocaleDateString().toString(),
      description: `Pagamento efetuado para ${recipientName}`,
      status: "Não paga.",
    };

    // Extrato de quem recebeu a transação
    const transacaoRecebida: Extrato = {
      value: value,
      date: new Date().toLocaleDateString().toString(),
      description: `Depósito recebido de ${name}`,
    };

    // Variável utilizada para setar alguns erros (linha 272)
    let checkUsers = 0;
    users.map((user) => {
      if (user.cpf === userCpf) {
        if (user.balance < value) {
          res.statusCode = 406;
          throw new Error(
            `You dont have enough money. Your balance is: ${user.balance}`
          );
        }
        // Caso seja 1, apenas o cpf do usuário está correto
        checkUsers = checkUsers + 1;
        user.bankStatement.push(transacaoEfetuada);
        return user;
      } else if (user.cpf === recipientCpf) {
        // Caso seja 2, apenas o cpf do destinatário está correto e caso seja 3 significa que os 2 estão corretos.
        checkUsers = checkUsers + 2;
        user.balance = user.balance + value;
        user.bankStatement.push(transacaoRecebida);
        return user;
      }
    });

    switch (checkUsers) {
      case 0:
        res.statusCode = 404;
        throw new Error(`Recipient's and Sender's users not found.`);
      case 1:
        res.statusCode = 404;
        throw new Error(`Recipient's user not found.`);
      case 2:
        res.statusCode = 404;
        throw new Error(`Sender's user not found.`);
    }

    res.send({ message: `Transfer made successfully` });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

// Adicionar um valor ao saldo
app.put("/users/deposit", (req: Request, res: Response) => {
  try {
    const { name, cpf, value }: AddBalanceBody = req.body;

    // Checar se os dados estão vindo corretamente
    if (
      !name ||
      !cpf ||
      !value ||
      typeof name !== "string" ||
      typeof cpf !== "string" ||
      typeof value !== "number"
    ) {
      res.statusCode = 400;
      throw new Error("Please check your fields...");
    }

    const novoExtrato: Extrato = {
      value: value,
      date: new Date().toLocaleDateString().toString(),
      description: "Depósito de dinheiro.",
    };

    // Encontrando o usuário
    const [userFound]: User[] = users.filter((user) => user.cpf === cpf);

    // Checar se existe um usuário com este cpf
    if (!userFound) {
      res.statusCode = 404;
      throw new Error("User not found.");
    }

    users.map((user) => {
      if (user.cpf === cpf) {
        user.balance = user.balance + value;
        user.bankStatement.push(novoExtrato);
      }
    });

    res.send({ message: `Deposit made successfully` });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

// Atualizar saldo do usuário
app.put("/users/:cpf/updateBalance", (req: Request, res: Response) => {
  try {
    const userCpf: string = req.params.cpf;
    const currentDate: number = new Date().getTime();

    // Encontra o usuário com tal cpf
    const [getUser]: User[] = users.filter((user) => user.cpf === userCpf);

    // Checar se existe um usuário com este cpf
    if (!getUser) {
      res.statusCode = 400;
      throw new Error(`User not found.`);
    }

    const pegarDividas: number = getUser.bankStatement
      // Checar se existe uma conta não paga.
      .filter((extrato) => {
        if (extrato.status === "Não paga") {
          return extrato;
        }
      })
      // Checar se a conta não paga já venceu ou não
      .filter((extrato) => {
        const [day, month, year] = extrato.date.split("/");
        const dataFixed = `${year}/${month}/${day}`;
        if (new Date(dataFixed).getTime() <= currentDate) {
          return extrato;
        } else {
          return false;
        }
      })
      // Pega os valores das contas que já venceram
      .map((extrato) => {
        return extrato.value;
      })
      // Soma estes valores
      .reduce((curr, prev) => curr + prev, 0);

    // Checar se possui divida para pagar
    if (pegarDividas === 0) {
      res.statusCode = 404;
      throw new Error(`Cannot find any payments to be made.`);
    }

    // Atualizar o saldo
    getUser.balance = getUser.balance - pegarDividas;

    // Trocar o status de não paga para pago.
    getUser.bankStatement.map((extrato) => {
      const dataArray = extrato.date.split("/");
      const dataFixed = `${dataArray[2]}/${dataArray[1]}/${dataArray[0]}`;
      if (new Date(dataFixed).getTime() <= currentDate) {
        extrato.status = "Conta paga";
      } else {
        return extrato;
      }
    });

    res.status(200).send({ message: `Contas vencidas pagas com sucesso.` });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

app.listen(3003, () => {
  console.log(`Server is running in http://localhost:3003`);
});
