import { User } from './../types/user';
import { connection } from './connection'

export default async function insertUser (user: User) {
    await connection('labecommerce_users')
    .insert(user)
}