import { RecipeService } from './../services/recipe.service';
import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../models/recipes.model'
import { ShoppingListService } from '../../shopping-list/services/shopping-list.service';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private shoppingListService: ShoppingListService,
              private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    })
    
  }

  toShoppingList() {
      this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

}
