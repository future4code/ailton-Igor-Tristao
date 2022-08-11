// 100.000 AC - 4000 AC  -> Pré-história
//    4000 AC -  476 AC   -> Idade Antiga
//     476 AC - 1453 DC   -> Idade Média 
//    1453 DC - 1789 DC   -> Idade Moderna 
//    1789 DC - 2022 DC   -> Idade Contemporânea 

enum historicalPeriod {
  PREHISTORIA = "Pré-história",
  IDADEANTIGA = "Idade Antiga",
  IDADEMEDIA = "Idade Média",
  IDADEMODERNA = "Idade Moderna",
  IDADECONTEMPORANEA = "Idade Contemporânea",
}

function getHistoricalPeriod(year: number, era: string) {
  if (era.toLowerCase() === "ac") {
    if (year <= 100000 && year > 4000) {
      return historicalPeriod.PREHISTORIA;
    } else if (year <= 4000 && year > 476) {
      return historicalPeriod.IDADEANTIGA;
    } else if (year <= 476 && year >= 0) {
      return historicalPeriod.IDADEMEDIA;
    }
    else if(year > 100000) {
        return `Acredita-se que o ser humano moderno surgiu em meados do ano 100.000 AC, insira valores menores que este.`
    }
    else {
        return `Ano não pode ser um número negativo.`
    }
  } else if (era === "" || era.toLowerCase() === "dc") {
    if (year > 0 && year < 1453) {
      return historicalPeriod.IDADEMEDIA;
    } else if (year >= 1453 && year < 1789) {
      return historicalPeriod.IDADEMODERNA;
    } else if (year >= 1789 && year <= 2022) {
      return historicalPeriod.IDADECONTEMPORANEA;
    }
    else if(year > 2022) {
        return `Até então acredita-se que os próximos anos ainda serão ${historicalPeriod.IDADECONTEMPORANEA}, mas não sabemos o futuro.`
    }
    else {
        return `Ano não pode ser um número negativo.`
    }
  }
  else {
    return `Insira um ano e uma sigla, podendo ser AC ou DC.`
  }
}

console.log(getHistoricalPeriod(220, "ac"));
