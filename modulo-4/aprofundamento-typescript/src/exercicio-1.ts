// Exercício 1
// a)
let minhaString: string = "oi"
// minhaString = 10  Erro porque só aceita string.

// b)
let meuNumero: number = 10  //aceita apenas números
let meuNumeroOuString: number | string //aceita números e strings

// c e d
type Pessoa = {
    name: string,
    idade: number,
    corFavorita: coresFavoritas
}

enum coresFavoritas {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    AZULESCURO = "Azul Escuro",
    VIOLETA = "Violeta"
}

const person1: Pessoa = {
    name: "Igor",
    idade: 20,
    corFavorita: coresFavoritas.VERMELHO
}

const person2: Pessoa = {
    name: "Alan",
    idade: 23,
    corFavorita: coresFavoritas.AZUL
}

const person3: Pessoa = {
    name: "Carlos",
    idade: 28,
    corFavorita: coresFavoritas.AZULESCURO
}