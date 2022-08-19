export type Extrato = {
  value: number;
  date: string;
  description: string;
  status?: string | null | undefined
};

export type User = {
  nome: string;
  cpf: string;
  dataNascimento: string;
  saldo: number;
  extratoBancario: Extrato[]
};

export const users: User[] = [
  {
    nome: "Igor",
    cpf: "16020255760",
    dataNascimento: "30/11/1995",
    saldo: 20,
    extratoBancario: [],
  },
];
