// Exercícios de interpretação de código

// 1.a.
// Para cada item do array ele irá retornar o item, o index e o array total.
// Irá retornar: 
// 1° linha - {nome: "Amanda Rangel", apelido: "Mandi"} 0 [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" }
// ]
// 2° linha mesma coisa mudando apenas o item e o index, e a 3° linha também muda o item e o index, o array continua o mesmo.

// 2.   
// ['Amanda rangel', 'Laís Petra', 'Letícia Chijo']

// 3. 
// ['Mandi', 'Laura']

// Exercícios de escrita de código

// 1.a.
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

 const nomePets = pets.map(function(item) {
     return item.nome
 })
 console.log(nomePets)

//  b.
const salsicha = pets.filter(function(item) {
    return item.raca === "Salsicha"
})
console.log(salsicha)

// c..
const msgDesconto = pets.filter(function(item) {
    if(item.raca === "Poodle") {
        console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!"`)
    }
})

// 2
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

// a.
 const produtosNomes = produtos.map(function(item) {
     return item.nome
 })
 console.log(produtosNomes)

// b.
const produtosDesconto = produtos.map(function(item) {
    delete item.categoria
    item.preco = item.preco*0.95
    console.log(item)
})

// c.
const produtosBebidas = produtos.filter(function(item) {
    if(item.categoria === 'Bebidas') {
        console.log(item)
    }
})

// d.
const produtosYpe = produtos.filter(function(item) {
    if(item.nome.includes('Ypê')) {
        console.log(item)
    }
})

// e.
const promocao = []
const produtosFrase = produtos.filter(function(item) {
    if(item.nome.includes('Ypê')) {
        promocao.push(`Compre ${item.nome} por R$${item.preco}`)
    }
})
console.log(promocao)

// Desafio!

// 1.
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

// a.
const nomePokemons = pokemons.map(function(item) {
    return item.nome
})
console.log(nomePokemons.sort())

// b.
const tipos = []

const tipoPokemon = pokemons.filter(function(item) {
    tipos.push(item.tipo)
})

const tipoSemRepetir = tipos.filter(function(primeira, outra) {
    return tipos.indexOf(primeira) === outra
})
console.log(tipoSemRepetir)