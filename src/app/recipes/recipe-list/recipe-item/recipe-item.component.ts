import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../models/recipes.model';
import { RecipeService } from '../../services/recipe.service';
import { Router } from "@angular/router";

@Component({
  selector: 'recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(private recipeService: RecipeService,
              private router: Router) { }

  ngOnInit() {
  }

}
