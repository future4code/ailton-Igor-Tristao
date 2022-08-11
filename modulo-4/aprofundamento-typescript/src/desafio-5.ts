type Consultas = {
    nome: string,
    idade: number,
    dataDaConsulta: string
}

const arrayConsultas: Consultas[] = [
    { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
    { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
  ]

  function arrayAlphabeticOrder (arr: Consultas[]):Consultas[] {
    return arr.sort(function(a, b) {
        if(a.nome < b.nome) return -1;
        if(a.nome > b.nome) return 1;
        return 0;
    });
  }

  console.log(arrayAlphabeticOrder(arrayConsultas))