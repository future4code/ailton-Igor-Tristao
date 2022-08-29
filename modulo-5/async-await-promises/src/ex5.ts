import axios from "axios";
import { base_URL } from "./baseURL";

// Exercício 5

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
  for (const user of users) {
    try {
      await axios.post(`${base_URL}/notifications`, {
        subscriberId: user.id,
        message: "Olá, há uma nova notícia em nosso site",
      });
      console.log(`Notificações enviadas ao ${user.id}`);
    } catch (erro) {
      console.log(`Erro`);
    }
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
