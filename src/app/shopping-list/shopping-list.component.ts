import { Component } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
    selector: 'shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})

export class ShoppingList {
    ingredients: Ingredient[] = [
        new Ingredient('Haggis', 1),
        new Ingredient('Neeps', 2),
        new Ingredient('Tatties', 5)
    ];
}