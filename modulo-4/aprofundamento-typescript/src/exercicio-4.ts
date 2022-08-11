type pokemon = {
  name: string;
  types: string;
  healthPoints: number;
};

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28,
};

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31,
};

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35,
};

// b) Criaria um script para ele no package.json: "exercicio4": "tsc && node ./build/exercicio4.js" e executaria.
// c) Não teria mais necessidade de passar o nome do caminho, visto que a pasta SRC é a root.
// d) Podemos rodar o comando tsc para transpilar vários arquivos ao colocar seus nomes separados por um espaço.

