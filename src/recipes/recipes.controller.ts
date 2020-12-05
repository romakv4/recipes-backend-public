import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Param,
  NotFoundException,
  Post,
  Body,
  Query,
  Put,
  Delete,
} from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { CreateRecipeDTO } from './dto/create-recipe.dto';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';

@Controller('recipes')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @Get()
  async getRecipes(@Res() res, @Query('category') category) {
    const recipes = await this.recipesService.getRecipes(category);
    return res.status(HttpStatus.OK).json(recipes);
  }

  @Get('/:recipeID')
  async getRecipe(
    @Res() res,
    @Param('recipeID', new ValidateObjectId()) recipeID,
  ) {
    const recipe = await this.recipesService.getRecipe(recipeID);
    if (!recipe) throw new NotFoundException('Recipe does not exist!');
    return res.status(HttpStatus.OK).json(recipe);
  }

  @Post('/publish')
  async addRecipe(@Res() res, @Body() createRecipeDTO: CreateRecipeDTO) {
    const newRecipe = await this.recipesService.addRecipe(createRecipeDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Recipe has been published successfully!',
      recipe: newRecipe,
    });
  }
}
