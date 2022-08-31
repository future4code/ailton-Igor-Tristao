import { Product } from './../types/product';
import { Request, Response } from "express";
import allProducts from '../data/allProducts';
import insertProduct from '../data/insertProduct';

export default async function createProduct(req: Request, res: Response) {
  try {

    const { name, price, image_url } = req.body

    if(!name || !price || !image_url) {
        res.statusCode = 400
        throw new Error(`All fields must be provided.`)
    }

    const products: Product[] = await allProducts()

    const newProduct: Product = {
        id: `${products.length + 1}`,
        name,
        price,
        image_url
    }

    await insertProduct(newProduct)

    res.status(201).send({ message: `Product added successfully to the list.`})

  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
}
