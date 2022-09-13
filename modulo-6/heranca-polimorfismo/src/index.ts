// Exercício 1

class User {
  constructor(
    private id: string,
    private email: string,
    private name: string,
    private password: string
  ) {
    console.log("Chamando o construtor da classe User");
  }

  public getId(): string {
    return this.id;
  }

  public getEmail(): string {
    return this.email;
  }

  public getName(): string {
    return this.name;
  }

  public introduceYourself(): string {
    return `Olá, sou ${this.name}. Bom dia!`;
  }
}

// const user1 = new User("001", "igor@hotmail.com", "igor", "123456");

// a) Não, pois não existe um método para isto e a variável está como privada.

// b) Apenas uma vez.

//   Exercício 2

class Customer extends User {
  public purchaseTotal: number = 0;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    private creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}

const customer1 = new Customer(
  "002",
  "alan@hotmail.com",
  "alan",
  "123456",
  "334-333-332-222"
);

// a) Apenas uma vez.

// b) Apenas uma vez, porque quando executamos o constructor da classe Customer ele está chamando o constructor da classe User também, assim ele também é executado uma vez.

// Exercício 3

customer1.getId();
customer1.getEmail();
customer1.getName();
customer1.getCreditCard();

// a) Não, porque continua privada.

// Exercício 4

//   console.log(customer1.introduceYourself())

// Exercício 5

//   console.log(customer1.introduceYourself())

// Exercício 6 (desafio)
