import { FollowerDataBase } from "./../data/FollowerDataBase";
import { Request, Response } from "express";
import { RecipeDataBase } from "../data/RecipeDataBase";
import { UserDataBase } from "../data/UserDataBase";
import { User } from "../entities/User";
import Authenticator from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";
import { typeUser } from "../types";

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

      const idGenerator = new IdGenerator().createId();

      const hashPassword = await new HashManager().hashPassword(password);

      const newUser = new User(idGenerator, name, email, hashPassword, role);

      await userDataBase.insertUser(newUser);

      const authenticator = new Authenticator();
      const token = authenticator.generateToken({ id: idGenerator, role });

      res
        .status(201)
        .send({ message: `User created successfully`, access_token: token });
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

      const user = await userDataBase.findUserByEmail(email);

      if (!user) {
        res.statusCode = 404;
        throw new Error(`User not found.`);
      }

      const hashManager = new HashManager();

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

  async getAllProfiles(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;

      if (!token) {
        res.statusCode = 422;
        throw new Error(`Authorization missing.`);
      }

      const authenticator = new Authenticator();
      const tokenData = authenticator.verifyToken(token);

      if (tokenData.role !== typeUser.ADMIN) {
        res.statusCode = 401;
        throw new Error(`You must be an administrator to get all profiles.`);
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

  async followUser(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      const { userToFollowId } = req.body;

      if (!token) {
        res.statusCode = 422;
        throw new Error(`Token must be provided`);
      }

      const tokenData = new Authenticator().verifyToken(token);

      const user = await new UserDataBase().findUserById(userToFollowId);

      if (!user) {
        res.statusCode = 404;
        throw new Error(`Invalid ID.`);
      }

      const followerDataBase = await new FollowerDataBase().startFollowing(
        tokenData.id,
        user.getId()
      );

      res.send("Followed successfully.");
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }

  async unfollowUser(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      const { userToUnfollowId } = req.body;

      if (!userToUnfollowId) {
        res.statusCode = 422;
        throw new Error(`ID must be provided.`);
      }

      const user = await new UserDataBase().findUserById(userToUnfollowId);

      if (!user) {
        res.statusCode = 404;
        throw new Error(`Invalid ID`);
      }

      if (!token) {
        res.statusCode = 422;
        throw new Error(`Token must be provided`);
      }

      const tokenData = new Authenticator().verifyToken(token);

      const followerDataBase = new FollowerDataBase().stopFollowing(
        tokenData.id,
        userToUnfollowId
      );

      res.send({ message: `Unfollowed successfully` });
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }

  async getFeed(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;

      if (!token) {
        res.statusCode = 422;
        throw new Error(`Token must be provided`);
      }

      const tokenData = new Authenticator().verifyToken(token);

      const recipes = await new RecipeDataBase().getAllRecipes();

      const user_following = await new FollowerDataBase().getPeopleFollowed(
        tokenData.id
      );

      if (user_following.length === 0) {
        res.statusCode = 404;
        throw new Error(`You are not following anyone.`);
      }

      let recipesFollowing: any[] = [];

      recipes.map(async (recipe) => {
        for (let i = 0; i < user_following.length; i++) {
          if (recipe.creator_id === user_following[i].user_being_followed) {
            const recipeInfo = {
              id: recipe.id,
              title: recipe.title,
              description: recipe.description,
              createdAt: recipe.create_date.toLocaleDateString(),
              userId: recipe.creator_id,
            };
            recipesFollowing.push(recipeInfo);
          }
        }
      });

      if(recipesFollowing.length === 0) {
        res.statusCode = 404
        throw new Error(`None of your followers has posted any recipe yet`)
      }

      res.send(recipesFollowing);
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {

      const token = req.headers.authorization
      const userId = req.params.userId

      if(!userId || userId == ':userId') {
        res.statusCode = 422
        throw new Error('ID must be provided')
      }

      if(!token) {
        res.statusCode = 422
        throw new Error('Token must be provided')
      }

      const tokenData = new Authenticator().verifyToken(token);

      if(tokenData.role !== typeUser.ADMIN) {
        res.statusCode = 401
        throw new Error('You must be an administrator to delete an user.')
      }

      const user = await new UserDataBase().findUserById(userId)

      if(!user) {
        res.statusCode = 404
        throw new Error('User not found')
      }

      await new UserDataBase().deleteUser(userId)

      res.status(200).send('User deleted successfully');
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }
}
