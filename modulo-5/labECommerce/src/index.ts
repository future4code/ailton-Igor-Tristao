import { app } from './app'
import createProduct from './endpoints/createProduct'
import createPurchase from './endpoints/createPurchase'
import createUser from './endpoints/createUser'
import getProducts from './endpoints/getProducts'
import getUserPurchases from './endpoints/getUserPurchases'
import getUsers from './endpoints/getUsers'

// Buscar por todos os usuários (+desafio)
app.get('/users', getUsers)

// Cadastro de usuário
app.post('/users', createUser)

// Buscar por todos os produtos  (+desafio)
app.get('/products', getProducts)

// Cadastro de produto
app.post('/products', createProduct)

// Buscar histórico de compras de um usuário
app.get('/users/:user_id/purchases', getUserPurchases)

// Cadastrar uma compra
app.post('/purchases', createPurchase)
