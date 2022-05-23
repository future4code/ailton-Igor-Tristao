// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    // return array.reverse()
    let arrayInvertido = []
    for(let i = array.length-1; i >= 0; i--) {
        arrayInvertido.push(array[i])
    }   
    return arrayInvertido
}

// EXERCÍCIO 03
let array1 = [3, 4, 1, 10, 5, 7]
function retornaArrayOrdenado(array) {
//   array.sort(function(a, b) {
//       return a - b;
//   })
//   return array
    for(let i = 0; i < array.length; i++) {               //COPIADO DA INTERNET PARA ENTENDER DEPOIS
        let menorNum = i                                  //VOLTAR AQUI PARA ESTUDAR
        for(let a = i+1; a < array.length; a++) {
            if(array[a] < array[menorNum]) {
                menorNum = a
            }
        }
        let temp = array[menorNum];
        array[menorNum] = array[i]
        array[i] = temp
    }
return array
}


// EXERCÍCIO 04
function retornaNumerosPares(array) {
//     const retornaPar = array.filter(function(item) {
//         return !(item%2)
//     })
// return retornaPar
    let arrayPares = []
    for(let numero of array) {
        if(numero%2 === 0) {
            arrayPares.push(numero)
        }
    }
return arrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayPares = []
    for(let numero of array) {
        if(numero%2 === 0) {
            numero = numero**2
            arrayPares.push(numero)
        }
    }
    return arrayPares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
let maiorNum = 0
for(let numero of array) {
    if(numero > maiorNum) {
        maiorNum = numero
    }
}
return maiorNum
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let maiorNum = 0
let menorNum = 0
let diferenca = 0
if(num1 > num2) {
    maiorNum = num1
    menorNum = num2
    diferenca = num1 - num2
}
else {
    maiorNum = num2
    menorNum = num1
    diferenca = num2 - num1
}
let divisivel = (maiorNum%menorNum === 0)

let infos = {
    maiorNumero: maiorNum,
    maiorDivisivelPorMenor: divisivel,
    diferenca: diferenca
}
return infos
}   

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numPares = []
    let numero = -2
   for(let i = 0; i < n; i++) {
        numero = numero + 2
        numPares.push(numero)
   }
return numPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) {
        return 'Equilátero'
    }
    else if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        return 'Escaleno'
    }
    else {
        return 'Isósceles'
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
let maiorNum = 0
let segundoMaiorNum = 0
let menorNum = 1000
let segundoMenorNum = 1000
let resposta = []
    for(let numero of array) {
        if(numero > maiorNum && maiorNum > segundoMaiorNum) {
            segundoMaiorNum = maiorNum
            maiorNum = numero
        }
        else if(numero > maiorNum) {
            maiorNum = numero
        }
        else if(numero < maiorNum && numero > segundoMaiorNum) {
            segundoMaiorNum = numero
        }
    }
    for(let numero of array) {
        if(numero < menorNum && menorNum < segundoMenorNum) {
            segundoMenorNum = menorNum
            menorNum = numero
        }
        else if(numero < menorNum) {
            menorNum = numero
        }
        else if(numero > menorNum && numero < segundoMenorNum) {
            segundoMenorNum = numero
        }
    }
resposta.push(segundoMaiorNum)
resposta.push(segundoMenorNum)
return resposta
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let anonimo = {
    ...pessoa,
    nome: "ANÔNIMO"
    }
return anonimo
}

// EXERCÍCIO 13A
let exemplo = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

function retornaPessoasAutorizadas(pessoas) {
    let pessoasAutorizadas = []
   for(let pessoa of pessoas) {
       if(pessoa.altura > 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
            pessoasAutorizadas.push(pessoa)
       }
   }
return pessoasAutorizadas
}



// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizadas = []
   for(let pessoa of pessoas) {
       if(pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60) {
            pessoasNaoAutorizadas.push(pessoa)
       }
   }
return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for(let pessoa of contas) {
        let somaCompras = 0
        for(let i = 0; i < pessoa.compras.length; i++ ) {
            somaCompras = somaCompras + pessoa.compras[i]
        }
        pessoa.saldoTotal = pessoa.saldoTotal - somaCompras
        pessoa.compras.length = 0
    }
    return contas
}

// EXERCÍCIO 15A

function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort(function(a,b) {
        if(a.nome < b.nome) {
            return -1
        }
        else if(a.nome > b.nome) {
            return 1
        }
        else {
            return 0
        }
    })
return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}
