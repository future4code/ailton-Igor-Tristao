// 2)
// a)
// A entrada é um array de números, a saída são: o maior número, o menor número e a soma destes números.

function obterEstatisticas(numeros:number[]):{maior: number, menor: number, media: number} {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: {maior: number, menor: number, media: number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// b)
// numerosOrdenados é um array de números colocados em ordem crescente
// soma é um número resultado da soma de todos os números dentro do array que vem do parametro
// estatisticas é um objeto contendo 3 numeros, sendo eles: o maior, o menor e a media dos números vindo do array do parametro

// c)
type Amostra = {
    numeros: number[],
    obterEstatisticas: {maior: number, menor: number, media: number},
}

// const amostraDeIdades: Amostra = {

//     numeros: [21, 18, 65, 44, 15, 18],

    // obterEstatisticas: (numeros) => {...}
// }
