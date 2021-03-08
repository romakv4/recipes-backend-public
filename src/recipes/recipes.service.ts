import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Recipe } from './interfaces/recipe.interface';
import { RecipeWithAlphabet } from './interfaces/recipeWithAlphabet.interface';

@Injectable()
export class RecipesService {
  constructor(
    @InjectModel('Recipe') private readonly recipeModel: Model<Recipe>,
  ) {}

  async getRecipes(category): Promise<RecipeWithAlphabet> {
    const recipes = category == null
      ? await this.recipeModel.find().exec()
      : await this.recipeModel.find({ category }).exec();

    const alphabet = await this.getRecipesAlphabet(recipes);

    return { recipes, alphabet };
  }

  async getRecipesAlphabet(recipes: Recipe[]): Promise<string[]> {
    const alphabet = [];
    recipes.forEach((recipe: Recipe) => {
      const letter = recipe.name[0].toLowerCase(); 
      if (!alphabet.includes(letter)) {
        alphabet.push(letter);
      }
    });
    return alphabet;
  }
}
