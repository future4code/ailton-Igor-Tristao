import axios from "axios";
import { base_URL } from "./baseURL";

// Exercício 4
// a) Função assincrona, porque conversa com uma API.
type News = {
    title: string,
    content: string,
    date: number
}

const newNews: News = {
    title: "Exercicio do notion",
    content: "Testando funcionaldiade da API",
    date: Date.now()
}

async function createNews(news: News): Promise<void> {
  await axios.put(`${base_URL}/news`, news);
};

const main = async (): Promise<void> => {
  try {
    await createNews(newNews);
    console.log('Notícia criada com sucesso.');
  } catch (error: any) {
    const resp = error.response?.data || error.message;
    console.log(resp);
  }
};

main()
