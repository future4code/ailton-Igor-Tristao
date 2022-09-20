import app from "./app";
import UserEndpoint from "./endpoints/User";

const user = new UserEndpoint()

app.post('/user/signup', user.createUser)
app.post("/user/login",user.login)
app.put('/user/edit', user.editUser)

// Exercício 1
// a) Rounds = número que demora a realizar a criptografia, salt = primeira parte da criptografia que é gerada aleatoriamente.
//    Valores recomendados para o round é 12 até 19, eu utilizei 12 porque me foi ensinado a usar 12 visando mercado de trabalho.

// b) e c) Pasta services

// Exercício 2
// a) O cadastro, para poder armazenar no banco de dados a senha criptografada.

// b)
// c)

// d) 

// Exercício 3
// a) 
