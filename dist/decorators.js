"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log("--------------Decorators: Before Log--------------");
function Logger(logString) {
    return function handleLogger(constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
let ThePerson = class ThePerson {
    constructor() {
        this.name = "Max";
        console.log("Creating the person object");
    }
};
ThePerson = __decorate([
    Logger("Logging The Person...")
], ThePerson);
const max = new ThePerson();
function WithTemplate(template, hookId) {
    return function handleWithTemplate(constructor) {
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("div").querySelector("h2").innerHTML = p.name;
        }
    };
}
const elem = "<div><h1>My Person Object</h1><h2></h2></div>";
let MyPerson = class MyPerson {
    constructor() {
        this.name = "Harry";
        console.log("Creating my person object");
    }
};
MyPerson = __decorate([
    WithTemplate(elem, "app")
], MyPerson);
const harry = new MyPerson();
console.log("--------------Decorators--------------");
console.log(max);
console.log(harry);
//# sourceMappingURL=decorators.js.map