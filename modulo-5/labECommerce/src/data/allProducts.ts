import { Product } from '../types/product';
import { connection } from './connection'

export default async function allProducts(order: string, search: string) {
    const products: Product[] = await connection('labecommerce_products')
    .where('name', 'like', `%${search}%`)
    .orderBy('name', `${order}`)
    return products
}