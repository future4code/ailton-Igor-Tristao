import axios from "axios";
import { base_URL } from "./baseURL";

// Exercício 2
// a) Uma função declarada assincrona pode realizar outras linhas enquanto ela ainda está sendo realizada, enquanto
// uma função normal irá esperar sua finalização para dar continuidade.
// b)
const getAllSubscribers = async (): Promise<void> => {
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
