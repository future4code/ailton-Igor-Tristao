interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
    // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
  }
  
  const user: Client = {
    name: "Igor",
    registrationNumber: 1,
    consumedEnergy: 200,
  
    calculateBill(): number {
      return 2;
    },
  };
  
  // console.log(
  //   user.name,
  //   user.registrationNumber,
  //   user.consumedEnergy,
  //   user.calculateBill()
  // );
  
  // Exercício 1
  // a) Todas foram possíveis.
  
  // Exercício 2
  abstract class Place {
    constructor(protected cep: string) {}
  
    public getCep(): string {
      return this.cep;
    }
  }
  
  // const place = new Place('2222222')
  // a) Não é possível criar uma instância de uma classe abstrata.
  
  // b) "Armazena as características em comum de um conjunto de outras classes", logo devemos criar outras classes mais específicas, como residencial/comercial.
  
  class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      // Refere-se ao número de moradores da casa
  
      cep: string
    ) {
      super(cep);
    }
  
    public getResidentsQuantity(): number {
      return this.residentsQuantity;
    }
  }
  
  const residence1 = new Residence(3, "28911-160");
  console.log(
    `Residence - CEP:`,
    residence1.getCep(),
    "/ Residents Quantity:",
    residence1.getResidentsQuantity()
  );
  
  class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }
  
    public getFloorsQuantity(): number {
      return this.floorsQuantity;
    }
  }
  
  const commerce1 = new Commerce(4, "28911-160");
  console.log(
    `Commerce - CEP:`,
    commerce1.getCep(),
    "/ Floors Quantity:",
    commerce1.getFloorsQuantity()
  );
  
  class Industry extends Place {
    constructor(
      protected machinesQuantity: number,
      // Refere-se à quantidade de máquinas do local
  
      cep: string
    ) {
      super(cep);
    }
  
    public getMachinesQuantity(): number {
      return this.machinesQuantity;
    }
  }
  
  const industry1 = new Industry(30, "28911-160");
  console.log(
    `Industry - CEP:`,
    industry1.getCep(),
    "/ Machines Quantity:",
    industry1.getMachinesQuantity()
  );
  
  // Exercício 4
  // a) Possúi as propriedades nome, registrationNumber e consumedEnergy pois herdou do tipo Client, possui um CPF,
  //    um residentsQuantity e cep por extenderem estas propriedades da classe Residence. Possui os métodos
  //    calculateBill() porque herdou do Client e getCpf.
  
  class ResidentialClient extends Residence implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private cpf: string,
      residentsQuantity: number,
      cep: string
    ) {
      super(residentsQuantity, cep);
    }
  
    public getCpf(): string {
      return this.cpf;
    }
  
    calculateBill() {
      return this.consumedEnergy * 0.75;
    }
  }
  
  // Exercício 5
  // a) As semelhanças são as propriedades que são herdadas das classes Place (cep) e da interface Client (name, registrationNumber, consumedEnergy)
  // b) As diferenças são o floorsQuantity/residentsQuantity (criado na classe Commerce/Residence, filhas da Place) e o cnpj/cpf criados diretamente na classe.
  
  class CommercialClient extends Commerce implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private cnpj: string,
      floorsQuantity: number,
      cep: string
    ) {
      super(floorsQuantity, cep);
    }
  
    getCnpj(): string {
      return this.cnpj;
    }
  
    calculateBill(): number {
      return this.consumedEnergy * 0.53;
    }
  }
  
  // Exercício 6
  // a) Deve ser filha da classe Industry, pois deve herdar as propriedades de industria, machinesQuantity.
  // b) A interface Client, pois será um cliente industrial, precisará das propriedades de um Cliente.
  // c) Porque caso queiramos adicionar outros iremos fazer nas classes acima dela (industry ou place).
  
  class IndustrialClient extends Industry implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private industrialRegister: number,
      machinesQuantity: number,
      cep: string
    ) {
      super(machinesQuantity, cep);
    }
  
    calculateBill(): number {
      return this.consumedEnergy * 0.45;
    }
  
    getIndustrialRegister(): number {
      return this.industrialRegister + this.machinesQuantity * 100;
    }
  }
  
  // Exercício 7 e 8 (desafios)
  
  class ClientManager {
    private clients: Client[] = [];
  
    getClientsQuantity(): number {
      return this.clients.length;
    }
  
    public registerClient(client: Client): void {
      this.clients.push(client);
    }
  
    public getBillOfClient(registrationNumber: number) {
      const findClient = this.clients.find((client) => client.registrationNumber === registrationNumber)
      return findClient?.calculateBill() || 0
    }
  
    public calculateTotalIncome() {
      const totalIncome = this.clients.map((client) => {
          return client.calculateBill()
      }).reduce((prev, curr) => prev + curr, 0)
      return totalIncome
    }
  
    public deleteUser(registrationNumber: number): void {
      const clientsWithoutUser = this.clients.filter((client) => client.registrationNumber !== registrationNumber)
      this.clients = clientsWithoutUser
    }
  }
  
  const clientManager = new ClientManager
  const residencialClient1 = new ResidentialClient('igor', 2, 100, '222222222', 4, '28911-160')
  const residencialClient2 = new ResidentialClient('alan', 3, 150, '222222222', 4, '28911-160')
  clientManager.registerClient(residencialClient1)
  clientManager.registerClient(residencialClient2)
  // console.log(clientManager.calculateTotalIncome())
  console.log(clientManager.getClientsQuantity())
  clientManager.deleteUser(2)
  console.log(clientManager.getClientsQuantity())
  