/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
*/
// const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
// console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
// console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)

const carta1Usuario = comprarCarta()
const carta2Usuario = comprarCarta()
const carta1Comp = comprarCarta()
const carata2Comp = comprarCarta()

const usuario = {
   naipe: carta1Usuario.texto,
   valor: carta1Usuario.valor,
   naipe2: carta2Usuario.texto,
   valor2: carta2Usuario.valor,
   valorFinal: carta1Usuario.valor+carta2Usuario.valor
}

const computador = {
   naipe: carta1Comp.texto,
   valor: carta1Comp.valor,
   naipe2: carata2Comp.texto,
   valor2: carata2Comp.valor,
   valorFinal: carta1Comp.valor+carata2Comp.valor
}

console.log(`Boas vindas ao jogo de Blackjack!`)
if(confirm(`Quer iniciar uma nova rodada?`)) {
   console.log(`Usuário -  cartas: ${usuario.naipe} ${usuario.naipe2} - pontuação ${usuario.valorFinal}`)
   console.log(`Computador -  cartas: ${computador.naipe} ${computador.naipe2} - pontuação ${computador.valorFinal}`)
   console.log(blackjack(usuario.valorFinal, computador.valorFinal))
}
else {
   console.log(`O jogo acabou.`)
}

function blackjack (valorusuario, valorcomp) {
   if(valorusuario === valorcomp) {
      return `Empate!`
   }
   else if(valorusuario > valorcomp) {
      return `O usuário ganhou!`
   }
   else if(valorusuario < valorcomp) {
      return `O computador ganhou!`
   }
}



