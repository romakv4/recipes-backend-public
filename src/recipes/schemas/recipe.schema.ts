import * as mongoose from 'mongoose';

export const RecipeSchema = new mongoose.Schema({
  category: String,
  name: String,
  shortDescription: String,
  ingredients: [String],
  fullDescription: [String],
  cookingTime: String,
});
