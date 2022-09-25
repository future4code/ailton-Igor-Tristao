import { userRouter } from './router/userRouter'
import { app } from './controller/app'
import { UserController } from './controller/UserController'
import { application } from 'express'

const userController = new UserController()

app.post('/signup', userController.create)

app.post('/login', userController.login)

app.get('/users', userController.getUsers)

app.delete('/users/:id', userController.deleteUser)