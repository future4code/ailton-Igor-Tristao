import express, { Express, request, Request, Response } from "express";
import cors from "cors";
import { Product, products } from "./data";

const app: Express = express();
app.use(express.json());
app.use(cors());

// Exercício 1
app.get("/test", (req: Request, res: Response) => {
  res.send("Funcionou");
});

// Exercício 2
// Arquivo data.ts

// Exercício 3 e 7
app.post("/addProduct", (req: Request, res: Response) => {
  try {
    const { name, price } = req.body;

    //erro caso um ou nenhum deles forem recebidos
    if (!name || !price) {
      res.statusCode = 404;
      throw new Error("Nome ou preço não inserido");
    }

    //erro caso name seja diferente de string
    if (typeof name !== "string") {
      res.statusCode = 401;
      throw new Error("Nome do produto deve ser uma string");
    }

    //erro caso price seja diferente de number
    if (typeof price !== "number") {
      res.statusCode = 401;
      throw new Error("Preço do produto deve ser um número");
    }

    //erro caso price seja igual ou menor que 0
    if (price <= 0) {
      res.statusCode = 401;
      throw new Error("Preço não pode ser menor ou igual a 0");
    }

    const newProduct: Product = {
      id: products.length + 1,
      name,
      price,
    };

    products.push(newProduct);
    res.send(products);
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

// Exercício 4 e 10 (desafio)
app.get("/getAllProducts", (req: Request, res: Response) => {
  try {
    const nameToSearch = req.query.search;

    if (nameToSearch) {
      const productsFiltered = products.filter((product) => {
        return product.name
          .toLowerCase()
          .includes(nameToSearch.toString().toLowerCase());
      });
      if (productsFiltered.length === 0) {
        res.statusCode = 401;
        throw new Error(`Nenhum produto encontrado com este nome.`);
      } else {
        res.send(productsFiltered);
      }
    }

    if (!nameToSearch) {
      res.send(products);
    }
  } catch (error: any) {
    res.status(res.statusCode).send({message: error.message})
  }
});

// Exercício 5 e 8
app.put("/updateProduct", (req: Request, res: Response) => {
  try {
    const { id, price } = req.body;

    //erro caso price não seja recebido
    if (!price) {
      res.statusCode = 404;
      throw new Error("Preço não inserido corretamente");
    }

    //erro caso price seja diferente de number
    if (typeof price !== "number") {
      res.statusCode = 401;
      throw new Error("Preço do produto deve ser um número");
    }

    //erro caso price seja igual ou menor que 0
    if (price <= 0) {
      res.statusCode = 401;
      throw new Error("Preço não pode ser menor ou igual a 0");
    }

    //erro caso id(nome) não seja recebida (exceto em casos de path params)
    if (!id || typeof id !== "number") {
      res.statusCode = 401;
      throw new Error(
        "ID do produto não inserido corretamente, verifique se ele esta sendo enviado como number"
      );
    }

    //erro caso o produto a ser editado não seja encontrado
    const productExists = products.filter((product) => {
      return product.id === id;
    });

    if (productExists.length === 0) {
      res.statusCode = 401;
      throw new Error("Produto com este ID não encontrado");
    }

    const findProduct = products.map((product) => {
      if (product.id === id) {
        return (product = { ...product, price: price });
      } else {
        return product;
      }
    });

    res.send(findProduct);
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

// Exercício 6 e 9
app.delete("/deleteProduct/:id", (req: Request, res: Response) => {
  try {
    const productId = Number(req.params.id);

    //erro caso id não seja recebido (exceto em casos de path params)
    // Estou utilizando pathParams

    //erro caso o produto escolhido não seja encontrado
    const productExists = products.filter((product) => {
      return product.id === productId;
    });
    if (productExists.length === 0) {
      res.statusCode = 401;
      throw new Error("Produto com este ID não encontrado.");
    }

    const productRemoved = products.filter((product) => {
      return product.id !== productId;
    });

    res.send(productRemoved);
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

app.listen(3003, () => {
  console.log("Server is running...");
});
