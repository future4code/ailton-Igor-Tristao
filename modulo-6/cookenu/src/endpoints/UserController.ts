import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { User } from "../entities/User";
import Authenticator from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";

export class UserController {
  async signup(req: Request, res: Response) {
    try {
      const { name, email, password, role } = req.body;

      if (!name || !email || !password || !role) {
        res.statusCode = 422;
        throw new Error(`Please check your fields..`);
      }

      const userDataBase = new UserDataBase();
      const user = await userDataBase.findUserByEmail(email);

      if (user) {
        res.statusCode = 409;
        throw new Error(`Email already exists.`);
      }

      // id gerado aleatorio
      const idGenerator = new IdGenerator().createId();

      // senha criptografada para inserir no mysql
      const hashPassword = await new HashManager().hashPassword(password);

      // Criando novo usuário para inserir no mysql
      const newUser = new User(idGenerator, name, email, hashPassword, role);

      // Inserindo novo usuário no banco de dados
      await userDataBase.insertUser(newUser);

      const authenticator = new Authenticator();
      const token = authenticator.generateToken({ id: idGenerator, role });

      res.status(201).send({ message: `User created successfully`, access_token: token });
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.statusCode = 422;
        throw new Error(`Please check your fields...`);
      }

      const userDataBase = new UserDataBase();

      // Verificar se o usuário existe
      const user = await userDataBase.findUserByEmail(email);

      if (!user) {
        res.statusCode = 404;
        throw new Error(`User not found.`);
      }

      const hashManager = new HashManager();

      // Comparando a senha inserida com a senha do DB (criptografada)
      const passwordIsCorrect = await hashManager.compare(
        password,
        user.getPassword()
      );

      if (!passwordIsCorrect) {
        res.statusCode = 401;
        throw new Error(`Password is incorrect.`);
      }

      const authenticator = new Authenticator();
      const token = authenticator.generateToken({
        id: user.getId(),
        role: user.getRole(),
      });

      res.send({ message: `User logged in successfully`, access_token: token });
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }

  // Apenas admin
  async getAllProfiles(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;

      if (!token) {
        res.statusCode = 422;
        throw new Error(`Authorization missing.`);
      }

      const authenticator = new Authenticator();
      const tokenData = authenticator.verifyToken(token);

      if (tokenData.role !== "ADMIN") {
        res.statusCode = 401;
        throw new Error(`You have to be admin to get all profiles.`);
      }

      const userDataBase = new UserDataBase();
      const profiles = await userDataBase.getAllProfiles();

      res.status(200).send({ profiles: profiles });
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }

  async getOwnProfile(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;

      if (!token) {
        res.statusCode = 422;
        throw new Error(`Token must be provided`);
      }

      const authenticator = new Authenticator();
      const tokenData = authenticator.verifyToken(token);

      if (!tokenData) {
        res.statusCode = 401;
        throw new Error(`Invalid token`);
      }

      const userDataBase = new UserDataBase();

      const user: User | undefined = await userDataBase.findUserById(
        tokenData.id
      );

      const userInfo = {
        id: user?.getId(),
        name: user?.getName(),
        email: user?.getEmail(),
      };

      res.status(200).send(userInfo);
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }

  // Apenas admin
  async getProfile(req: Request, res: Response) {
    try {

      const userId = req.params.id as string
      const token = req.headers.authorization

      if(!userId || userId === ':id') {
        res.statusCode = 422
        throw new Error(`ID must be provided`)
      }

      if(!token) {
        res.statusCode = 422
        throw new Error(`Token must be provided`)
      }

      const authenticator = new Authenticator();
      const tokenData = authenticator.verifyToken(token);

      if (tokenData.role !== 'ADMIN') {
        res.statusCode = 401;
        throw new Error(`You have to be an ADMIN to acess this profile.`);
      }

      const userDataBase = new UserDataBase()

      const user = await userDataBase.findUserById(userId)

      if(!user) {
        res.statusCode = 404;
        throw new Error(`Invalid ID.`);
      }

      const userInfo = {
        id: user?.getId(),
        name: user?.getName(),
        email: user?.getEmail(),
      };

      res.send(userInfo);
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }
}
