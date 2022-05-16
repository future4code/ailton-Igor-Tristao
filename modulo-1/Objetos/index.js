// Exercícios de interpretação de código

// 1. a.
// Matheus Nachtergaele
// Virginia Cavendish
// {canal: "Globo", horario: "14h"}

// 2. a.
// {nome: "Juca", idade: 3, raca: "SRD"}
// {nome: "Juba", idade: 3, raca: "SRD"}
// {nome: "Jubo", idade: 3, raca: "SRD"}

// b.
// A sintaxe dos 3 pontos antes do nome de um objeto clona o objeto.

// 3. a. 
// false 
// undefined

// b.
// A função está retornando um item do objeto, identificado através da propriedade.
// Com o return objeto[propriedade] é como se estivessemos dizendo objeto.propriedade para identificar.
// Quando colocamos console.log(minhaFuncao(pessoa, "backender")) ele esta buscando dentro do objeto Pessoa a propriedade backender e trazendo o resultado, logo: false
// Quando colocamos console.log(minhaFuncao(pessoa, "altura")) ele esta buscando dentro do objeto a propriedade altura, porém ela não existe, então retorna undefined.

// Exercícios de escrita de código

// 1.a.
const pessoa = {
	nome: 'Igor',
	apelidos: ['bzerka','guinho','igr']
}

function apelido (obj) {
	const novoObj = {
		...obj,
	}
	console.log(`Eu sou ${novoObj.nome}, mas pode me chamar de: ${novoObj.apelidos[0]}, ${novoObj.apelidos[1]} ou ${novoObj.apelidos[2]}.`)
}
// apelido(pessoa)

// b.

const novaPessoa = {
	...pessoa,
	apelidos: ['bzrk','gui','igor']
}
// apelido(novaPessoa)

// 2. 

const pessoa1 = {
	nome: 'Mauro',
	idade: 20,
	profissao: 'Programador'
}

const pessoa2 = {
	nome: 'Ricardo',
	idade: 25,
	profissao: 'Professor'
}

function infos(obj) {
	const novoObj = {
		...obj,
	}
console.log([novoObj.nome, novoObj.nome.length, novoObj.idade, novoObj.profissao, novoObj.profissao.length])
}
// infos(pessoa1)
// infos(pessoa2)

// 3.

const carrinho = []

const sacolao1 = {
	nome: 'Banana',
	disponibilidade: true
}

const sacolao2 = {
	nome: 'Mamão',
	disponibilidade: true
}

const sacolao3 = {
	nome: 'Maçã',
	disponibilidade: true
}

function adicionarCarrinho(obj) {
	carrinho.push(obj)
}
adicionarCarrinho(sacolao1)
adicionarCarrinho(sacolao2)
adicionarCarrinho(sacolao3)
// console.log(carrinho)

// Desafios

// 1. 
function info(nome, idade, profissao) {
	nome = prompt('Insira seu nome')
	idade = prompt('Insira sua idade')
	profissao = prompt('Insira sua profissao')
	const novoObj = {
		nome: nome,
		idade: idade,
		profissao: profissao
	}
	console.log(novoObj)
}
// info()

// 2. 

const filme1 = {
	nome: 'Filme recente',
	ano_lancamento: '2020'
}

const filme2 = {
	nome: 'Filme antigo',
	ano_lancamento: '2000'
}

function comparacao(obj1, obj2) {
	const comparar = obj1.ano_lancamento < obj2.ano_lancamento
	const igualdade = obj1.ano_lancamento === obj2.ano_lancamento
	console.log(`O primeiro filme foi lançado antes do segundo? ${comparar}`)
	console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${igualdade}`)
}
// comparacao(filme1, filme2)

// 3.
function disponibilidadeFruta(obj) {
	const novoFrutas = {
		...obj,
		disponibilidade: !obj.disponibilidade
	}
console.log(novoFrutas)
}
// disponibilidadeFruta(sacolao1)
// disponibilidadeFruta(sacolao2)
// disponibilidadeFruta(sacolao3)