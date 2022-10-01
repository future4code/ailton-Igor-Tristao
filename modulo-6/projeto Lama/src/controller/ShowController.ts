import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { ICreateShowInputDTO, IDeleteTicketInputDTO, IPurchaseTicketInputDTO } from "../models/Show";

export class ShowController {
  constructor(private showBusiness: ShowBusiness) {}

  public createShow = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const { band, startsAt } = req.body;

      const input: ICreateShowInputDTO = { token, band, startsAt };

      const response = await this.showBusiness.showCreator(input);

      res.status(201).send(response);
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  };

  public getShows = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const response = await this.showBusiness.getShows(token);

      res.status(200).send(response);
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  };

  public purchaseTicket = async (req: Request, res: Response) => {
    try {

        const token = req.headers.authorization as string
        const showId = req.params.id

        const input: IPurchaseTicketInputDTO = { token, showId }

        const response = await this.showBusiness.ticketBuyer(input)

        res.status(201).send(response)

    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  };

  public deleteTicket = async (req: Request, res: Response) => {
    try {
        
        const token = req.headers.authorization as string
        const showId = req.params.id

        const input: IDeleteTicketInputDTO = { token, showId } 

        const response = await this.showBusiness.ticketDelete(input)

        res.status(200).send(response)

    } catch (error: any) {
        res.status(error.status || 500).send({ message: error.message });
    }
  }
}
