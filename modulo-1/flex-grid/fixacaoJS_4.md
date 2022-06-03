```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let aparicao = 0
    for(let numero of arrayDeNumeros) {
      if (numero === numeroEscolhido) {
        aparicao = aparicao + 1
      }
      else {
        aparicao = aparicao + 0
      }
    }
    if (aparicao === 0) {
      return `Número não encontrado`
    }
    else if (aparicao > 0) {
    return `O número ${numeroEscolhido} aparece ${aparicao}x`
    }
  }
```

