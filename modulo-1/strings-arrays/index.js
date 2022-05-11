// Exercícios de interpretação de código

// 1.
// a. Undefined
// b. Null
// c. 11
// d. 3
// e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13
// f. 9

// 2.
// SUBI NUM ÔNIBOS EM MIRROCOS, 27

// Exercícios de escrita de código

// 1.
const nome = prompt("Qual é o seu nome?")
const email = prompt("Qual é o seu e-mail?")
console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o) ${nome}.`)

// // 2.
const comidasFavoritas = ["Batata-frita", "Macarrão", "Bolo", "Pizza", "Pão-de-queijo"]
console.log(comidasFavoritas)
console.log(`Essas são minhas comidas favoritas:
${comidasFavoritas[0]}
${comidasFavoritas[1]}
${comidasFavoritas[2]}
${comidasFavoritas[3]}
${comidasFavoritas[4]}`)
const comidaFavoritaUsuario = prompt("Qual é a sua comida favorita?")
comidasFavoritas[1] = comidaFavoritaUsuario
console.log(comidasFavoritas)

// 3.
const listaDeTarefas = []
console.log(listaDeTarefas)
const tarefa1 = prompt("Digite 3 tarefas que você precisa realizar no dia")
const tarefa2 = prompt("Digite 3 tarefas que você precisa realizar no dia")
const tarefa3 = prompt("Digite 3 tarefas que você precisa realizar no dia")
listaDeTarefas[0] = tarefa1
listaDeTarefas[1] = tarefa2
listaDeTarefas[2] = tarefa3
console.log(listaDeTarefas)
const indiceTarefaRealizada = prompt(`Qual tarefa você já realizou?
0 - ${tarefa1}
1 - ${tarefa2}
2 - ${tarefa3}`)
listaDeTarefas.splice(indiceTarefaRealizada,1)
console.log(listaDeTarefas)


















