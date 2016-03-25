import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { NewMealComponent } from './new-meal.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealComponent, NewMealComponent],
  template:`
  <div>
    <meal-display *ngFor="#currentMeal of mealList"
    (click)="mealClicked(currentMeal)"
    [class.selected]='currentMeal === selectedMeal'
    [meal]='currentMeal'>
    </meal-display>
    <div *ngIf='selectedMeal'>
      <h3>Food: {{ selectedMeal.name }}</h3>
      <h3>Details: {{ selectedMeal.details }}</h3>
      <h3>Calories: {{ selectedMeal.calories }}</h3>
    </div>
    <div>
    <new-meal (onNewMealSubmit)="createMeal($event)"></new-meal>
    </div>
  </div>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public selectedMeal: Meal;
  public onMealSelect: EventEmitter<Meal>;
  constructor(){
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal([name, details, calories]):void{
    if(!name) {
      alert("please enter in meal!");
    }

    var newMeal: Meal = new Meal([name, details, calories], this.mealList.length);
    this.mealList.push(newMeal);
  }
}
