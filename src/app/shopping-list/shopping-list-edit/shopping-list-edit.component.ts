import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
    selector: 'shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})

export class ShoppingListEdit {
    @ViewChild('nameInput') nameInput: ElementRef;
    @ViewChild('amountInput') amountInput: ElementRef;
    @Output() newIngredient = new EventEmitter<Ingredient>();

    addIngredient() {
        const name: string = this.nameInput.nativeElement.value;
        let amount: number = this.amountInput.nativeElement.value;
        const ingredient = new Ingredient(name, amount);
        this.newIngredient.emit(ingredient);
    }

}