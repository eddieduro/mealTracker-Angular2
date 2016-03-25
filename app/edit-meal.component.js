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
    var EditMealComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EditMealComponent = (function () {
                function EditMealComponent() {
                }
                EditMealComponent = __decorate([
                    core_1.Component({
                        selector: 'edit-meal',
                        inputs: ['meal'],
                        template: "\n    <div class=\"meal-form form container\">\n      <h3>Edit {{meal.name}}: </h3>\n      <div class=\"row\">\n        <label for='name'>Meal:</label>\n        <label for=\"name\">\n          <input type=\"text\" name=\"name\" [(ngModel)]=\"meal.name\" placeholder=\"meal\">\n          <span> {{ meal.name }} </span>\n        </label>\n      </div>\n      <div class=\"row\">\n        <label for='details'>Details:</label>\n        <label for=\"details\">\n          <input type=\"text\" name=\"details\" [(ngModel)]=\"meal.details\" placeholder=\"{{ meal.details }}...\">\n          <span> {{ meal.details }} </span>\n        </label>\n      </div>\n      <div class=\"row\">\n        <label for='calories'>Calories:</label>\n        <label for=\"calories\">\n          <input type=\"number\" name=\"calories\" [(ngModel)]=\"meal.calories\" placeholder=\"{{ meal.calories }}\">\n          <span> {{ meal.calories }} </span>\n        </label>\n      </div>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], EditMealComponent);
                return EditMealComponent;
            }());
            exports_1("EditMealComponent", EditMealComponent);
        }
    }
});
//# sourceMappingURL=edit-meal.component.js.map