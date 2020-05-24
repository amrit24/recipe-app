import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('Test recipe', 'This is simply a test', 'https://i.ytimg.com/vi/4ioJtDzQBT0/maxresdefault.jpg'),
        new Recipe('Another Test recipe', 'This is simply another test', 'https://img.grouponcdn.com/deal/jaSuZT7oxkai5XziRxWW/V3-4272x2823/v1/c700x420.jpg')
    ];

    getRecipes(){
       return this.recipes.slice();       
    }
}