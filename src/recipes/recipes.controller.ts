import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @Get()
  async getRecipes(@Res() res, @Query('category') category) {
    const recipes = await this.recipesService.getRecipes(category);
    return res.status(HttpStatus.OK).json(recipes);
  }
}
