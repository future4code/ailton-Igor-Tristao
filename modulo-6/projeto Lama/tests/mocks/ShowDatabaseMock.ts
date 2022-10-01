import { BaseDatabase } from "../../src/database/BaseDatabase";
import { IShowDB, ITicketDB, Show } from "../../src/models/Show";

export class ShowDatabaseMock extends BaseDatabase {
  public static TABLE_SHOWS = "Lama_Shows";
  public static TABLE_TICKETS = "Lama_Tickets";

  public getShowByDate = async (date: string): Promise<IShowDB | undefined> => {
    switch (date) {
      case "2022/12/05":
        return {
          id: "id-mock",
          band: "Vagabanda",
          starts_at: new Date(5 / 12 / 2022),
        };
      case "2022/12/06":
        return {
          id: "id-mock",
          band: "Paramore",
          starts_at: new Date(6 / 12 / 2022),
        };
      default:
        return undefined;
    }
  };

  public insertShow = async (show: Show): Promise<void> => {};

  public getShows = async (): Promise<IShowDB[]> => {
    const shows: IShowDB[] = [
      {
        id: "id-mock",
        band: "Vagabanda",
        starts_at: new Date("2022/10/20"),
      },
      {
        id: "id-mock",
        band: "Paramore",
        starts_at: new Date("2022/10/20"),
      },
      {
        id: "id-mock",
        band: "Blink182",
        starts_at: new Date("2022/10/20"),
      },
    ];

    return shows;
  };

  public getTicketsSold = async (showId: string): Promise<number> => {
    return 5;
  };

  public getShowById = async (showId: string): Promise<IShowDB | undefined> => {
    switch (showId) {
      case "id-mock":
        return {
          id: "id-mock",
          band: "Vagabanda",
          starts_at: new Date(10 / 10 / 2022),
        };
      case "201":
        return {
          id: "201",
          band: "Paramore",
          starts_at: new Date(10 / 10 / 2022),
        };

      default:
        return undefined;
    }
  };

  public checkIfPersonBoughtTicket = async (
    showId: string,
    userId: string
  ): Promise<ITicketDB | undefined> => {
    if (showId == "201" && userId == "id-mock") {
      return {
        id: "id-mock",
        show_id: "201",
        user_id: "id-mock",
      };
    } else {
      return undefined
    }
  };

  public insertTicket = async (ticket: ITicketDB): Promise<void> => {};

  public getTicketByIds = async (
    showId: string,
    userId: string
  ): Promise<ITicketDB | undefined> => {
    if (showId == "201" && userId == "id-mock") {
      return {
        id: "id-mock",
        show_id: "201",
        user_id: "id-mock",
      };
    } else {
      return undefined;
    }
  };

  public deleteTicket = async (
    showId: string,
    userId: string
  ): Promise<void> => {};
}
