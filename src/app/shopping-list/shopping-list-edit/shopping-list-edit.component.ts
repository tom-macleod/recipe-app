import { Component, ViewChild, ElementRef } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
    selector: 'shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})

export class ShoppingListEdit {
    @ViewChild('nameInput') nameInput: ElementRef;
    @ViewChild('amountInput') amountInput: ElementRef;

    constructor(private shoppingListService: ShoppingListService) {}

    addIngredient() {
        const name: string = this.nameInput.nativeElement.value;
        let amount: number = this.amountInput.nativeElement.value;
        const ingredient = new Ingredient(name, amount);
        this.shoppingListService.addIngredient(ingredient);
    }

}