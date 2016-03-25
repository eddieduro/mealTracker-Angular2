System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var NewMealComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NewMealComponent = (function () {
                function NewMealComponent() {
                    this.onNewMealSubmit = new core_1.EventEmitter();
                }
                NewMealComponent.prototype.addNewMeal = function (name, details, calories) {
                    this.onNewMealSubmit.emit([name.value, details.value, calories.value]);
                    name.value = "";
                    details.value = "";
                    calories.value = "";
                };
                NewMealComponent = __decorate([
                    core_1.Component({
                        selector: 'new-meal',
                        outputs: ['onNewMealSubmit'],
                        template: "\n  <div class=\"meal-form form container\">\n    <h3>New Meal: </h3>\n    <div class=\"row\">\n      <label for='name'>Meal:</label>\n      <label for=\"name\">\n        <input type=\"text\" name=\"name\" placeholder=\"Meal Name\" #name>\n        <span> Meal </span>\n      </label>\n    </div>\n    <div class=\"row\">\n      <label for='details'>Details:</label>\n      <label for=\"details\">\n        <input type=\"text\" name=\"details\" placeholder=\"Details...\" #details>\n        <span> Details </span>\n      </label>\n    </div>\n    <div class=\"row\">\n      <label for='calories'>Calories:</label>\n      <label for=\"calories\">\n        <input type=\"number\" name=\"calories\" placeholder=\"192\" #calories>\n        <span> Calories </span>\n      </label>\n    </div>\n    <button (click)='addNewMeal(name, details, calories)' class='btn btn-lg'>Add Meal</button>\n  </div>\n\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NewMealComponent);
                return NewMealComponent;
            }());
            exports_1("NewMealComponent", NewMealComponent);
        }
    }
});
//# sourceMappingURL=new-meal.component.js.map