import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { ISignupInputDTO } from "../models/User";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  public signup = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      const input: ISignupInputDTO = { name, email, password };

      const token = await this.userBusiness.userCreator(input);

      res.status(201).send(token);
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  };

  public login = async (req: Request, res: Response) => {
    try {


      res.send("oi");

      
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  };
}
