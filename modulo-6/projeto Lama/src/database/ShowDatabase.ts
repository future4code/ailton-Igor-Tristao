import { IShowDB, ITicketDB, Show } from "../models/Show";
import { BaseDatabase } from "./BaseDatabase";

export class ShowDatabase extends BaseDatabase {
  public static TABLE_SHOWS = "Lama_Shows";
  public static TABLE_TICKETS = "Lama_Tickets";

  public getShowByDate = async (
    date: string
  ): Promise<IShowDB | undefined> => {
    const show: IShowDB[] = await BaseDatabase.connection("Lama_Shows").where({
      starts_at: date,
    });

    if (show.length === 0) {
      return undefined;
    }

    return show[0];
  };

  public insertShow = async (show: Show): Promise<void> => {
    const showDB: IShowDB = {
      id: show.getId(),
      band: show.getBand(),
      starts_at: show.getStartsAt(),
    };

    await BaseDatabase.connection("Lama_Shows").insert(showDB);
  };

  public getShows = async (): Promise<IShowDB[] | undefined> => {
    const showsDB: IShowDB[] = await BaseDatabase.connection("Lama_Shows");

    if (showsDB.length === 0) {
      return undefined;
    }

    return showsDB;
  };

  public getTicketsSold = async (showId: string): Promise<number> => {
    const ticketsSold = await BaseDatabase.connection("Lama_Tickets").where({
      show_id: showId,
    });

    return ticketsSold.length;
  };

  public getShowById = async (showId: string): Promise<IShowDB | undefined> => {
    const show: IShowDB[] = await BaseDatabase.connection("Lama_Shows").where({
      id: showId,
    });

    if (show.length === 0) {
      return undefined;
    }

    return show[0];
  };

  public checkIfPersonBoughtTicket = async (
    showId: string,
    userId: string
  ): Promise<ITicketDB | undefined> => {
    const ticket: ITicketDB[] = await BaseDatabase.connection(
      "Lama_Tickets"
    ).where({
      show_id: showId,
      user_id: userId,
    });

    if (ticket.length === 0) {
      return undefined;
    }

    return ticket[0];
  };

  public insertTicket = async (ticket: ITicketDB): Promise<void> => {
    await BaseDatabase.connection("Lama_Tickets").insert(ticket);
  };

  public getTicketByIds = async (
    showId: string,
    userId: string
  ): Promise<ITicketDB | undefined> => {
    const ticket: ITicketDB[] = await BaseDatabase.connection(
      "Lama_Tickets"
    ).where({
      show_id: showId,
      user_id: userId,
    });

    if (ticket.length === 0) {
      return undefined;
    }

    return ticket[0];
  };

  public deleteTicket = async (
    showId: string,
    userId: string
  ): Promise<void> => {
    await BaseDatabase.connection("Lama_Tickets")
      .delete()
      .where({ show_id: showId, user_id: userId });
  };
}
