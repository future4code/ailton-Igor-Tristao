import { Purchase } from './../types/purchase';
import { User } from "./../types/user";
import { Request, Response } from "express";
import allUsers from "../data/allUsers";
import userPurchases from "../data/userPurchases";

export default async function getUsers(req: Request, res: Response) {
  try {

    // Pegar todos os usuários.
    const users = await allUsers();

    // Checar se existem usuários
    if (users.length === 0) {
      res.statusCode = 404;
      throw new Error(`There is no registered user yet.`);
    }

    // Adicionando histórico de compras aos usuários
    for(let i = 0; i < users.length; i++) {
      const purchases = await userPurchases(users[i].id)
      users[i] = {...users[i], purchases: purchases}
    }

    res.status(200).send({ users: users });
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
}
