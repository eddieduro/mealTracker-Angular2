System.register(['angular2/core', './meal.component', './meal.model', './new-meal.component', './edit-meal.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, meal_component_1, meal_model_1, new_meal_component_1, edit_meal_component_1;
    var MealListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (meal_component_1_1) {
                meal_component_1 = meal_component_1_1;
            },
            function (meal_model_1_1) {
                meal_model_1 = meal_model_1_1;
            },
            function (new_meal_component_1_1) {
                new_meal_component_1 = new_meal_component_1_1;
            },
            function (edit_meal_component_1_1) {
                edit_meal_component_1 = edit_meal_component_1_1;
            }],
        execute: function() {
            MealListComponent = (function () {
                function MealListComponent() {
                    this.newMealFormVisible = false;
                    this.active = false;
                    this.onMealSelect = new core_1.EventEmitter();
                }
                MealListComponent.prototype.mealClicked = function (clickedMeal) {
                    this.active = true;
                    this.selectedMeal = clickedMeal;
                    this.onMealSelect.emit(clickedMeal);
                };
                MealListComponent.prototype.createMeal = function (_a) {
                    var name = _a[0], details = _a[1], calories = _a[2];
                    if (!name) {
                        alert("please enter in meal!");
                    }
                    var newMeal = new meal_model_1.Meal([name, details, calories], this.mealList.length);
                    this.mealList.push(newMeal);
                };
                MealListComponent.prototype.displayNewMealFormButton = function () {
                    this.newMealFormVisible = true;
                };
                MealListComponent.prototype.hideNewMealFormButton = function () {
                    this.newMealFormVisible = false;
                };
                MealListComponent.prototype.noActiveMeals = function () {
                    console.log('yo');
                    this.active = false;
                };
                MealListComponent = __decorate([
                    core_1.Component({
                        selector: 'meal-list',
                        inputs: ['mealList'],
                        directives: [meal_component_1.MealComponent, new_meal_component_1.NewMealComponent, edit_meal_component_1.EditMealComponent],
                        template: "\n  <div class='contain'>\n    <div class='row'>\n      <meal-display *ngFor=\"#currentMeal of mealList; #i = index\"\n      (click)=\"mealClicked(currentMeal)\"\n      [class.selected]='currentMeal === selectedMeal'\n      [meal]='currentMeal' class='col-md-8 meal'>\n      </meal-display>\n      <div *ngIf='selectedMeal' class='col-md-4 right-col'>\n        <h3>Food: {{ selectedMeal.name }}</h3>\n        <h3>Details: {{ selectedMeal.details }}</h3>\n        <h3>Calories: {{ selectedMeal.calories }}</h3>\n      </div>\n    </div>\n    <div class='row'>\n      <div *ngIf='newMealFormVisible' class='col-md-6'>\n      <button (click)='hideNewMealFormButton()' class='btn btn-reveal'>Hide Form</button>\n        <new-meal (onNewMealSubmit)=\"createMeal($event)\"></new-meal>\n      </div>\n      <div *ngIf='!newMealFormVisible' class='col-md-6'>\n        <button (click)='displayNewMealFormButton()' class='btn btn-reveal'>Show Form</button>\n      </div>\n      <div *ngIf='selectedMeal' class='col-md-6'>\n        <edit-meal [meal]='selectedMeal'></edit-meal>\n      </div>\n    </div>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MealListComponent);
                return MealListComponent;
            }());
            exports_1("MealListComponent", MealListComponent);
        }
    }
});
//# sourceMappingURL=meal-list.component.js.map