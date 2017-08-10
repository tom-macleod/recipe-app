import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Recipe } from '../models/recipes.model';
import { Ingredient } from '../../shared/ingredient.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

 private recipes: Recipe[] = [
    new Recipe('Haggis, Neeps and Tatties', 'Traditional Scottish Dish', 
      'https://upload.wikimedia.org/wikipedia/commons/6/6a/Haggis_Mo.jpg',
      [
        new Ingredient('Haggis', 1),
        new Ingredient('Neeps', 2),
        new Ingredient('Tatties', 6)
      ]),
    new Recipe('Bangers and Mash', 'Traditional British Dish', 
      'data:image/jpeg;base64,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',
      [
        new Ingredient('Bangers', 6),
        new Ingredient('Potatoes', 5),
        new Ingredient('Peas', 1)
      ]),
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

}
