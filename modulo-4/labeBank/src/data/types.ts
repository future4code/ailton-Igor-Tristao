export type CreateUserBody = {
  name: string;
  cpf: string;
  birthDate: string;
};

export type AddBillBody = {
  date: string;
  value: number;
  cpf: string;
};

export type AddBalanceBody = {
  name: string;
  value: number;
  cpf: string;
};

export type Extrato = {
  value: number;
  date: string;
  description: string;
  status?: string;
};

export type User = {
  name: string;
  cpf: string;
  birthDate: string;
  balance: number;
  bankStatement: Extrato[];
};

export type TransferBody = {
    name: string,
    userCpf: string,
    recipientName: string,
    recipientCpf: string,
    value: number
}
