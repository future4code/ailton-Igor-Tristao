// 3)
// a)

type typePosts = {
  autor: string;
  texto: string;
};

const posts: typePosts[] = [
  {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver",
  },
  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!",
  },
  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!",
  },
  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!",
  },
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!",
  },
];

//   b)
function buscarPostsPorAutor(posts: typePosts[], autorInformado: string):typePosts[] {
  return posts.filter((post) => {
    return post.autor === autorInformado;
  });
}

// As entradas são um post(array de objetos) e o nome de um autor (string)
// A saída é o retorno de um filter (array) contendo o objeto que o nome do autor seja igual ao do parametro. Logo retorna um array de objetos (apena um objeto)

