import { IdGenerator } from "./../services/IdGenerator";
import { Request, Response } from "express";
import { RecipeDataBase } from "../data/RecipeDataBase";
import { Recipe } from "../entities/Recipe";
import Authenticator from "../services/Authenticator";

export class RecipeController {
  async createRecipe(req: Request, res: Response) {
    try {
      const { title, description } = req.body;
      const token = req.headers.authorization

      if (!token) {
        res.statusCode = 422;
        throw new Error(`Token must be provided`);
      }

      const authenticator = new Authenticator().verifyToken(token);

      if (!title || !description) {
        res.statusCode = 422;
        throw new Error(`Please check your fields...`);
      }

      const date = new Date();

      const id = new IdGenerator().createId();

      const recipe: Recipe = new Recipe(id, title, description, date);

      const recipeDataBase = new RecipeDataBase();

      await recipeDataBase.insertRecipe(recipe);

      res.send({ message: "Recipe created successfully." });
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }

  async getRecipe(req: Request, res: Response) {
    try {
      const recipeId = req.params.id;
      const token = req.headers.authorization as string;

      if (!token) {
        res.statusCode = 422;
        throw new Error(`Token must be provided`);
      }

      const authenticator = new Authenticator().verifyToken(token);

      if (!recipeId || recipeId === ":id") {
        res.statusCode = 422;
        throw new Error(`ID must be provided`);
      }

      const recipeDataBase = new RecipeDataBase();

      const recipe = await recipeDataBase.getRecipe(recipeId);

      if (!recipe) {
        res.statusCode = 404;
        throw new Error(`Invalid ID.`);
      }

      const date = recipe.getDate().toLocaleDateString();

      const recipeInfo = {
        id: recipe.getId(),
        title: recipe.getTitle(),
        description: recipe.getDescription(),
        createdAt: date,
      };

      res.send(recipeInfo);
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }
}
