import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// High level App Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// Shopping Components
import { ShoppingList } from './shopping-list/shopping-list.component';
import { ShoppingListEdit } from './shopping-list/shopping-list-edit/shopping-list-edit.component';

// Recipe Components
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';

// Directives
import { DropdownDirective } from './shared/dropdown.directive';

// Services
import { ShoppingListService } from './shopping-list/services/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingList,
    ShoppingListEdit,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
