
/*
1) 
Primeiro será mostrado o valor de B, logo, 10.  (10)
Segundo será mostrado os dois valores, a e b, após a alteração do b, logo 10 e 5.  (10 5)

2) 
a > 10 > b > c > 10
b > 20 > c > a > 10
c > a > 10
Logo, aparecerá: (10, 10, 10)

3) 
Variável P pode ser horasTrabalhadasPorDia
Variável T pode ser salarioDiario
*/

/* Exercício de escrita de código

1) */
let seuNome               // a)
let suaIdade              // b)
console.log(typeof seuNome, typeof suaIdade) // c) undefined undefined
// d) Variável com valor nulo, sem atribuição do null, é uma variável indefinida = undefined.

seuNome = prompt("Qual é o seu nome?") 
suaIdade = prompt("Qual é a sua idade?")
console.log(seuNome, suaIdade)    // e)
console.log(typeof seuNome, typeof suaIdade)   // f
console.log("Olá", seuNome, "você tem", suaIdade, "anos.")  //g)

// 2)
let casaco = prompt("Você está usando casaco no momento?")
let calça = prompt("Você está usando calça no momento?")
let bone = prompt("Você está usando boné no momento?")

a = casaco
b = calça
c = bone
console.log("Você está usando casaco no momento?", a)
console.log("Você está usando calça no momento?", b)
console.log("Você está usando boné no momento?", c)


// 3)

let a = 10
let b = 25

c = a    //É necessário criar uma terceira variável para manter o valor do A constante, para poder transformar o B em A.
a = b 
b = c 
console.log(a, b)

// Desafio!

const primeiroNumero = +prompt("Digite um número")
const segundoNumero = +prompt("Digite outro número")

console.log("O primeiro número somado ao segundo número resulta em:", primeiroNumero+segundoNumero)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", primeiroNumero*segundoNumero)




