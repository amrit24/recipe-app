import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { ThrowStmt } from '@angular/compiler';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

    recipes: Recipe[] = [
        new Recipe('Samosa recipe',
        'This is simply a test',
        'https://i.ytimg.com/vi/4ioJtDzQBT0/maxresdefault.jpg',
         [new Ingredient("Potato", 2), new Ingredient("Wheat", 1), new Ingredient("oil",1)]
        ),
        new Recipe('Pizza recipe',
        'This is simply another test',
        'https://img.grouponcdn.com/deal/jaSuZT7oxkai5XziRxWW/V3-4272x2823/v1/c700x420.jpg',
        [new Ingredient("Pizza bread", 2), new Ingredient("Pizza sauce", 1), new Ingredient("cheese",1)]
        )
    ];

    constructor(private slService: ShoppingListService){}

    getRecipes(){
       return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients : Ingredient[]){
       this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe:Recipe){
      this.recipes[index] = newRecipe;
      this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
      this.recipes.splice(index, 1);
      this.recipesChanged.next(this.recipes.slice());
    }
}
