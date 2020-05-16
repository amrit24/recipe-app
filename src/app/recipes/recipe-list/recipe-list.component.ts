import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  @Output() recipeWasSelected = new EventEmitter<Recipe>(); 

  recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is simply a test', 'https://i.ytimg.com/vi/4ioJtDzQBT0/maxresdefault.jpg'),
    new Recipe('Another Test recipe', 'This is simply another test', 'https://img.grouponcdn.com/deal/jaSuZT7oxkai5XziRxWW/V3-4272x2823/v1/c700x420.jpg')

  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
