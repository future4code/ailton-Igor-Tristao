import { Request, Response } from "express";
import { connection } from "../data/connection";

export default async function getAllUsers(
  req: Request,
  res: Response
): Promise<void> {
  try {
    let name = req.query.name;
    let type = req.params.type
    
    let orderBy = req.query.orderBy;
    let ordenacao = req.query.ordenacao;

    let page = req.query.page
    let offset = 0

    const userPerPage = 5
    offset = userPerPage * (Number(page) - 1)

   if(!page) {
      offset = 0
   }

    if (!name) {
      name = "";
    }

    if (!type || type === ':type') {
      type = ""
    }

    if(!orderBy) {
      orderBy = "name"
    }

    if(!ordenacao) {
      ordenacao = "desc"
    }

    const users = await connection("aula48_exercicio")
    .where("name", "like", `%${name}%`)
    .where("type","like",`%${type}%`)
    .orderBy(`${orderBy}`, `${ordenacao}`)
    .limit(userPerPage)
    .offset(offset)

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No recipes found");
    }

    res.status(200).send(users);
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
}

// const result = await connection("aula49_recipes")
//                .where("title","like",`%${nome}%`)
//                .orderBy("title",`${ordernacao}`)
//                .limit(produtosPorPagina)
//                .offset(offset)
