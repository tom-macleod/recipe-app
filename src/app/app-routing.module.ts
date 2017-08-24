import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeDetailPlaceholderComponent } from './recipes/recipe-detail-placeholder/recipe-detail-placeholder.component';
import { ShoppingList } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent,
        children: [
            {path: '', component: RecipeDetailPlaceholderComponent, pathMatch: 'full'},
            {path: 'new', component: RecipeEditComponent},
            {path: ':id', component: RecipeDetailComponent},
            {path: ':id/edit', component: RecipeEditComponent}
        ]},
    {path: 'shopping', component: ShoppingList}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
  
}