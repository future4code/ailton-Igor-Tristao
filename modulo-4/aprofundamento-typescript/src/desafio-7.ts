type Produtos = {
  nome: string;
  preço: number;
  classificação: string;
};

const produtos: Produtos[] = [
  { nome: "Casaco", preço: 89, classificação: "inverno" },
  { nome: "Sunga", preço: 49, classificação: "banho" },
  { nome: "Cueca", preço: 15, classificação: "íntima" },
  { nome: "Short", preço: 39, classificação: "verão" },
];

function addDiscount(products: Produtos[]) {

  type ProductsWithDiscount = {
    nome: string;
    preço: number;
    classificação: string;
    preçoComDesconto: number;
  };

  function createProductDiscount(products: Produtos, discountPorcentage: number) {
    const newProduct: ProductsWithDiscount = {
      ...products,
      preçoComDesconto: Math.round(products.preço - (discountPorcentage / 100) * products.preço),
    };
    return newProduct;
  }

  let arrayProductsWithDiscount: ProductsWithDiscount[] = [];

  products.filter((product) => {
    switch (product.classificação) {
      case "inverno":
        return arrayProductsWithDiscount.push(
          createProductDiscount(product, 10)
        );
      case "verão":
        return arrayProductsWithDiscount.push(
          createProductDiscount(product, 5)
        );
      case "banho":
        return arrayProductsWithDiscount.push(
          createProductDiscount(product, 4)
        );
      case "íntima":
        return arrayProductsWithDiscount.push(
          createProductDiscount(product, 7)
        );
    }
  });
  return arrayProductsWithDiscount;
}

console.table(addDiscount(produtos));
