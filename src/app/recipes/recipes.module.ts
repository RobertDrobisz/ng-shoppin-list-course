import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [RecipeItemComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeEditComponent,
        RecipeStartComponent,
        RecipesComponent
    ],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        RecipesRoutingModule
    ],
    exports: [RecipesComponent]
})
export class RecipesModule { }