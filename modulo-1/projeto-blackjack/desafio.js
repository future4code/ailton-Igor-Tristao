/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * oii, tentei de toda forma fazer um jeito de clonar os objetos usuário e computador mas não consegui, acabou que o
 * código ficou gigante porque toda vez eu tinha que declarar o objeto inteeiro :(
 * Outra coisa foi em relação a tirar dois A's, como a probabilidade é muito pequena eu acabei colocando apenas para 
 * comprar outras cartas e mostrar o resultado (vou tentar implementar, caso não consiga vou deixar assim)
 * 
 * 
 */

let carta1Usuario = comprarCarta()
let carta2Usuario = comprarCarta()
let carta3Usuario = comprarCarta()
let carta4Usuario = comprarCarta()
let carta5Usuario = comprarCarta()
let carta6Usuario = comprarCarta()
let carta1Comp = comprarCarta()
let carta2Comp = comprarCarta()
let carta3Comp = comprarCarta()
let carta4Comp = comprarCarta()

let usuario = {
   naipe: carta1Usuario.texto,
   valor: carta1Usuario.valor,
   naipe2: carta2Usuario.texto,
   valor2: carta2Usuario.valor,
   valorFinal: carta1Usuario.valor+carta2Usuario.valor
}

let computador = {
   naipe: carta1Comp.texto,
   valor: carta1Comp.valor,
   naipe2: carta2Comp.texto,
   valor2: carta2Comp.valor,
   valorFinal: carta1Comp.valor+carta2Comp.valor
}

console.log(`Boas vindas ao jogo de Blackjack!`)
if(confirm(`Quer iniciar uma nova rodada?`)) {
   if (confirm((`Suas cartas são ${usuario.naipe} ${usuario.naipe2}. A carta revelada do computador é ${computador.naipe}.
   Deseja comprar mais uma carta?`))) {
      if(usuario.valorFinal === 22  || computador.valorFinal === 22) {
         console.log(`Trocando as cartas`)
         carta1Usuario = comprarCarta()
         carta2Usuario = comprarCarta()
         carta1Comp = comprarCarta()
         carta2Comp = comprarCarta()
         let usuario = {
            naipe: carta1Usuario.texto,
            valor: carta1Usuario.valor,
            naipe2: carta2Usuario.texto,
            valor2: carta2Usuario.valor,
            valorFinal: carta1Usuario.valor+carta2Usuario.valor
         }
         let computador = {
            naipe: carta1Comp.texto,
            valor: carta1Comp.valor,
            naipe2: carta2Comp.texto,
            valor2: carta2Comp.valor,
            valorFinal: carta1Comp.valor+carta2Comp.valor
         }
         console.log(`Usuário -  cartas: ${usuario.naipe} ${usuario.naipe2} - pontuação ${usuario.valorFinal}`)
         console.log(`Computador -  cartas: ${computador.naipe} ${computador.naipe2} - pontuação ${computador.valorFinal}`)   
         console.log(blackjack(usuario.valorFinal, computador.valorFinal))
      }
      else if(usuario.valorFinal !== 22 && computador.valorFinal !== 22) {
         carta3Usuario = comprarCarta()
         let usuario = {
            naipe: carta1Usuario.texto,
            valor: carta1Usuario.valor,
            naipe2: carta2Usuario.texto,
            valor2: carta2Usuario.valor,
            naipe3: carta3Usuario.texto,
            valor3: carta3Usuario.valor,
            valorFinal: carta1Usuario.valor+carta2Usuario.valor+carta3Usuario.valor
         }
         if(usuario.valorFinal > 21) {
            console.log(`Usuário -  cartas: ${usuario.naipe} ${usuario.naipe2} ${usuario.naipe3} - pontuação ${usuario.valorFinal}`)
            console.log(`Computador -  cartas: ${computador.naipe} ${computador.naipe2} - pontuação ${computador.valorFinal}`)   
            console.log(blackjack(usuario.valorFinal, computador.valorFinal))
         }
         else if(usuario.valorFinal <= 21) {
            if (confirm(`Suas cartas são ${usuario.naipe} ${usuario.naipe2} ${usuario.naipe3}. A carta revelada do computador é ${computador.naipe}." 
            "Deseja comprar mais uma carta?`)) {
               carta4Usuario = comprarCarta()
               let usuario = {
                  naipe: carta1Usuario.texto,
                  valor: carta1Usuario.valor,
                  naipe2: carta2Usuario.texto,
                  valor2: carta2Usuario.valor,
                  naipe3: carta3Usuario.texto,
                  valor3: carta3Usuario.valor,
                  naipe4: carta4Usuario.texto,
                  valor4: carta4Usuario.valor,
                  valorFinal: carta1Usuario.valor+carta2Usuario.valor+carta3Usuario.valor+carta4Usuario.valor  
               }
               if(usuario.valorFinal > 21) {
                  console.log(`Usuário -  cartas: ${usuario.naipe} ${usuario.naipe2} ${usuario.naipe3} ${usuario.naipe4} - pontuação ${usuario.valorFinal}`)
                  console.log(`Computador -  cartas: ${computador.naipe} ${computador.naipe2} - pontuação ${computador.valorFinal}`)   
                  console.log(blackjack(usuario.valorFinal, computador.valorFinal))
               }
               else if(usuario.valorFinal <= 21) {
                  if ((confirm(`Suas cartas são ${usuario.naipe} ${usuario.naipe2} ${usuario.naipe3} ${usuario.naipe4}. A carta revelada do computador é ${computador.naipe}." 
                  "Deseja comprar mais uma carta?`))) {
                        carta5Usuario = comprarCarta()
                        let usuario = {
                           naipe: carta1Usuario.texto,
                           valor: carta1Usuario.valor,
                           naipe2: carta2Usuario.texto,
                           valor2: carta2Usuario.valor,
                           naipe3: carta3Usuario.texto,
                           valor3: carta3Usuario.valor,
                           naipe4: carta4Usuario.texto,
                           valor4: carta4Usuario.valor,
                           naipe5: carta5Usuario.texto,
                           valor5: carta5Usuario.valor,
                           valorFinal: carta1Usuario.valor+carta2Usuario.valor+carta3Usuario.valor+carta4Usuario.valor+carta5Usuario.valor
                        }
                        if(usuario.valorFinal > 21) {
                           console.log(`Usuário -  cartas: ${usuario.naipe} ${usuario.naipe2} ${usuario.naipe3} ${usuario.naipe4} ${usuario.naipe5} - pontuação ${usuario.valorFinal}`)
                           console.log(`Computador -  cartas: ${computador.naipe} ${computador.naipe2} - pontuação ${computador.valorFinal}`)   
                           console.log(blackjack(usuario.valorFinal, computador.valorFinal))
                        }
                        else if(usuario.valorFinal <= 21) {
                           if ((confirm(`Suas cartas são ${usuario.naipe} ${usuario.naipe2} ${usuario.naipe3} ${usuario.naipe4} ${usuario.naipe5}. A carta revelada do computador é ${computador.naipe}." 
                           "Deseja comprar mais uma carta?`))) {
                              carta6Usuario = comprarCarta()
                              let usuario = {
                                 naipe: carta1Usuario.texto,
                                 valor: carta1Usuario.valor,
                                 naipe2: carta2Usuario.texto,
                                 valor2: carta2Usuario.valor,
                                 naipe3: carta3Usuario.texto,
                                 valor3: carta3Usuario.valor,
                                 naipe4: carta4Usuario.texto,
                                 valor4: carta4Usuario.valor,
                                 naipe5: carta5Usuario.texto,
                                 valor5: carta5Usuario.valor,
                                 naipe6: carta6Usuario.texto,
                                 valor6: carta6Usuario.valor,
                                 valorFinal: carta1Usuario.valor+carta2Usuario.valor+carta3Usuario.valor+carta4Usuario.valor+carta5Usuario.valor+carta6Usuario.Usuario.valor
                              }
                              if(usuario.valorFinal > 21) {
                                 console.log(`Usuário -  cartas: ${usuario.naipe} ${usuario.naipe2} ${usuario.naipe3} ${usuario.naipe4} ${usuario.naipe5} ${usuario.naipe6} - pontuação ${usuario.valorFinal}`)
                                 console.log(`Computador -  cartas: ${computador.naipe} ${computador.naipe2} - pontuação ${computador.valorFinal}`)   
                                 console.log(blackjack(usuario.valorFinal, computador.valorFinal))
                              }
                           }
                           else {
                              if(usuario.valorFinal <= 21) {
                                 if(computador.valorFinal < usuario.valorFinal) {
                                    carta3Comp = comprarCarta()
                                    let computador = {
                                       naipe: carta1Comp.texto,
                                       valor: carta1Comp.valor,
                                       naipe2: carta2Comp.texto,
                                       valor2: carta2Comp.valor,
                                       naipe3: carta3Comp.texto,
                                       valor3: carta3Comp.valor,
                                       valorFinal: carta1Comp.valor+carta2Comp.valor+carta3Comp.valor
                                    }
                                    if(computador.valorFinal >= usuario.valorFinal) {     
                                       console.log(`Usuário -  cartas: ${usuario.naipe} ${usuario.naipe2} ${usuario.naipe3} ${usuario.naipe4} ${usuario.naipe5} - pontuação ${usuario.valorFinal}`)
                                       console.log(`Computador -  cartas: ${computador.naipe} ${computador.naipe2} ${computador.naipe3} - pontuação ${computador.valorFinal}`)   
                                       console.log(blackjack(usuario.valorFinal, computador.valorFinal))
                                    }
                                    else if (computador.valorFinal < usuario.valorFinal) {
                                       carta4Comp = comprarCarta()
                                       let computador = {
                                          naipe: carta1Comp.texto,
                                          valor: carta1Comp.valor,
                                          naipe2: carta2Comp.texto,
                                          valor2: carta2Comp.valor,
                                          naipe3: carta3Comp.texto,
                                          valor3: carta3Comp.valor,
                                          naipe4: carta4Comp.valor,
                                          valor4: carta4Comp.valor,
                                          valorFinal: carta1Comp.valor+carta2Comp.valor+carta3Comp.valor+carta4Comp.valor
                                       }
                                       console.log(`Usuário -  cartas: ${usuario.naipe} ${usuario.naipe2} ${usuario.naipe3} ${usuario.naipe4} ${usuario.naipe5} - pontuação ${usuario.valorFinal}`)
                                       console.log(`Computador -  cartas: ${computador.naipe} ${computador.naipe2} ${computador.naipe3} ${computador.naipe4} - pontuação ${computador.valorFinal}`)   
                                       console.log(blackjack(usuario.valorFinal, computador.valorFinal))
                                    }
                                 }
                                 else {
                                    console.log(`Usuário -  cartas: ${usuario.naipe} ${usuario.naipe2} ${usuario.naipe3} ${usuario.naipe4} ${usuario.naipe5} - pontuação ${usuario.valorFinal}`)
                                    console.log(`Computador -  cartas: ${computador.naipe} ${computador.naipe2} - pontuação ${computador.valorFinal}`)   
                                    console.log(blackjack(usuario.valorFinal, computador.valorFinal))
                                 }
                              }
                           }
                        }  
                  }
                  else {
                     if(usuario.valorFinal <= 21) {
                        if(computador.valorFinal < usuario.valorFinal) {
                           carta3Comp = comprarCarta()
                           let computador = {
                              naipe: carta1Comp.texto,
                              valor: carta1Comp.valor,
                              naipe2: carta2Comp.texto,
                              valor2: carta2Comp.valor,
                              naipe3: carta3Comp.texto,
                              valor3: carta3Comp.valor,
                              valorFinal: carta1Comp.valor+carta2Comp.valor+carta3Comp.valor
                           }
                           if(computador.valorFinal >= usuario.valorFinal) {     
                              console.log(`Usuário -  cartas: ${usuario.naipe} ${usuario.naipe2} ${usuario.naipe3} ${usuario.naipe4} - pontuação ${usuario.valorFinal}`)
                              console.log(`Computador -  cartas: ${computador.naipe} ${computador.naipe2} ${computador.naipe3} - pontuação ${computador.valorFinal}`)   
                              console.log(blackjack(usuario.valorFinal, computador.valorFinal))
                           }
                           else if (computador.valorFinal < usuario.valorFinal) {
                              carta4Comp = comprarCarta()
                              let computador = {
                                 naipe: carta1Comp.texto,
                                 valor: carta1Comp.valor,
                                 naipe2: carta2Comp.texto,
                                 valor2: carta2Comp.valor,
                                 naipe3: carta3Comp.texto,
                                 valor3: carta3Comp.valor,
                                 naipe4: carta4Comp.valor,
                                 valor4: carta4Comp.valor,
                                 valorFinal: carta1Comp.valor+carta2Comp.valor+carta3Comp.valor+carta4Comp.valor
                              }
                              console.log(`Usuário -  cartas: ${usuario.naipe} ${usuario.naipe2} ${usuario.naipe3} ${usuario.naipe4} - pontuação ${usuario.valorFinal}`)
                              console.log(`Computador -  cartas: ${computador.naipe} ${computador.naipe2} ${computador.naipe3} ${computador.naipe4} - pontuação ${computador.valorFinal}`)   
                              console.log(blackjack(usuario.valorFinal, computador.valorFinal))
                           }
                        }
                        else {
                           console.log(`Usuário -  cartas: ${usuario.naipe} ${usuario.naipe2} ${usuario.naipe3} ${usuario.naipe4} - pontuação ${usuario.valorFinal}`)
                           console.log(`Computador -  cartas: ${computador.naipe} ${computador.naipe2} - pontuação ${computador.valorFinal}`)   
                           console.log(blackjack(usuario.valorFinal, computador.valorFinal))
                        }
                     }
                  }
               }
            }
            else {
               if(usuario.valorFinal <= 21) {
                  if(computador.valorFinal < usuario.valorFinal) {
                     carta3Comp = comprarCarta()
                     let computador = {
                        naipe: carta1Comp.texto,
                        valor: carta1Comp.valor,
                        naipe2: carta2Comp.texto,
                        valor2: carta2Comp.valor,
                        naipe3: carta3Comp.texto,
                        valor3: carta3Comp.valor,
                        valorFinal: carta1Comp.valor+carta2Comp.valor+carta3Comp.valor
                     }
                     if(computador.valorFinal >= usuario.valorFinal) {     
                        console.log(`Usuário -  cartas: ${usuario.naipe} ${usuario.naipe2} ${usuario.naipe3} - pontuação ${usuario.valorFinal}`)
                        console.log(`Computador -  cartas: ${computador.naipe} ${computador.naipe2} ${computador.naipe3} - pontuação ${computador.valorFinal}`)   
                        console.log(blackjack(usuario.valorFinal, computador.valorFinal))
                     }
                     else if (computador.valorFinal < usuario.valorFinal) {
                        carta4Comp = comprarCarta()
                        let computador = {
                           naipe: carta1Comp.texto,
                           valor: carta1Comp.valor,
                           naipe2: carta2Comp.texto,
                           valor2: carta2Comp.valor,
                           naipe3: carta3Comp.texto,
                           valor3: carta3Comp.valor,
                           naipe4: carta4Comp.valor,
                           valor4: carta4Comp.valor,
                           valorFinal: carta1Comp.valor+carta2Comp.valor+carta3Comp.valor+carta4Comp.valor
                        }
                        console.log(`Usuário -  cartas: ${usuario.naipe} ${usuario.naipe2} ${usuario.naipe3} - pontuação ${usuario.valorFinal}`)
                        console.log(`Computador -  cartas: ${computador.naipe} ${computador.naipe2} ${computador.naipe3} ${computador.naipe4} - pontuação ${computador.valorFinal}`)   
                        console.log(blackjack(usuario.valorFinal, computador.valorFinal))
                     }
                  }
                  else {
                     console.log(`Usuário -  cartas: ${usuario.naipe} ${usuario.naipe2} ${usuario.naipe3} - pontuação ${usuario.valorFinal}`)
                     console.log(`Computador -  cartas: ${computador.naipe} ${computador.naipe2} - pontuação ${computador.valorFinal}`)   
                     console.log(blackjack(usuario.valorFinal, computador.valorFinal))
                  }
               }
            }
      }
      }
   }  
   else {
      if(usuario.valorFinal <= 21) {
         if(computador.valorFinal < usuario.valorFinal) {
            carta3Comp = comprarCarta()
            let computador = {
               naipe: carta1Comp.texto,
               valor: carta1Comp.valor,
               naipe2: carta2Comp.texto,
               valor2: carta2Comp.valor,
               naipe3: carta3Comp.texto,
               valor3: carta3Comp.valor,
               valorFinal: carta1Comp.valor+carta2Comp.valor+carta3Comp.valor
            }
            if(computador.valorFinal >= usuario.valorFinal) {     
               console.log(`Usuário -  cartas: ${usuario.naipe} ${usuario.naipe2} - pontuação ${usuario.valorFinal}`)
               console.log(`Computador -  cartas: ${computador.naipe} ${computador.naipe2} ${computador.naipe3} - pontuação ${computador.valorFinal}`)   
               console.log(blackjack(usuario.valorFinal, computador.valorFinal))
            }
            else if (computador.valorFinal < usuario.valorFinal) {
               carta4Comp = comprarCarta()
               let computador = {
                  naipe: carta1Comp.texto,
                  valor: carta1Comp.valor,
                  naipe2: carta2Comp.texto,
                  valor2: carta2Comp.valor,
                  naipe3: carta3Comp.texto,
                  valor3: carta3Comp.valor,
                  naipe4: carta4Comp.valor,
                  valor4: carta4Comp.valor,
                  valorFinal: carta1Comp.valor+carta2Comp.valor+carta3Comp.valor+carta4Comp.valor
               }
               console.log(`Usuário -  cartas: ${usuario.naipe} ${usuario.naipe2} - pontuação ${usuario.valorFinal}`)
               console.log(`Computador -  cartas: ${computador.naipe} ${computador.naipe2} ${computador.naipe3} ${computador.naipe4} - pontuação ${computador.valorFinal}`)   
               console.log(blackjack(usuario.valorFinal, computador.valorFinal))
            }
         }
         else {
            console.log(`Usuário -  cartas: ${usuario.naipe} ${usuario.naipe2} - pontuação ${usuario.valorFinal}`)
            console.log(`Computador -  cartas: ${computador.naipe} ${computador.naipe2} - pontuação ${computador.valorFinal}`)   
            console.log(blackjack(usuario.valorFinal, computador.valorFinal))
         }
      }
      }
   }
else {
   console.log(`O jogo acabou.`)
}

function blackjack (valorusuario, valorcomp) {
   if(valorusuario === valorcomp) {
      return `Empate!`
   }
   else if(valorusuario > 21 && valorcomp <= 21) {
      return `O computador ganhou!`
   }
   else if(valorusuario <= 21 && valorcomp > 21) {
      return `O usuario ganhou!`
   }
   else if(valorusuario > valorcomp) {
      return `O usuário ganhou!`
   }
   else if(valorusuario < valorcomp) {
      return `O computador ganhou!`
   }
}

