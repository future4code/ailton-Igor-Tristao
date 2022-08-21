import { User } from './types'

export const users: User[] = [
  {
    name: "Igor",
    cpf: "12345678910",
    birthDate: "30/11/1995",
    balance: 50,
    bankStatement: [
      {
        value: 10,
        date: "15/08/2022",
        description: "Conta para efetuar pagamento",
        status: "Não paga",
      },
    ],
  },
  {
    name: "Alan",
    cpf: "12345678911",
    birthDate: "25/5/2000",
    balance: 100,
    bankStatement: []
  }
];
