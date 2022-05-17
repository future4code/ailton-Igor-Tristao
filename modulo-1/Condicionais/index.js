/* Exercícios de interpretação de código

1. a.
O teste está verificando se o número é divisivel por 2, ou seja, se ele é par.

b.
Todos os números pares.

c.
Todos os números impares.

2. a.
Quando o usuário inserir uma fruta, o codigo irá retornar o nome desta fruta com seu determinado preço.

b.
O preço da fruta Maçã é R$2.25

c.
O preço da fruta Pêra é R$ 5.5

3. a.
Está pedindo ao usuário que insira um número e guardando este número em uma variável.

b.
Digitando o número 10 iria aparecer no console: Esse número passou no teste. 
Digitando o número -10 não iria aparecer nada no console, pois só temos um if, como não é true ele não iria imprimir nada e o console sairia vazio.

c.
Haveria um erro com relação ao console.log(mensagem), visto que ele está tentando imprimir uma variável que foi declarada dentro do escopo de bloco da função e o console.log está no escopo global.
Para consertar este erro o console.log(mensagem) deveria estar dentro do escopo da função também, dentro das {}.
*/

// Exercícios de escrita de código

// 1.
const idade = Number(prompt('Qual é a sua idade?'))
function podeDirigir(num) {
    if (num >= 18) {
        console.log('Você pode dirigir.')
    }
    else if(num < 18) {
        console.log('Você não pode dirigir.')
    }
}
// podeDirigir(idade)

// 2.
const turno = prompt(`Qual turno você estuda?
M (matutino)
V (vespertino)
N (noturno)`)
function cumprimentar(string) {
    if (string.toLowerCase() === 'm') {
        return `Bom Dia!`
    }
    else if(string.toLowerCase() === 'v') {
        return `Boa Tarde!`
    }
    else if(string.toLowerCase() === 'n') {
        return `Boa Noite!`
    }
    else {
        return `Opção inválida, tente novamente.`
    }
}
// console.log(cumprimentar(turno))

// 3.
const turno1 = prompt(`Qual turno você estuda?
M (matutino)
V (vespertino)
N (noturno)`)
function cumprimentar2 (string) {
    switch (string.toLowerCase()) {
        case 'm':
            return `Bom Dia!`
            break
        case 'v':
            return `Boa Tarde!`
            break
        case 'n':
            return `Boa Noite!`
            break
        default:
            return `Opção inválida, tente novamente`
    }
}
// console.log(cumprimentar2(turno1))

// 4.
const genero = prompt('Insira o gênero do filme')
const preçoIngresso = Number(prompt('Insira o preço do ingresso'))
function seraQueVai(string, number) {
    if (string.toLowerCase() === 'fantasia' && number < 15) {
        return `Bom Filme!`
    }
    else {
        return `Escolha outro filme :(`
    }
}
// console.log(seraQueVai(genero, preçoIngresso))

// Desafio!
// 1.
const genero1 = prompt('Insira o gênero do filme')
const preçoIngresso1 = Number(prompt('Insira o preço do ingresso'))
function seraQueVai(string, number) {
    if (string.toLowerCase() === 'fantasia' && number < 15) {
        const lanche = prompt('Qual lanche você vai comprar para comer?')
        console.log(`Bom Filme!`)
        return `Aproveite o seu ${lanche}`
    }
    else {
        return `Escolha outro filme :(`
    }
}
// console.log(seraQueVai(genero1, preçoIngresso1))

// 2.
const nomeCompleto = prompt('Insira seu nome completo')
const tipoDeJogo = prompt(`Insira o tipo do jogo:
IN - Internacional
DO - Doméstico`)
const etapaDoJogo = prompt(`Insira a etapa do jogo:
SF - Semi-final,
DT - Decisão de terceiro lugar ou
FI - Final`)
const categoria = prompt(`Insira a categoria do jogo (1, 2, 3 ou 4)`)
const qntDeIngressos = Number(prompt('Quantos ingressõs você vai comprar?'))

function valorCategoria(tipoDeJogo, etapaDoJogo, categoria) {
    if (tipoDeJogo.toLowerCase() === 'in' && etapaDoJogo.toLowerCase() === 'sf' && categoria === '1') {
        const valorIngresso = 1300*4.1
        const valorTotal = valorIngresso*qntDeIngressos
        console.log(`---Dados da compra--- 
        Nome do cliente:  ${nomeCompleto}
        Tipo do jogo:  Internacional 
        Etapa do jogo:  Semi-final
        Categoria:  ${categoria}
        Quantidade de Ingressos:  ${qntDeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${valorIngresso}
        Valor total:  R$ ${valorTotal}`)
    }
    else if (tipoDeJogo.toLowerCase() === 'in' && etapaDoJogo.toLowerCase() === 'sf' && categoria === '2') {
        const valorIngresso = 880*4.1
        const valorTotal = valorIngresso*qntDeIngressos
        console.log(`---Dados da compra--- 
        Nome do cliente:  ${nomeCompleto}
        Tipo do jogo:  Internacional 
        Etapa do jogo:  Semi-final
        Categoria:  ${categoria}
        Quantidade de Ingressos:  ${qntDeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${valorIngresso}
        Valor total:  R$ ${valorTotal}`)
    }
    else if (tipoDeJogo.toLowerCase() === 'in' && etapaDoJogo.toLowerCase() === 'sf' && categoria === '3') {
        const valorIngresso = 550*4.1
        const valorTotal = valorIngresso*qntDeIngressos
        console.log(`---Dados da compra--- 
        Nome do cliente:  ${nomeCompleto}
        Tipo do jogo:  Internacional 
        Etapa do jogo:  Semi-final
        Categoria:  ${categoria}
        Quantidade de Ingressos:  ${qntDeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${valorIngresso}
        Valor total:  R$ ${valorTotal}`)
    }
    else if (tipoDeJogo.toLowerCase() === 'in' && etapaDoJogo.toLowerCase() === 'sf' && categoria === '4') {
        const valorIngresso = 220*4.1
        const valorTotal = valorIngresso*qntDeIngressos
        console.log(`---Dados da compra--- 
        Nome do cliente:  ${nomeCompleto}
        Tipo do jogo:  Internacional 
        Etapa do jogo:  Semi-final
        Categoria:  ${categoria}
        Quantidade de Ingressos:  ${qntDeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${valorIngresso}
        Valor total:  R$ ${valorTotal}`)
    }
    else if (tipoDeJogo.toLowerCase() === 'do' && etapaDoJogo.toLowerCase() === 'sf' && categoria === '1') {
        const valorIngresso = 1300
        const valorTotal = valorIngresso*qntDeIngressos
        console.log(`---Dados da compra--- 
        Nome do cliente:  ${nomeCompleto}
        Tipo do jogo:  Nacional 
        Etapa do jogo:  Semi-final
        Categoria:  ${categoria}
        Quantidade de Ingressos:  ${qntDeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${valorIngresso}
        Valor total:  R$ ${valorTotal}`)
    }
    else if (tipoDeJogo.toLowerCase() === 'do' && etapaDoJogo.toLowerCase() === 'sf' && categoria === '2') {
        const valorIngresso = 880
        const valorTotal = valorIngresso*qntDeIngressos
        console.log(`---Dados da compra--- 
        Nome do cliente:  ${nomeCompleto}
        Tipo do jogo:  Nacional
        Etapa do jogo:  Semi-final
        Categoria:  ${categoria}
        Quantidade de Ingressos:  ${qntDeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${valorIngresso}
        Valor total:  R$ ${valorTotal}`)
    }
    else if (tipoDeJogo.toLowerCase() === 'do' && etapaDoJogo.toLowerCase() === 'sf' && categoria === '3') {
        const valorIngresso = 550
        const valorTotal = valorIngresso*qntDeIngressos
        console.log(`---Dados da compra--- 
        Nome do cliente:  ${nomeCompleto}
        Tipo do jogo:  Nacional
        Etapa do jogo:  Semi-final
        Categoria:  ${categoria}
        Quantidade de Ingressos:  ${qntDeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${valorIngresso}
        Valor total:  R$ ${valorTotal}`)
    }
    else if (tipoDeJogo.toLowerCase() === 'do' && etapaDoJogo.toLowerCase() === 'sf' && categoria === '4') {
        const valorIngresso = 220
        const valorTotal = valorIngresso*qntDeIngressos
        console.log(`---Dados da compra--- 
        Nome do cliente:  ${nomeCompleto}
        Tipo do jogo:  Nacional 
        Etapa do jogo:  Semi-final
        Categoria:  ${categoria}
        Quantidade de Ingressos:  ${qntDeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${valorIngresso}
        Valor total:  R$ ${valorTotal}`)
    }
    else if (tipoDeJogo.toLowerCase() === 'in' && etapaDoJogo.toLowerCase() === 'dt' && categoria === '1') {
        const valorIngresso = 660*4.1
        const valorTotal = valorIngresso*qntDeIngressos
        console.log(`---Dados da compra--- 
        Nome do cliente:  ${nomeCompleto}
        Tipo do jogo:  Internacional 
        Etapa do jogo:  Decisão do 3° lugar
        Categoria:  ${categoria}
        Quantidade de Ingressos:  ${qntDeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${valorIngresso}
        Valor total:  R$ ${valorTotal}`)
    }
    else if (tipoDeJogo.toLowerCase() === 'in' && etapaDoJogo.toLowerCase() === 'dt' && categoria === '2') {
        const valorIngresso = 440*4.1
        const valorTotal = valorIngresso*qntDeIngressos
        console.log(`---Dados da compra--- 
        Nome do cliente:  ${nomeCompleto}
        Tipo do jogo:  Internacional 
        Etapa do jogo:  Decisão do 3° lugar
        Categoria:  ${categoria}
        Quantidade de Ingressos:  ${qntDeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${valorIngresso}
        Valor total:  R$ ${valorTotal}`)
    }
    else if (tipoDeJogo.toLowerCase() === 'in' && etapaDoJogo.toLowerCase() === 'dt' && categoria === '3') {
        const valorIngresso = 330*4.1
        const valorTotal = valorIngresso*qntDeIngressos
        console.log(`---Dados da compra--- 
        Nome do cliente:  ${nomeCompleto}
        Tipo do jogo:  Internacional 
        Etapa do jogo:  Decisão do 3° lugar
        Categoria:  ${categoria}
        Quantidade de Ingressos:  ${qntDeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${valorIngresso}
        Valor total:  R$ ${valorTotal}`)
    }
    else if (tipoDeJogo.toLowerCase() === 'in' && etapaDoJogo.toLowerCase() === 'dt' && categoria === '4') {
        const valorIngresso = 170*4.1
        const valorTotal = valorIngresso*qntDeIngressos
        console.log(`---Dados da compra--- 
        Nome do cliente:  ${nomeCompleto}
        Tipo do jogo:  Internacional 
        Etapa do jogo:  Decisão do 3° lugar
        Categoria:  ${categoria}
        Quantidade de Ingressos:  ${qntDeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${valorIngresso}
        Valor total:  R$ ${valorTotal}`)
    }
    else if (tipoDeJogo.toLowerCase() === 'do' && etapaDoJogo.toLowerCase() === 'dt' && categoria === '1') {
        const valorIngresso = 660
        const valorTotal = valorIngresso*qntDeIngressos
        console.log(`---Dados da compra--- 
        Nome do cliente:  ${nomeCompleto}
        Tipo do jogo:  Nacional 
        Etapa do jogo:  Decisão do 3° lugar
        Categoria:  ${categoria}
        Quantidade de Ingressos:  ${qntDeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${valorIngresso}
        Valor total:  R$ ${valorTotal}`)
    }
    else if (tipoDeJogo.toLowerCase() === 'do' && etapaDoJogo.toLowerCase() === 'dt' && categoria === '2') {
        const valorIngresso = 440
        const valorTotal = valorIngresso*qntDeIngressos
        console.log(`---Dados da compra--- 
        Nome do cliente:  ${nomeCompleto}
        Tipo do jogo:  Nacional
        Etapa do jogo:  Decisão do 3° lugar
        Categoria:  ${categoria}
        Quantidade de Ingressos:  ${qntDeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${valorIngresso}
        Valor total:  R$ ${valorTotal}`)
    }
    else if (tipoDeJogo.toLowerCase() === 'do' && etapaDoJogo.toLowerCase() === 'dt' && categoria === '3') {
        const valorIngresso = 330
        const valorTotal = valorIngresso*qntDeIngressos
        console.log(`---Dados da compra--- 
        Nome do cliente:  ${nomeCompleto}
        Tipo do jogo:  Nacional
        Etapa do jogo:  Decisão do 3° lugar
        Categoria:  ${categoria}
        Quantidade de Ingressos:  ${qntDeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${valorIngresso}
        Valor total:  R$ ${valorTotal}`)
    }
    else if (tipoDeJogo.toLowerCase() === 'do' && etapaDoJogo.toLowerCase() === 'dt' && categoria === '4') {
        const valorIngresso = 170
        const valorTotal = valorIngresso*qntDeIngressos
        console.log(`---Dados da compra--- 
        Nome do cliente:  ${nomeCompleto}
        Tipo do jogo:  Nacional 
        Etapa do jogo:  Decisão do 3° lugar
        Categoria:  ${categoria}
        Quantidade de Ingressos:  ${qntDeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${valorIngresso}
        Valor total:  R$ ${valorTotal}`)
    }
    else if (tipoDeJogo.toLowerCase() === 'in' && etapaDoJogo.toLowerCase() === 'fi' && categoria === '1') {
        const valorIngresso = 1980*4.1
        const valorTotal = valorIngresso*qntDeIngressos
        console.log(`---Dados da compra--- 
        Nome do cliente:  ${nomeCompleto}
        Tipo do jogo:  Internacional 
        Etapa do jogo:  Final
        Categoria:  ${categoria}
        Quantidade de Ingressos:  ${qntDeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${valorIngresso}
        Valor total:  R$ ${valorTotal}`)
    }
    else if (tipoDeJogo.toLowerCase() === 'in' && etapaDoJogo.toLowerCase() === 'fi' && categoria === '2') {
        const valorIngresso = 1320*4.1
        const valorTotal = valorIngresso*qntDeIngressos
        console.log(`---Dados da compra--- 
        Nome do cliente:  ${nomeCompleto}
        Tipo do jogo:  Internacional 
        Etapa do jogo:  Final
        Categoria:  ${categoria}
        Quantidade de Ingressos:  ${qntDeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${valorIngresso}
        Valor total:  R$ ${valorTotal}`)
    }
    else if (tipoDeJogo.toLowerCase() === 'in' && etapaDoJogo.toLowerCase() === 'fi' && categoria === '3') {
        const valorIngresso = 880*4.1
        const valorTotal = valorIngresso*qntDeIngressos
        console.log(`---Dados da compra--- 
        Nome do cliente:  ${nomeCompleto}
        Tipo do jogo:  Internacional 
        Etapa do jogo:  Final
        Categoria:  ${categoria}
        Quantidade de Ingressos:  ${qntDeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${valorIngresso}
        Valor total:  R$ ${valorTotal}`)
    }
    else if (tipoDeJogo.toLowerCase() === 'in' && etapaDoJogo.toLowerCase() === 'fi' && categoria === '4') {
        const valorIngresso = 330*4.1
        const valorTotal = valorIngresso*qntDeIngressos
        console.log(`---Dados da compra--- 
        Nome do cliente:  ${nomeCompleto}
        Tipo do jogo:  Internacional 
        Etapa do jogo:  Final
        Categoria:  ${categoria}
        Quantidade de Ingressos:  ${qntDeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${valorIngresso}
        Valor total:  R$ ${valorTotal}`)
    }
    else if (tipoDeJogo.toLowerCase() === 'do' && etapaDoJogo.toLowerCase() === 'fi' && categoria === '1') {
        const valorIngresso = 1980
        const valorTotal = valorIngresso*qntDeIngressos
        console.log(`---Dados da compra--- 
        Nome do cliente:  ${nomeCompleto}
        Tipo do jogo:  Nacional 
        Etapa do jogo:  Final
        Categoria:  ${categoria}
        Quantidade de Ingressos:  ${qntDeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${valorIngresso}
        Valor total:  R$ ${valorTotal}`)
    }
    else if (tipoDeJogo.toLowerCase() === 'do' && etapaDoJogo.toLowerCase() === 'fi' && categoria === '2') {
        const valorIngresso = 1320
        const valorTotal = valorIngresso*qntDeIngressos
        console.log(`---Dados da compra--- 
        Nome do cliente:  ${nomeCompleto}
        Tipo do jogo:  Nacional
        Etapa do jogo:  Final
        Categoria:  ${categoria}
        Quantidade de Ingressos:  ${qntDeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${valorIngresso}
        Valor total:  R$ ${valorTotal}`)
    }
    else if (tipoDeJogo.toLowerCase() === 'do' && etapaDoJogo.toLowerCase() === 'fi' && categoria === '3') {
        const valorIngresso = 880
        const valorTotal = valorIngresso*qntDeIngressos
        console.log(`---Dados da compra--- 
        Nome do cliente:  ${nomeCompleto}
        Tipo do jogo:  Nacional
        Etapa do jogo:  Final
        Categoria:  ${categoria}
        Quantidade de Ingressos:  ${qntDeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${valorIngresso}
        Valor total:  R$ ${valorTotal}`)
    }
    else if (tipoDeJogo.toLowerCase() === 'do' && etapaDoJogo.toLowerCase() === 'fi' && categoria === '4') {
        const valorIngresso = 330
        const valorTotal = valorIngresso*qntDeIngressos
        console.log(`---Dados da compra--- 
        Nome do cliente:  ${nomeCompleto}
        Tipo do jogo:  Nacional 
        Etapa do jogo:  Final
        Categoria:  ${categoria}
        Quantidade de Ingressos:  ${qntDeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${valorIngresso}
        Valor total:  R$ ${valorTotal}`)
    }
}
// console.log(valorCategoria(tipoDeJogo,etapaDoJogo,categoria))
