import { User } from '../types/user';
import { connection } from './connection'

export default async function allUsers() {
    const users: User[] = await connection('labecommerce_users')
    return users
}