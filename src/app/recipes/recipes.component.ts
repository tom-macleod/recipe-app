import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipes.model'

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  public selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  handleRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

}
