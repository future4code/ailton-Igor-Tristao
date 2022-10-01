import { IShowDB } from './../models/Show';
import { NotFoundError } from "./../errors/NotFoundError";
import { ConflictError } from "./../errors/ConflictError";
import { AuthenticationError } from "./../errors/AuthenticationError";
import { ShowDatabase } from "../database/ShowDatabase";
import {
  ICreateShowInputDTO,
  IDeleteTicketInputDTO,
  IPurchaseTicketInputDTO,
  Show,
} from "../models/Show";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { AuthorizationError } from "../errors/AuthorizationError";
import { ParamsError } from "../errors/ParamsError";
import { USER_ROLES } from "../models/User";
import { UnauthorizedError } from "../errors/UnauthorizedError";

export class ShowBusiness {
  constructor(
    private showDatabase: ShowDatabase,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) {}

  public showCreator = async (input: ICreateShowInputDTO) => {
    const { token, band, startsAt } = input;

    if (!band || !startsAt) {
      throw new ParamsError(
        "Necessário insirir um nome da banda e a data que o show irá começar"
      );
    }

    if (!token) {
      throw new AuthenticationError("Necessário enviar um token");
    }

    const tokenData = this.authenticator.getTokenPayload(token);

    if (!tokenData) {
      throw new AuthorizationError("Token inválido");
    }

    const userRole = tokenData.role;

    if (userRole !== USER_ROLES.ADMIN) {
      throw new AuthorizationError(
        "Somente administradores podem acessar esse serviço."
      );
    }

    const [day, month, year]: string[] = startsAt.split("/");
    const dateFixed: string = `${month}/${day}/${year}`;

    const festivalStartsAt = new Date("12/05/2022");
    const showStartsAt = new Date(dateFixed);

    if (showStartsAt < festivalStartsAt) {
      throw new ParamsError(
        "O início do show deve ser depois do dia 05 de dezembro de 2022 (início do festival)"
      );
    }

    const dateDB = `${year}/${month}/${day}`;

    const existBandPlayingThisDate = await this.showDatabase.getShowByDate(
      dateDB
    );

    if (existBandPlayingThisDate) {
      throw new ConflictError("Já existe uma banda tocando neste dia.");
    }

    const id = this.idGenerator.generate();

    const newShow = new Show(id, band, new Date(dateDB));

    await this.showDatabase.insertShow(newShow);

    const response = {
      message: `Show da banda ${band} marcado com sucesso para o dia ${startsAt}`
    //   newShow
    };

    return response;
  }

  public getShows = async (token: string) => {

    if (!token) {
      throw new AuthenticationError("Necessário enviar um token");
    }

    const tokenData = this.authenticator.getTokenPayload(token);

    if (!tokenData) {
      throw new AuthorizationError("Token inválido");
    }

    const showsDB = await this.showDatabase.getShows();

    if (!showsDB) {
      throw new NotFoundError("Não há shows marcados.");
    }

    // Inserindo quantidade restante de tickets para venda
    const showsInfo: Show[] = [];
    for (let show of showsDB) {
      const ticketsSold = await this.showDatabase.getTicketsSold(show.id);

      const ticketsLeft = 5000 - ticketsSold;

      const eachShowInfo = new Show(
        show.id,
        show.band,
        show.starts_at,
        ticketsLeft
      );

      showsInfo.push(eachShowInfo);
    }

    const response = {
        showsInfo
    }

    return response
  }

  public ticketBuyer = async (input: IPurchaseTicketInputDTO) => {
    const { token, showId } = input;

    if (!token) {
      throw new AuthenticationError("Necessário enviar um token");
    }

    const tokenData = this.authenticator.getTokenPayload(token);

    if (!tokenData) {
      throw new AuthorizationError("Token inválido");
    }

    if (!showId || showId === ":id") {
      throw new ParamsError(
        "Necessário insirir um id de um show para reservar um ticket"
      );
    }

    const showExists = await this.showDatabase.getShowById(showId);

    if (!showExists) {
      throw new NotFoundError("Não existe um show com este id.");
    }

    const userId = tokenData.id;

    const alreadyBoughtTicket =
      await this.showDatabase.checkIfPersonBoughtTicket(showId, userId);

    if (alreadyBoughtTicket) {
      throw new UnauthorizedError(
        "Você já comprou um ingresso para este show."
      );
    }

    const ticketsSold = await this.showDatabase.getTicketsSold(showId);

    if (ticketsSold >= 5000) {
      throw new NotFoundError("Não há mais ingressos a venda.");
    }

    const id = this.idGenerator.generate();

    const ticket = {
      id,
      show_id: showId,
      user_id: userId,
    };

    await this.showDatabase.insertTicket(ticket);

    const response = {
      message: "Ticket comprado com sucesso.",
    };

    return response;
  }

  public ticketDelete = async (input: IDeleteTicketInputDTO) => {
    const { token, showId } = input;

    if (!token) {
      throw new AuthenticationError("Necessário enviar um token");
    }

    const tokenData = this.authenticator.getTokenPayload(token);

    if (!tokenData) {
      throw new AuthorizationError("Token inválido");
    }

    if (!showId || showId === ":id") {
      throw new ParamsError(
        "Necessário insirir um id de um show para deletar o ticket."
      );
    }

    const exitsShow = await this.showDatabase.getShowById(showId)

    if(!exitsShow) {
        throw new NotFoundError('Não existe um show com este id.')
    }

    const userId = tokenData.id;

    const existsTicket = await this.showDatabase.getTicketByIds(showId, userId);

    if (!existsTicket) {
      throw new NotFoundError("Você ainda não comprou um ticket deste show.");
    }

    await this.showDatabase.deleteTicket(showId, userId)

    const response = {
        message: 'Ticket deletado com sucesso.'
    }

    return response;
  }
}
