import axios from "axios";
import { base_URL } from "./baseURL";

// Exercício 3
// a) Não retorna erro, visto que o retorno da função é um array da tipagem que criamos.
// b) Para facilitar a leitura do código e evitar erros.
// c) 

type User = {
	id: string;
	name: string;
	email: string;
}

const getAllSubscribers = async (): Promise<User[]> => {
  const response = await axios.get(`${base_URL}/subscribers`);
  return response.data;
};

const main = async (): Promise<void> => {
  try {
    const subscribers = await getAllSubscribers();
    console.log(subscribers);
  } catch (error: any) {
    const resp = error.response?.data || error.message;
    console.log(resp);
  }
};

main();
