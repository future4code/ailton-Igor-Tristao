/* Exercícios de interpretação de código
1.
a. false
b. false
c. false       gabarito = true
d. boolean

2. Todo valor inserido em um prompt retorna como string (texto).
Quando fazemos a soma de textos eles são concatenados.
Caso os números inseridos tivessem sido: 10 e 15, respectivamente, o que seria impresso no console é: 1015 

3. Para que o valor impresso seja a soma dos números, precisa transformar de string para number.
Primeira solução: let primeiroNumero = Number(prompt("Digite um numero!"))    -> Colocar number()
Segunda solução: let primeiroNumero = +prompt("Digite um numero!")            -> Colocar um + antes do prompt
*/

// Exercícios de escrita de código 

// 1.
let idadeUsuario = Number(prompt("Quantos anos você tem?"))
let idadeMelhorAmigo = Number(prompt("Quantos anos tem seu melhor amigo(a)?"))
console.log("Sua idade é maior do que a do seu melhor amigo?", "-", idadeUsuario > idadeMelhorAmigo)
console.log("A diferença de idade de vocês é de:", "-", idadeUsuario - idadeMelhorAmigo)

// 2.
let numPar = Number(prompt("Insira um número par"))
console.log(numPar % 2)

// c. Quando inserimos um número par sempre imprime o valor 0 no console.
// d. Quando inserimos um número impar sempre imprime o valor 1 no console.

// 3.
let idadeAnos = Number(prompt("Quantos anos você tem?"))
console.log("Você possui", idadeAnos * 12, "meses de vida.")
console.log("Você possui", idadeAnos * 365, "anos de vida.")
console.log("Você possui", idadeAnos * 365 * 24, "horas de vida.")

// 4. 
let num1 = Number(prompt("Insira um número"))
let num2 = Number(prompt("Insira outro número"))
let num1Divisivelnum2 = num1 % num2
let num2Divisivelnum1 = num2 % num1
console.log("O primeiro numero é maior que segundo?", num1 > num2)
console.log("O primeiro numero é igual ao segundo?", num1 === num2)
console.log("O primeiro numero é divisível pelo segundo?", num1Divisivelnum2 === 0)
console.log("O segundo numero é divisível pelo primeiro?", num2Divisivelnum1 === 0)


// Desafios

// 1. a.
let valorF = 77
let valorK = (valorF-32) * (5/9) + 273.15
console.log(valorK, "Kelvin") 

// b. 
let valorC = 80
let valorF = valorC * (9/5) + 32
console.log(valorF, "Fahrenheit")

// c. 
let valorC = 30
let valorF = valorC * (9/5) + 32 
let valorK = (valorF-32) * (5/9) + 273.15
console.log(valorF, "Fahrenheit")
console.log(valorK, "Kelvin")

// d.
let valorC = Number(prompt("Insira um valor em graus Celsius"))
let valorF = valorC * (9/5) + 32 
let valorK = (valorF-32) * (5/9) + 273.15
console.log(valorF, "Fahrenheit")
console.log(valorK, "Kelvin")

// 2. a.
let kwResidencia = Number(prompt("Quantidade de quilowatts consumida"))
let kwHora = 0.05
console.log("R$", kwResidencia * kwHora)  //R$ 14

// b. 
let kwResidencia = Number(prompt("Quantidade de quilowatts consumida"))
let insiraDesconto = Number(prompt("Insira a porcentagem de desconto"))
let kwHora = 0.05
let desconto = insiraDesconto/100
console.log("R$", (kwResidencia * kwHora) - (kwResidencia * kwHora * desconto))

// 3. a.
let unidadeLibra = 20
let unidadeKg = unidadeLibra / 2.2
console.log (unidadeLibra, "lb equivalem a", unidadeKg, "kg")

// b. 
let unidadeOz = 10.5
let unidadeKg = unidadeOz * 0.02834952
console.log (unidadeOz, "oz equivalem a", unidadeKg, "kg")

// c.
let unidadeMi = 100
let unidadeM = unidadeMi * 1609
console.log (unidadeMi, "mi equivalem a", unidadeM, "m")

// d.
let unidadePes = 50
let unidadeM = unidadePes * 0.3048
console.log(unidadePes, "ft equivalem a", unidadeM, "m")

// e.
let unidadeGal = 103.56
let unidadeL = unidadeGal * 3.785411784
console.log(unidadeGal, "gal equivalem a", unidadeL, "l")

// f.
let unidadeXic = 450
let unidadeL = unidadeXic * 0.24
console.log(unidadeXic, "xic equivalem a", unidadeL, "l")

// g. (escolhi a letra A)
let unidadeLibra = Number(prompt("Insira a quantidade em libras"))
let unidadeKg = unidadeLibra / 2.2
console.log (unidadeLibra, "lb equivalem a", unidadeKg, "kg")
