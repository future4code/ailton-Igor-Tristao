import { ShowBusiness } from "../src/business/ShowBusiness";
import { ICreateShowInputDTO, IPurchaseTicketInputDTO, Show } from "../src/models/Show";
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

    const token = "token-mock-normal"
    const showId = "id-mock"

    const input: IPurchaseTicketInputDTO = { token, showId };

    const response = await showBusiness.ticketBuyer(input);

    expect(response.message).toBe("Ticket comprado com sucesso.")

  });
  
  // deletar ticket
});
