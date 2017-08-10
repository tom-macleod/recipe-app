import { Component, OnInit } from '@angular/core';

import { Recipe } from '../models/recipes.model';
import { RecipeService} from '../services/recipe.service';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
