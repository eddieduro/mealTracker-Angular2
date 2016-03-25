import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import * as _ from 'lodash';

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
