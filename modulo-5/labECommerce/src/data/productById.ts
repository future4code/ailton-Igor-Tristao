import { Product } from '../types/product';
import { connection } from './connection'

export default async function productById(id: string) {
    const product: Product[] = await connection('labecommerce_products')
    .where({ id: id})
    return product
}