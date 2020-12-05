import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipeSchema } from './schemas/recipe.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Recipe', schema: RecipeSchema }]),
  ],
  providers: [RecipesService],
  controllers: [RecipesController],
})
export class RecipesModule {}
