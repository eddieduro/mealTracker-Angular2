import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';


@Component({
  selector: 'new-meal',
  outputs: ['onNewMealSubmit'],
  template: `
  <div class="meal-form form col-md-6">
    <h3>New Meal: </h3>
    <div class="row">
      <label for='name'>Meal:</label>
      <label for="name">
        <input type="text" name="name" placeholder="Meal Name" #name>
        <span> Meal </span>
      </label>
    </div>
    <div class="row">
      <label for='details'>Details:</label>
      <label for="details">
        <input type="text" name="details" placeholder="Details..." #details>
        <span> Details </span>
      </label>
    </div>
    <div class="row">
      <label for='calories'>Calories:</label>
      <label for="calories">
        <input type="number" name="calories" placeholder="192" #calories>
        <span> Calories </span>
      </label>
    </div>
    <button (click)='addNewMeal(name, details, calories)' class='btn btn-lg'>Add Meal</button>
  </div>

  `
})

export class NewMealComponent {
  public onNewMealSubmit: EventEmitter<String[]>;
  constructor(){
    this.onNewMealSubmit = new EventEmitter();
  }
  addNewMeal(name: HTMLInputElement, details: HTMLInputElement, calories: HTMLInputElement ){
    this.onNewMealSubmit.emit([name.value, details.value, calories.value]);
    name.value = "";
    details.value = "";
    calories.value = "";
  }
}
