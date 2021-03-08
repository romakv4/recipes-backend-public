import { Recipe } from "./recipe.interface";

export interface RecipeWithAlphabet {
    recipes: Recipe[],
    alphabet: string[]
}