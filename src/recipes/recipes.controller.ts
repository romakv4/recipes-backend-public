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
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';

@Controller('recipes')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @Get()
  async getRecipes(@Res() res, @Query('category') category) {
    const recipes = await this.recipesService.getRecipes(category);
    return res.status(HttpStatus.OK).json(recipes);
  }
}
