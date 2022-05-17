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

const cadastro = {
    nome: prompt('Insira seu nome completo'),
    tipoDeJogo: prompt(`Insira o tipo do jogo:
    IN - Internacional
    DO - Doméstico`),
    etapaDoJogo: prompt(`Insira a etapa do jogo:
    SF - Semi-final,
    DT - Decisão de terceiro lugar ou
    FI - Final`),
    categoria: prompt(`Insira a categoria do jogo (1, 2, 3 ou 4)`),
    qntDeIngresso: Number(prompt('Quantos ingressõs você vai comprar?')),
    precoIngresso: 0
}

function valorIngresso(obj) {  
    if (obj.tipoDeJogo.toLowerCase() === 'in') {
        obj.tipoDeJogo = 'Internacional'
        if(obj.etapaDoJogo.toLowerCase() === 'sf') {  
            obj.etapaDoJogo = 'Semi-final'  
            if(obj.categoria === '1') {obj.precoIngresso = 1320*4.1}
            else if(obj.categoria === '2') {obj.precoIngresso = 880*4.1}
            else if(obj.categoria === '3') {obj.precoIngresso = 550*4.1}
            else if(obj.categoria === '4') {obj.precoIngresso = 220*4.1}
        }
        else if(obj.etapaDoJogo.toLowerCase() === 'dt') {
            obj.etapaDoJogo = 'Decisão 3° lugar'  
            if(obj.categoria === '1') {obj.precoIngresso = 660*4.1}
            else if(obj.categoria === '2') {obj.precoIngresso = 440*4.1}
            else if(obj.categoria === '3') {obj.precoIngresso = 330*4.1}
            else if(obj.categoria === '4') {obj.precoIngresso = 170*4.1}
        }
        else if(obj.etapaDoJogo.toLowerCase() === 'fi') {
            obj.etapaDoJogo = 'Final'  
            if(obj.categoria === '1') {obj.precoIngresso = 1980*4.1}
            else if(obj.categoria === '2') {obj.precoIngresso = 1320*4.1}
            else if(obj.categoria === '3') {obj.precoIngresso = 880*4.1}
            else if(obj.categoria === '4') {obj.precoIngresso = 330*4.1}
        }    
    }
    else if(obj.tipoDeJogo.toLowerCase() === 'do') {
        obj.tipoDeJogo = 'Nacional'  
        if(obj.etapaDoJogo.toLowerCase() === 'sf') {
            obj.etapaDoJogo = 'Semi-final'  
            if(obj.categoria === '1') {obj.precoIngresso = 1320}
            else if(obj.categoria === '2') {obj.precoIngresso = 880}
            else if(obj.categoria === '3') {obj.precoIngresso = 550}
            else if(obj.categoria === '4') {obj.precoIngresso = 220}
        }
        else if(obj.etapaDoJogo.toLowerCase() === 'dt') {
            obj.etapaDoJogo = 'Decisão 3° lugar'  
            if(obj.categoria === '1') { obj.precoIngresso = 660}
            else if(obj.categoria === '2') { obj.precoIngresso = 440}
            else if(obj.categoria === '3') {obj.precoIngresso = 330}
            else if(obj.categoria === '4') {obj.precoIngresso = 170}
        }
        else if(obj.etapaDoJogo.toLowerCase() === 'fi') {
            obj.etapaDoJogo = 'Final'  
            if(obj.categoria === '1') {obj.precoIngresso = 1980}
            else if(obj.categoria === '2') {obj.precoIngresso = 1320}
            else if(obj.categoria === '3') {obj.precoIngresso = 880}
            else if(obj.categoria === '4') {obj.precoIngresso = 330}
        }    
}
console.log(`---Dados da compra--- 
Nome do cliente:  ${obj.nome}
Tipo do jogo:  ${obj.tipoDeJogo}
Etapa do jogo:  ${obj.etapaDoJogo}
Categoria:  ${obj.categoria}
Quantidade de Ingressos:  ${obj.qntDeIngresso} ingressos 
---Valores--- 
Valor do ingresso:  R$ ${obj.precoIngresso}
Valor total:  R$ ${obj.precoIngresso*obj.qntDeIngresso}`)
}
// valorIngresso(cadastro)