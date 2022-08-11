type Product = {
  name: string;
  cost: number;
  saleValue: number;
  ingredients: string[];
};

const restaurantProducts: Product[] = [];

// LETRA A
function addProductsToMenu(
  name: string,
  cost: number,
  value: number,
  ingredients: string[]
) {
  const newProduct: Product = {
    name: name,
    cost: cost,
    saleValue: value,
    ingredients: ingredients,
  };
  return restaurantProducts.push(newProduct);
}

addProductsToMenu("Strogonoff", 20, 50, [
  "frango",
  "batata-palha",
  "creme-de-leite",
  "ketchup",
]);
addProductsToMenu("Batata Frita", 10, 20, ["batata"]);
addProductsToMenu("Pudim", 2, 10, [
  "Leite-condensado",
  "leite",
  "açucar",
  "ovos",
]);

//EXEMPLO LETRA A, ADICIONADO 3 PRODUTOS (LINHA 26, 32 E 33)
console.table(restaurantProducts)

//LETRA B
function returnValueOfProduct(name: string) {
  for (let product of restaurantProducts) {
    if (product.name.toLowerCase() === name.toLowerCase()) {
      return `O preço do ${name} é de: R$${product.saleValue},00`;
    } else {
      return `Não possuimos este produto no restaurante.`;
    }
  }
}

// EXEMPLO LETRA B
console.log(returnValueOfProduct("Strogonoff"));

type Sale = {
  clientName: string;
  productName: string;
};

const arraySales: Sale[] = [];

const arrayProfitForEachSale: number[] = [];

// LETRA C
function makeASale(clientName: string, productName: string) {
  const newSale: Sale = {
    clientName: clientName,
    productName: productName,
  };

  arraySales.push(newSale);

  for (let product of restaurantProducts) {
    if (product.name.toLowerCase() === productName.toLowerCase()) {
      return arrayProfitForEachSale.push(product.saleValue - product.cost);
    }
  }
}

console.log(makeASale("Igor", "Strogonoff"));
console.log(makeASale("Ricardo", "Pudim"));

// EXEMPLO LETRA C, REALIZANDO DUAS COMPRAS (LINHA 82 E 83)
console.log(arraySales);

function getRestaurantProfit (array:number[]):string {
    const profit:number = array.reduce((curr, prev) => curr + prev, 0)
    return `O lucro do restaurante até o momento é de: R$ ${profit}`
}

console.log(getRestaurantProfit(arrayProfitForEachSale));
