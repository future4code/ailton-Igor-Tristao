/* Exercícios de interpretação de código

1.
a. 10
   50

b. Nada.

2.
a. Função para transformar todo o texto inserido em minusculo e procurar se existe a palavra cenoura nele, retornando TRUE ou FALSE.

b.
i. true
ii. true
iii. true
*/

// Exercícios de escrita de código

// 1.a.
function info() {
    console.log(`Eu sou Igor, tenho 26 anos, moro no Rio de Janeiro e sou estudante.`)
}
info()

// b.
function infos(nome, idade, cidade, profissao) {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro no ${cidade} e sou ${profissao}`)
}
infos("Igor", 26, "RJ", "estudante") 

// 2.a.
function somar(num1,num2) {
    const soma = num1+num2
    return soma
}
console.log(somar(5,5))    //10

// b.
function num1Maiornum2 (num1, num2) {
    const calculo = num1 >= num2
    return calculo
}
console.log(num1Maiornum2(4,2))  //true
console.log(num1Maiornum2(2,4))  //false

// c.
function par(num) {
    const numPar = (num % 2) === 0
    return numPar
}
console.log(par(2))  //true
console.log(par(3))  //false

// d.
function funcao(texto) {
    let tamanho = texto.length
    let maiusculo = texto.toUpperCase() 
    return [tamanho, maiusculo]
}
console.log(funcao("ave maria"))   //[9, 'AVE MARIA']

// 3.
function somar(a,b) {
    let soma = a+b
    return soma
}

function subtrair(a,b) {
    let diminuir = a-b
    return diminuir
}

function dividir(a,b) {
    let divisao = a/b
    return divisao
}

function multiplicar(a,b) {
    let multiplicacao = a*b
    return multiplicacao
}

const num1Usuario = Number(prompt("Insira o primeiro número"))
const num2Usuario = Number(prompt("Insira o segundo número"))
console.log(`Números inseridos: ${num1Usuario} e ${num2Usuario}
Soma:`, somar(num1Usuario,num2Usuario),
`
Diferença:`, subtrair(num1Usuario,num2Usuario),
`
Multiplicação:`, multiplicar(num1Usuario,num2Usuario),
`
Divisão:`, dividir(num1Usuario,num2Usuario))

// Desafio!

// 1.a.
const numero = (num) => {
    console.log(num)
}
numero(10)    //10
numero(15)    //15

// b.
const soma = (num1, num2) => num1+num2
numero(soma(10,15))    //25

// 2.
function pitagoras(cat1, cat2) {
    let calculo = Math.sqrt(((cat1*cat1)+(cat2*cat2)))
    return calculo
}
console.log(pitagoras(3,4))   //5
console.log(pitagoras(6,8))   //10










