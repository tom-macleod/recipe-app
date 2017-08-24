import { Component, OnInit } from '@angular/core';

import { Recipe } from './models/recipes.model';
import { RecipeService} from './services/recipe.service';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}
