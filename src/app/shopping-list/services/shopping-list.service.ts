import { Injectable } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model'
import { Subject } from "rxjs/Subject";

@Injectable()
export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
        new Ingredient('Haggis', 1),
        new Ingredient('Neeps', 2),
        new Ingredient('Tatties', 6)
    ];

  constructor() { }

  addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

  addIngredients(ingredients: Ingredient[]) {
      this.ingredients.push(...ingredients);
      this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredients() {
      return this.ingredients.slice();
  }

  getIngredient(index: number) {
      return this.ingredients[index];
  }

  updateIngredient(index: number, ingredient: Ingredient) {
      this.ingredients[index] = ingredient;
      this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
      this.ingredients.splice(index, 1);
      this.ingredientsChanged.next(this.ingredients.slice());
  }

}
