import { Request, Response } from 'express';
import allUsers from '../data/allUsers';
import insertUser from '../data/insertUser';
import { User } from '../types/user';

export default async function createUser (req: Request, res: Response) {
    try {
        
        const { name, email, password } = req.body

        if(!name || !email || !password) {
            res.statusCode = 400
            throw new Error(`All fields must be provided.`)
        }
        
        // Pegar todos os usuários para criação do próximo id.
        const users = await allUsers()

        const newUser: User = {
            id: `${users.length + 1}`,
            name,
            email,
            password
        }

        await insertUser(newUser)

        res.status(201).send({ message: `User created successfully.`})
    } catch(error:any) {
        res.status(res.statusCode || 500).send({ message: error.message || error.sqlMessage})
    }
}