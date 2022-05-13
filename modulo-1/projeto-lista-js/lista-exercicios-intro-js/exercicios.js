// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt('Insira a altura'))
  const largura = Number(prompt('Insira a largura'))
  const area = altura*largura
  console.log(area)
}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Insira o ano atual'))
  const anoNascimento = Number(prompt('Insira o ano em que você nasceu'))
  const idade = anoAtual-anoNascimento
  console.log(idade)
}

// EXERCÍCIO 03
// function calculaIMC(peso, altura) {
//   // implemente sua lógica aqui
//   let imc = peso/(altura*altura)
//   return imc
// }
//   const pesoKg = Number(prompt('Insira seu peso em KG'))
//   const alturaM = Number(prompt('Insira sua altura em metros'))
//   console.log(calculaIMC(pesoKg, alturaM))

// EXERCÍCIO 04
// function imprimeInformacoesUsuario() {
//   // implemente sua lógica aqui
//   // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
//   const nome = prompt('Insira seu nome')
//   const idade = prompt('Insira sua idade')
//   const email = prompt('Insira seu email')
//   console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
// }
// imprimeInformacoesUsuario("Alice", 28, "alice@gmail.com")


// EXERCÍCIO 05
// function imprimeTresCoresFavoritas() {
//   // implemente sua lógica aqui
//   const cor1 = prompt('Insira sua primeira cor favorita')
//   const cor2 = prompt('Insira sua segunda cor favorita')
//   const cor3 = prompt('Insira sua terceira cor favorita')
//   console.log([cor1, cor2, cor3])
// }
// imprimeTresCoresFavoritas()

// EXERCÍCIO 06
// function retornaStringEmMaiuscula(string) {
//   // implemente sua lógica aqui
//   const stringMaiuscula = string.toUpperCase()
//   return stringMaiuscula
// }
// retornaStringEmMaiuscula()

// EXERCÍCIO 07
// function calculaIngressosEspetaculo(custo, valorIngresso) {
//   // implemente sua lógica aqui
//   const custoEspetaculo = Number(prompt('Qual é o custo do espetáculo?'))
//   const custoIngresso = Number(prompt('Qual é o custo do ingresso?'))
//   const ingressosVendidos = custoEspetaculo/custoIngresso
//   return ingressosVendidos
// }
// calculaIngressosEspetaculo(ingressosVendidos)


// EXERCÍCIO 08
// function checaStringsMesmoTamanho(string1, string2) {
//   // implemente sua lógica aqui
//   const frase1 = prompt('Insira a primeira frase')
//   const frase2 = prompt('Insira a segunda frase')
//   const comparacaoTamanho = frase1.length === frase2.length
//   return comparacaoTamanho
// }
// checaStringsMesmoTamanho()

// EXERCÍCIO 09
// function retornaPrimeiroElemento(array) {
//   // implemente sua lógica aqui
//   const array1 = array
//   return array1[0]
// }
// retornaPrimeiroElemento()

// // EXERCÍCIO 10
// function retornaUltimoElemento(array) {
//   // implemente sua lógica aqui
// const array1 = array.pop()
// return array1
// }

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const array1 = array[0]
array[0] = array[[array.length-1]]
array[array.length-1] = array1
return array
}

// // EXERCÍCIO 12
// function checaIgualdadeDesconsiderandoCase(string1, string2) {
//   // implemente sua lógica aqui
//   const igualdade = string1.toLowerCase() === string2.toLowerCase()
//   return igualdade
// }

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Insira o ano atual'))
  const anoNascimento = Number(prompt('Insira o ano em que você nasceu'))
  const anoIdentidadeEmissao = Number(prompt  ('Insira o ano na qual sua carteira de identidade foi emitida'))
  let idade = anoAtual-anoNascimento
  let identidadeRenovacao = anoAtual-anoIdentidadeEmissao
  const renovar = ((idade <= 20) && (identidadeRenovacao >= 5)) || ((idade <= 50) && (identidadeRenovacao >= 10)) || ((idade > 50) && (identidadeRenovacao >= 15))
  console.log(renovar)  
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui


  
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}