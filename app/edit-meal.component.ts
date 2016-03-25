import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector:'edit-meal',
  inputs: ['meal'],
  template:`
    <div class="meal-form form container">
      <h3>Edit {{meal.name}}: </h3>
      <div class="row">
        <label for='name'>Meal:</label>
        <label for="name">
          <input type="text" name="name" [(ngModel)]="meal.name" placeholder="meal">
          <span> {{ meal.name }} </span>
        </label>
      </div>
      <div class="row">
        <label for='details'>Details:</label>
        <label for="details">
          <input type="text" name="details" [(ngModel)]="meal.details" placeholder="{{ meal.details }}...">
          <span> {{ meal.details }} </span>
        </label>
      </div>
      <div class="row">
        <label for='calories'>Calories:</label>
        <label for="calories">
          <input type="number" name="calories" [(ngModel)]="meal.calories" placeholder="{{ meal.calories }}">
          <span> {{ meal.calories }} </span>
        </label>
      </div>
    </div>
  `
})

export class EditMealComponent {
  public meal: Meal;
}
