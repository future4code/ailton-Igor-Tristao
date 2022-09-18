import { Recipe } from "../entities/Recipe";
import { BaseDataBase } from "./BaseDataBase";

export class RecipeDataBase extends BaseDataBase {
  async insertRecipe(recipe: Recipe) {
    try {
      await this.getConnection().insert(recipe).into("cookenu_recipe");
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async getRecipeById(id: string) {
    try {
      const recipe = await this.getConnection()
        .where({ id })
        .from("cookenu_recipe");

      if (recipe.length === 0) {
        return undefined;
      }

      return Recipe.toRecipeModel(recipe[0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async getAllRecipes() {
    try {
      const recipes = await this.getConnection().from("cookenu_recipe");
      return recipes;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async updateRecipe(id: string, title: string, description: string) {
    try {
      await this.getConnection()
        .update({ title, description })
        .where({ id })
        .into("cookenu_recipe");
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async deleteRecipe(id: string) {
    try {

      await this.getConnection().delete().where({id}).from('cookenu_recipe')

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
