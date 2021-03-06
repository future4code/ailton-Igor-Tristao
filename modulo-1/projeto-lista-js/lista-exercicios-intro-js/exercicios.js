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
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso/(altura*altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Insira seu nome')
  const idade = prompt('Insira sua idade')
  const email = prompt('Insira seu email')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt('Insira sua primeira cor favorita')
  const cor2 = prompt('Insira sua segunda cor favorita')
  const cor3 = prompt('Insira sua terceira cor favorita')
  console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const array1 = array[0]
array[0] = array[array.length-1]
array[array.length-1] = array1
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase()
}

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
  return (ano%400 === 0) || (ano%4 === 0) && (ano%100 !== 0) 
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let idade = prompt('Você tem mais de 18 anos?')
  let ensino = prompt('Você possui ensino médio completo?')
  let disponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')
  const check = idade.toLowerCase() === "sim" && ensino.toLowerCase() === "sim" && disponibilidade.toLowerCase() === "sim"
  console.log(check)
}
