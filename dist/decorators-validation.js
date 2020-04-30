"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const registeredValidators = {};
function validationHelper(className, propName, ruleName) {
    let existingValidators = [];
    if (className in registeredValidators &&
        propName in registeredValidators[className]) {
        existingValidators = [...registeredValidators[className][propName]];
    }
    let newValidator = { [propName]: [...existingValidators, ruleName] };
    return Object.assign(Object.assign({}, registeredValidators[className]), newValidator);
}
function ValidateRequired(target, propName) {
    registeredValidators[target.constructor.name] = validationHelper(target.constructor.name, propName, "required");
}
function ValidatePositive(target, propName) {
    registeredValidators[target.constructor.name] = validationHelper(target.constructor.name, propName, "positive");
}
function validate(obj) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig)
        return true;
    let isValid = true;
    for (const prop in objValidatorConfig) {
        if (objValidatorConfig.hasOwnProperty(prop)) {
            const element = objValidatorConfig[prop];
            for (const validator of element) {
                switch (validator) {
                    case "required":
                        isValid = isValid && !!obj[prop];
                        break;
                    case "positive":
                        isValid = isValid && obj[prop] > 0;
                        break;
                }
            }
        }
    }
    return isValid;
}
class Course {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
__decorate([
    ValidateRequired
], Course.prototype, "title", void 0);
__decorate([
    ValidateRequired,
    ValidatePositive
], Course.prototype, "price", void 0);
console.log("--------------Decorators: Validation--------------");
const courseForm = document.querySelector("form");
courseForm.addEventListener("submit", function handleSubmit(event) {
    event.preventDefault();
    const titleEl = document.getElementById("course-title");
    const priceEl = document.getElementById("course-price");
    const title = titleEl.value;
    const price = Number(priceEl.value);
    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        alert("Invalid Input, please try again.");
        console.log(registeredValidators);
    }
    else {
        console.log(createdCourse);
    }
});
//# sourceMappingURL=decorators-validation.js.map