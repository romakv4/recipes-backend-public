import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Recipe } from './interfaces/recipe.interface';

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
}
