import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { NewMealComponent } from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  pipes: [CaloriesPipe],
  directives: [MealComponent, NewMealComponent, EditMealComponent],
  template:`
  <div class='contain'>
    <div class='row'>
      <select (change)="caloriesChange($event.target.value)" class="filter">
        <option value="">Show All</option>
        <option value="high">High Calorie Foods (over 300)</option>
        <option value="low">Low Calorie Foods (under 300)</option>
      </select>
      <br>
      <meal-display *ngFor="#currentMeal of mealList | calories:filterCalories"
      (click)="mealClicked(currentMeal)"
      [class.selected]='currentMeal === selectedMeal'
      [meal]='currentMeal' class='col-md-8 meal'>
      </meal-display>
      <div *ngIf='selectedMeal' class='col-md-4 right-col'>
        <h3>Food: {{ selectedMeal.name }}</h3>
        <h3>Details: {{ selectedMeal.details }}</h3>
        <h3>Calories: {{ selectedMeal.calories }}</h3>
      </div>
    </div>
    <div class='row'>
      <div *ngIf='newMealFormVisible' class='col-md-6'>
      <button (click)='hideNewMealFormButton()' class='btn btn-reveal'>Hide Form</button>
        <new-meal (onNewMealSubmit)="createMeal($event)"></new-meal>
      </div>
      <div *ngIf='!newMealFormVisible' class='col-md-6'>
        <button (click)='displayNewMealFormButton()' class='btn btn-reveal'>Show Form</button>
      </div>
      <div *ngIf='selectedMeal' class='col-md-6'>
        <edit-meal [meal]='selectedMeal'></edit-meal>
      </div>
    </div>
  </div>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public selectedMeal: Meal;
  public onMealSelect: EventEmitter<Meal>;
  public newMealFormVisible: boolean = false;
  public active: boolean = false;
  public filterCalories: string = "all";
  constructor(){
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.active = true;
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
  displayNewMealFormButton(){
    this.newMealFormVisible = true;
  }
  hideNewMealFormButton(){
    this.newMealFormVisible = false;
  }
  noActiveMeals(){
    this.active = false;
  }
  caloriesChange(filterOption) {
    this.filterCalories = filterOption;
  }
}
