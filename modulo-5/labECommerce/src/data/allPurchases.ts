import { Purchase } from '../types/purchase';
import { connection } from './connection'

export default async function allPurchase() {
    const purchases: Purchase[] = await connection('labecommerce_purchases')
    return purchases
}