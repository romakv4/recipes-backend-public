import { Document } from 'mongoose';

export interface Recipe extends Document {
  readonly category: string;
  readonly name: string;
  readonly shortDescription: string;
  readonly ingredients: Array<string>;
  readonly fullDescription: Array<string>;
  readonly cookingTime: string;
}
