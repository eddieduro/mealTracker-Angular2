import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <div>
    <h2>{{ meal.name }}</h2>
  </div>
  `
})

export class MealComponent {
  public meal: Meal;
}
