import { ShowBusiness } from "../src/business/ShowBusiness";
import {
  ICreateShowInputDTO,
  IDeleteTicketInputDTO,
  IPurchaseTicketInputDTO,
  Show,
} from "../src/models/Show";
import { AuthenticatorMock } from "./mocks/AuthenticatorMock";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { ShowDatabaseMock } from "./mocks/ShowDatabaseMock";

describe("Testando a PostBusiness", () => {
  const showBusiness = new ShowBusiness(
    new ShowDatabaseMock(),
    new IdGeneratorMock(),
    new AuthenticatorMock()
  );

  test("Deve retornar uma lista de shows", async () => {
    const token: string = "token-mock-normal";

    const response = await showBusiness.getShows(token);
    expect(response.showsInfo.length).toBe(3);
    expect(response.showsInfo[0]).toBeInstanceOf(Show);
    expect(response.showsInfo[1].getBand()).toBe("Paramore");
    expect(response.showsInfo[2].getBand()).toBe("Blink182");
  });

  test("Deve ser possível criar um novo show", async () => {
    const input: ICreateShowInputDTO = {
      token: "token-mock-admin",
      band: "Teste do mock",
      startsAt: "20/12/2022",
    };

    const response = await showBusiness.showCreator(input);

    expect(response.message).toBe(
      `Show da banda ${input.band} marcado com sucesso para o dia ${input.startsAt}`
    );
    // expect(response.newShow).toBeInstanceOf(Show)
    // expect(response.newShow.getId()).toBe("id-mock")
    // expect(response.newShow.getBand()).toBe("Teste do mock")
    // expect(response.newShow.getTickets()).toBe(5000)
  });

  test("Deve ser possível comprar um ticket", async () => {
    const token = "token-mock-normal";
    const showId = "id-mock";

    const input: IPurchaseTicketInputDTO = { token, showId };

    const response = await showBusiness.ticketBuyer(input);

    expect(response.message).toBe("Ticket comprado com sucesso.");
  });

  test("Deve ser possível deletar um ticket", async () => {
    const token = "token-mock-normal";
    const showId = "201";

    const input = { token, showId };

    const response = await showBusiness.ticketDelete(input);

    expect(response.message).toBe("Ticket deletado com sucesso.");
  });

  // Erros criação de um show

  test("Deve retornar um erro caso insira um token errado", async () => {
    expect.assertions(2);

    try {
      const token: string = "token-mock-errado";

      await showBusiness.getShows(token);
    } catch (error: any) {
      expect(error.statusCode).toBe(403);
      expect(error.message).toBe("Token inválido");
    }
  });

  test("Deve retornar um erro caso queira criar um show sem ser ADMIN", async () => {
    expect.assertions(2);

    try {
      const input: ICreateShowInputDTO = {
        token: "token-mock-normal",
        band: "Teste do mock",
        startsAt: "20/12/2022",
      };
  
      await showBusiness.showCreator(input);
  
    } catch (error: any) {
      expect(error.statusCode).toBe(403);
      expect(error.message).toBe("Somente administradores podem acessar esse serviço.");
    }
  });

  test("Deve retornar um erro caso queira criar um show com uma data anterior ao inicio do festival", async () => {
    expect.assertions(2);

    try {
      const input: ICreateShowInputDTO = {
        token: "token-mock-admin",
        band: "Teste do mock",
        startsAt: "20/12/2020",
      };
  
      await showBusiness.showCreator(input);
  
    } catch (error: any) {
      expect(error.statusCode).toBe(400);
      expect(error.message).toBe("O início do show deve ser depois do dia 05 de dezembro (início do festival)");
    }
  });

  test("Deve retornar um erro caso queira criar um show onde ja exista uma banda tocando", async () => {
    expect.assertions(2);

    try {
      const input: ICreateShowInputDTO = {
        token: "token-mock-admin",
        band: "Teste do mock",
        startsAt: "06/12/2022",
      };
  
      await showBusiness.showCreator(input);
  
    } catch (error: any) {
      expect(error.statusCode).toBe(409);
      expect(error.message).toBe("Já existe uma banda tocando neste dia.");
    }
  });

  // Erros comprar um ticket
  test("Deve retornar um erro caso queira comprar um ticket inserindo um id de show errado", async () => {
    expect.assertions(2);

    try {
      const input: IPurchaseTicketInputDTO = {
        token: "token-mock-admin",
        showId: "5555"
      }
  
      await showBusiness.ticketBuyer(input);
  
    } catch (error: any) {
      expect(error.statusCode).toBe(404);
      expect(error.message).toBe("Não existe um show com este id.");
    }
  });

  test("Deve retornar um erro caso queira comprar um ticket para um show que voce ja possui ticket", async () => {
    expect.assertions(2);

    try {
      const input: IPurchaseTicketInputDTO = {
        token: "token-mock-admin",
        showId: "201"
      }
  
      await showBusiness.ticketBuyer(input);
  
    } catch (error: any) {
      expect(error.statusCode).toBe(401);
      expect(error.message).toBe( "Você já comprou um ingresso para este show.");
    }
  });

  test("Deve retornar um erro caso queira deletar um ticket para um show que não possui ticket", async () => {
    expect.assertions(2);

    try {
      const input: IDeleteTicketInputDTO = {
        token: "token-mock-admin",
        showId: "id-mock"
      }
  
      await showBusiness.ticketDelete(input);
  
    } catch (error: any) {
      expect(error.statusCode).toBe(404);
      expect(error.message).toBe("Você ainda não comprou um ticket deste show.");
    }
  });

});
