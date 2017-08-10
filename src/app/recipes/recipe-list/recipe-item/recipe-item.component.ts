import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../models/recipes.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelect() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
