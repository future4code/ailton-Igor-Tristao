import { User } from './../types/user';
import { Purchase } from './../types/purchase';
import { Request, Response } from "express";
import userById from "../data/userById";
import userPurchases from "../data/userPurchases";

export default async function getUserPurchases(req: Request, res: Response) {
  try {
    const user_id = req.params.user_id;

    if(!user_id) {
        res.statusCode = 400
        throw new Error(`user_id requred.`)
    }

    const findUser: User[] = await userById(user_id)

    if(findUser.length === 0) {
        res.statusCode = 404
        throw new Error(`There is no user with this ID.`)
    }

    const purchases: Purchase = await userPurchases(user_id);

    res.status(200).send({ purchases: purchases });
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
}
