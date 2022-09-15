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

  async getRecipe(id: string) {
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
}
