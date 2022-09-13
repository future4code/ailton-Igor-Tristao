import axios from "axios";
import { base_URL } from "./baseURL";

// Exercício 1
// a) get https://labenews.herokuapp.com/subscribers
// b) Promise<any[]>
// c)
async function getAllSubscribers(): Promise<void> {
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
