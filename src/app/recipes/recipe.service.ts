import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { ThrowStmt } from '@angular/compiler';

@Injectable()
export class RecipeService {

    recipes: Recipe[] = [
        new Recipe('Test recipe', 
        'This is simply a test', 
        'https://i.ytimg.com/vi/4ioJtDzQBT0/maxresdefault.jpg',
         [new Ingredient("Potato", 2), new Ingredient("Wheat", 1), new Ingredient("oil",1)]
        ),
        new Recipe('Another Test recipe', 
        'This is simply another test', 
        'https://img.grouponcdn.com/deal/jaSuZT7oxkai5XziRxWW/V3-4272x2823/v1/c700x420.jpg',
        [new Ingredient("Potato", 2), new Ingredient("Wheat", 1), new Ingredient("oil",1)]
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
}