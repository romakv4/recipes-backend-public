import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Recipe } from './interfaces/recipe.interface';
import { CreateRecipeDTO } from './dto/create-recipe.dto';

@Injectable()
export class RecipesService {
  constructor(
    @InjectModel('Recipe') private readonly recipeModel: Model<Recipe>,
  ) {}

  async getRecipes(category): Promise<Recipe[]> {
    return category == null
      ? await this.recipeModel.find().exec()
      : await this.recipeModel.find({ category }).exec();
  }

  async getRecipe(recipeID): Promise<Recipe> {
    const recipe = await this.recipeModel.findById(recipeID).exec();
    return recipe;
  }

  async addRecipe(createRecipeDTO: CreateRecipeDTO): Promise<Recipe> {
    const newRecipe = await this.recipeModel(createRecipeDTO);
    return newRecipe.save();
  }
}
