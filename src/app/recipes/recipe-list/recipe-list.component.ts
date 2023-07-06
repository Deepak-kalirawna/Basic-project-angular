import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is simply a test',
      'https://assets.bonappetit.com/photos/64349ba03fd52da4745a35f4/1:1/w_1920,c_limit/04102023-ratatouille-lede.jpg'
    ),
    new Recipe(
      'Another test recipe',
      'Another  test for recipe rendering!',
      'https://assets.bonappetit.com/photos/64349ba03fd52da4745a35f4/1:1/w_1920,c_limit/04102023-ratatouille-lede.jpg'
    ),
  ];
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
