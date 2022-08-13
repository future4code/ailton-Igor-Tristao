enum SETOR {
  MARKETING = "Marketing",
  VENDAS = "Vendas",
  FINANCEIRO = "Financeiro",
}

type Pessoa = {
  nome: string;
  salário: number;
  setor: SETOR;
  presencial: boolean;
};

const collaborators: Pessoa[] = [
  { nome: "Marcos", salário: 2500, setor: SETOR.MARKETING, presencial: true },
  { nome: "Maria", salário: 1500, setor: SETOR.VENDAS, presencial: false },
  { nome: "Salete", salário: 2200, setor: SETOR.FINANCEIRO, presencial: true },
  { nome: "João", salário: 2800, setor: SETOR.MARKETING, presencial: false },
  { nome: "Josué", salário: 5500, setor: SETOR.FINANCEIRO, presencial: true },
  { nome: "Natalia", salário: 4700, setor: SETOR.VENDAS, presencial: true },
  { nome: "Paola", salário: 3500, setor: SETOR.MARKETING, presencial: true },
];

function getPresencialMarketPeople(array: Pessoa[]): Pessoa[] {
  const presencialMarketPeople: Pessoa[] = array.filter((person) => {
    if (person.setor === SETOR.MARKETING && person.presencial === true) {
      return person;
    }
  });
  return presencialMarketPeople;
}

console.table(getPresencialMarketPeople(collaborators));
