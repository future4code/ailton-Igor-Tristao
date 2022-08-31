import { Product } from '../types/product';
import { connection } from './connection'

export default async function allProducts() {
    const products: Product[] = await connection('labecommerce_products')
    return products
}