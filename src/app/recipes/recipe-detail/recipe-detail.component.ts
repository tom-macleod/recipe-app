import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../models/recipes.model'
import { ShoppingListService } from '../../shopping-list/services/shopping-list.service';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  toShoppingList() {
      this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

}
