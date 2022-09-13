import axios from "axios";
import { base_URL } from "./baseURL";

// Exercício 6
// a) Capaz de pegar um array (vetor) de promises e executa-lás paralelamente.
// b) Porque não é necessário esperar a primeira requisição terminar para começar a segunda, é possível
// enviar as notificaçoes paralelamente.
// c)
type User = {
  id: string;
  name: string;
  email: string;
};

const getAllSubscribers = async (): Promise<User[]> => {
  const response = await axios.get(`${base_URL}/subscribers`);
  return response.data;
};

const sendNotifications = async (users: User[]): Promise<void> => {
  try {
    const requests = users.map((user) =>
      axios.post(`${base_URL}/notifications`, {
        subscriberId: user.id,
        message: "Olá, há uma nova notícia em nosso site",
      })
    );
    await Promise.all(requests);
    console.log(`Notificações enviadas com sucesso.`);
  } catch (erro) {
    console.log(`Erro`);
  }
};

const main = async (): Promise<void> => {
  try {
    const subscribers = await getAllSubscribers();
    await sendNotifications(subscribers);
  } catch (error: any) {
    const resp = error.response?.data || error.message;
    console.log(resp);
  }
};

main();
