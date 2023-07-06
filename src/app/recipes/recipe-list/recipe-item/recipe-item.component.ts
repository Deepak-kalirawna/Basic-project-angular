import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<void>();
  @Input() recipe: Recipe;

  constructor() {}
  ngOnInit(): void {}
  onSelected() {
    // this.recipeSelected.emit(this.recipe);
    this.recipeSelected.emit(); //we can leave the recive passing as in parent we will get which one is selected
  }
}
