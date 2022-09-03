import { Product } from './../types/product';
import { Request, Response } from "express";
import allProducts from "../data/allProducts";

export default async function getProducts(req: Request, res: Response) {
  try {

    let order = req.query.order as string
    let search = req.query.search as string

    if(!order) {
      order = ""
    }

    if(!search) {
      search = ""
    }

    // Pegar todos os produtos.
    const products: Product[] = await allProducts(order, search);

    // Checar se existem produtos
    if (products.length === 0) {
      res.statusCode = 404;
      throw new Error(`There is no registered product yet.`);
    }

    res.status(200).send({ products: products });
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
}
