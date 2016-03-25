import { Component } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';



@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="container-fluid">
  	<h1>MealTrkr</h1>
    <meal-list
    [mealList]="meals"
    (onMealSelect)="mealWasSelected($event)">
    </meal-list>
  </div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal(["Taco", "I ate 10", 1023], 0),
      new Meal(["Burrito", "California BURRRRITO",  40], 1),
      new Meal(["Korean BBQ", "I only had 5 plates", 1501], 2)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log(clickedMeal);
  }
}
