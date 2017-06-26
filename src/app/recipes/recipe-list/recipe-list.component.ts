import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Haggis', 'Traditional Scottish Dish', 
      'https://upload.wikimedia.org/wikipedia/commons/6/6a/Haggis_Mo.jpg'),
    new Recipe('Haggis', 'Traditional Scottish Dish', 
      'https://upload.wikimedia.org/wikipedia/commons/6/6a/Haggis_Mo.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
