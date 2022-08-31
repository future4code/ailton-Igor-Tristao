import { Purchase } from './../types/purchase';
import { connection } from './connection'

export default async function userPurchases(userId: string) {
    const purchases: Purchase[] = await connection.raw(`
        SELECT labecommerce_users.name, quantity, labecommerce_products.name, price, total_price, image_url
        FROM labecommerce_purchases
        JOIN labecommerce_users
        ON user_id = labecommerce_users.id
        JOIN labecommerce_products
        ON product_id = labecommerce_products.id
        WHERE user_id = '${userId}';
    `)
    return purchases[0]
}