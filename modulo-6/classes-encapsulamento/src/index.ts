// Exercício 1
// a) O construtor é o que monta a classe, chamamos ele utilizando 'new ClassName(parametros)'.

// b) Uma vez.
class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transactions[] = [];

  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }

  getCpf() {
    console.log(this.cpf);
    return this.cpf
  }

  getBalance() {
    console.log(this.balance);
    return this.balance
  }

  getTransactions() {
    console.log(this.transactions);
    return this.transactions
  }

  setTransactions(transaction: Transactions) {
    this.transactions.push(transaction);
    console.log("Transação salva com sucesso.");
  }
}

const user1: UserAccount = new UserAccount("12345678910", "Igor", 20);

// c) Dentro da classe ou utilizando os métodos de acesso criados dentro da classe.

// Exercício 2

class Transactions {
  private description: string;
  private value: number;
  private date: string;

  constructor(description: string, value: number, date: string) {
    this.description = description;
    this.value = value;
    this.date = date;
  }

  getDescription() {
    console.log(this.description);
    return this.description
  }

  getValue() {
    console.log(this.value);
    return this.value
  }

  getDate() {
    console.log(this.date);
    return this.date
  }
}

// Criando uma transação (classe Transactions) e inserindo nas transações do usuário (classe UserAccount)
const newTransaction = new Transactions("Pagamento mercado", 200, "25/10/2010");
user1.setTransactions(newTransaction);
user1.getTransactions();

// Exercício 3

class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[] = []) {
    this.accounts = accounts;
  }

  setAccounts(account: UserAccount) {
    this.accounts.push(account)
  }

  getAccounts() {
    console.log(this.accounts)
    return this.accounts
  }
}

// Criando uma variável que vai guardar as contas (classe Bank) e adicionando uma conta nela (classe UserAccount).
const bank = new Bank()
bank.setAccounts(user1)
bank.getAccounts()