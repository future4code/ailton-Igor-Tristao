import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
  async create(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      const user = {
        name,
        email,
        password,
      };

      const token = await new UserBusiness().create(user);

      res.status(201).send({ token: token });
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const token = await new UserBusiness().login(email, password);

      res.status(200).send({ token: token });
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }

  async getUsers(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      let search = req.query.search as string

      if(!search) {
        search = ""
      }

      const users = await new UserBusiness().getUsers(token, search);

      res.status(200).send({ users: users });
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const token = req.headers.authorization;

      const message = await new UserBusiness().deleteUser(userId, token)

      res.send({ message: message})

    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }
}
