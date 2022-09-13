import { Purchase } from './../types/purchase';
import { connection } from './connection'

export default async function userPurchases(userId: string) {
    const purchases = await connection.raw(`
        SELECT labecommerce_products.name as productName, quantity, price, total_price as totalPrice, image_url as imageUrl
        FROM labecommerce_purchases
        JOIN labecommerce_users
        ON user_id = labecommerce_users.id
        JOIN labecommerce_products
        ON product_id = labecommerce_products.id
        WHERE user_id = '${userId}';
    `)
    return purchases[0]
}