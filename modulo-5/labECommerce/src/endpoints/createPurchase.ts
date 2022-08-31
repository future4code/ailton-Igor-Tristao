import { Product } from './../types/product';
import { User } from './../types/user';
import { Purchase } from './../types/purchase';
import { Request, Response } from "express";
import allPurchases from '../data/allPurchases';
import productById from '../data/productById';
import insertPurchase from '../data/insertPurchase';
import userById from '../data/userById';

export default async function createPurchase(req: Request, res: Response) {
  try {

    const { user_id, product_id, quantity } = req.body

    if(!user_id || !product_id || !quantity) {
        res.statusCode = 400
        throw new Error(`All fields must be provided.`)
    }

    // Checando se existe o usuário
    const findUser: User[] = await userById(user_id)

    if(findUser.length === 0) {
        res.statusCode = 404
        throw new Error(`User doesn't exist.`)
    }

    // Checando se existe o produto / pegando seu preço.
    const findProduct: Product[] = await productById(product_id)

    if(findProduct.length === 0) {
        res.statusCode = 404
        throw new Error(`Product doesn't exist.`)
    }

    // Pegando todas as compras para gerar um novo ID.
    const purchases: Purchase[] = await allPurchases()

    // Criando a nova compra
    const newPurchase: Purchase = {
        id: `${purchases.length+1}`,
        user_id,
        product_id,
        quantity,
        total_price: quantity*findProduct[0].price
    }

    await insertPurchase(newPurchase)
    res.status(201).send({ message: `Purchase made successfully.`})

  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
}
