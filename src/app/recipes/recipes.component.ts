import { Component, OnInit } from '@angular/core';

import { RecipeService} from './services/recipe.service';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: []
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}
