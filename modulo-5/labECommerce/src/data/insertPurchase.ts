import { Purchase } from './../types/purchase';
import { connection } from './connection'

export default async function insertPurchase (purchase: Purchase) {
    await connection('labecommerce_purchases')
    .insert(purchase)
}