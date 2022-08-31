import { Product } from './../types/product';
import { connection } from './connection'

export default async function insertProduct (product: Product) {
    await connection('labecommerce_products')
    .insert(product)
}