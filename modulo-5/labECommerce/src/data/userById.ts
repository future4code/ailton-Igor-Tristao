import { User } from '../types/user';
import { connection } from './connection'

export default async function userById(id: string) {
    const user: User[] = await connection('labecommerce_users')
    .where({ id: id})
    return user
}