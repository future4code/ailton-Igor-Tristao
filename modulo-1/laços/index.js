// /* Exercícios de interpretação de código

// 1.
// O código esta somando os numeros 0, 1, 2, 3 e 4.
// O resultado impresso será 10.

// 2.a.
// Será impresso no console todos os números que satisfazerem a condição, que são os números maiores que 18.
// Será impresso no console: 19, 21, 23, 25, 27 e 30, cada um em uma linha.

// b.
// sim, utilizando o indexOf()

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
// 		console.log(`elemento ${numero} - índice ${lista.indexOf(numero)}`)
// 	}

// 3.
// Para cada linha (valor inserido) o codigo irá imprimir um console log com um asterisco. 
// Se colocar 1, retornará: *
// Se colocar 2, retornará: * e depois **
// E assim sucessivamente, 
// Com o valor 4, irá imprimir *, **, *** e **** um em cada linha, retornando assim 4 linhas.

// */

// Exercícios de escrita de código

// 1.
const pets = prompt('Insira quantos animais de estimação você têm:')
let arrayPets = []

if (pets === '0') {
    console.log(`Que pena! Você pode adotar um pet!`)
}
else if (pets !== 0) {
    for(i = 0; i < pets; i++) {
        const nomePets = prompt('Insira o nome dos seus animais de estimação:')
        arrayPets.push(nomePets)
    }
}
// console.log(arrayPets)

// 2. a.
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// a.
function imprimirOriginal(array) {
    for(let numero of arrayOriginal) {
        console.log(numero)
    }
}
// imprimirOriginal(arrayOriginal)

// b.
function imprimirOriginalDividido10(array) {
    for(let numero of arrayOriginal) {
        console.log(numero/10)
    }
}
// imprimirOriginalDividido10(arrayOriginal)

// c.
let arrayPares = []
function originalPares(array) {
    for(let numero of arrayOriginal) {
        if(numero%2 === 0) {
            arrayPares.push(numero)
        }
    }
console.log(arrayPares)
}
// originalPares(arrayOriginal)

// d.
let arrayStrings = []
let i = 0

function strings(array) {
    for(let numero of arrayOriginal) {
        arrayStrings.push(`O elemento do índex ${i} é ${numero}`)        
        i++
    }
console.log(arrayStrings)
}
// strings(arrayOriginal)

// e.
let valorMaior = 0
let valorMenor = 50000

function maiorEMenor(array) {
    for(let numero of arrayOriginal) {
        if(numero > valorMaior){
            valorMaior = numero
        }
    }
    for(let numero1 of arrayOriginal) {
        if(numero1 < valorMenor) {
            valorMenor = numero1
        }
           
    }
console.log(`O maior valor é: ${valorMaior} e o menor valor é: ${valorMenor}`)
}
// maiorEMenor(arrayOriginal)

// Desafios!!

// 1.
// const numeroCerto = +(prompt('Insira o número para ser acertado'))
// console.log('Vamos jogar!')

// let numeroChute = Number(prompt('Tente adivinhar o número!'))
// let tentativas = 1

function adivinharNum(num) {
    while(num !== numeroCerto) {
        if(num > numeroCerto) {
            console.log(`O número chutado foi: ${num}`)
            console.log('Errou! O número é menor')
            num = Number(prompt('Tente adivinhar o número!'))
            tentativas++
        }
        else if(num < numeroCerto) {
            console.log(`O número chutado foi: ${num}`)
            console.log('Errou! O numero é maior')
            num = Number(prompt('Tente adivinhar o número!'))
            tentativas++
        }
    }
    if(num === numeroCerto) {
        console.log(`O número chutado foi: ${num}`)
        console.log('Acertou!')
        console.log(`O número de tentativas foi de: ${tentativas}`)
    }
}
// adivinharNum(numeroChute)

// 2.
// const numeroCerto = Math.floor((Math.random() * 10) + 1);
// console.log('Vamos jogar!')

// let numeroChute = Number(prompt('Tente adivinhar o número!'))
// let tentativas = 1

function adivinharNum(num) {
    while(num !== numeroCerto) {
        if(num > numeroCerto) {
            console.log(`O número chutado foi: ${num}`)
            console.log('Errou! O número é menor')
            num = Number(prompt('Tente adivinhar o número!'))
            tentativas++
        }
        else if(num < numeroCerto) {
            console.log(`O número chutado foi: ${num}`)
            console.log('Errou! O numero é maior')
            num = Number(prompt('Tente adivinhar o número!'))
            tentativas++
        }
    }
    if(num === numeroCerto) {
        console.log(`O número chutado foi: ${num}`)
        console.log('Acertou!')
        console.log(`O número de tentativas foi de: ${tentativas}`)
    }
}
// adivinharNum(numeroChute)















