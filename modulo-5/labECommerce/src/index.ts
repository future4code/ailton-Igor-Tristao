import { app } from './app'
import { connection } from './data/connection'
import createProduct from './endpoints/createProduct'
import createPurchase from './endpoints/createPurchase'
import createUser from './endpoints/createUser'
import getProducts from './endpoints/getProducts'
import getUserPurchases from './endpoints/getUserPurchases'
import getUsers from './endpoints/getUsers'

// Cadastro de usuário
app.post('/users', createUser)

// Buscar por todos os usuários
app.get('/users', getUsers)

// Cadastro de produto
app.post('/products', createProduct)

// Buscar por todos os produtos
app.get('/products', getProducts)

// Cadastrar uma compra
app.post('/purchases', createPurchase)

// Buscar histórico de compras de um usuário
app.get('/users/:user_id/purchases', getUserPurchases)