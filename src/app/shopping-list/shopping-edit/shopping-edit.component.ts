import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }

  //Method 1
  // @Output() addIngredient = new EventEmitter<Ingredient>();
  // @ViewChild('nameInput', { static: true }) nameInput: ElementRef;
  // @ViewChild('amountInput', { static: true }) amountInput: ElementRef;
  // onAddIngred() {
  //   this.addIngredient.emit({
  //     name: this.nameInput.nativeElement.value,
  //     amount: this.amountInput.nativeElement.value,
  //   });
  // }
}
