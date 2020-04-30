"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
console.log("--------------Decorators: Before Log--------------");
function WithLogger(logString) {
    console.log("Logger Factory");
    return function renderWithLogger(constructor) {
        console.log("Rendering with Logger");
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    console.log("Template Factory");
    return function renderWithTemplate(originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                console.log("Rendering with Template");
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl
                        .querySelector("div")
                        .querySelector("h2").innerHTML = this.name;
                }
            }
        };
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
    WithLogger("Logging My Person..."),
    WithTemplate(elem, "app")
], MyPerson);
const harry = new MyPerson();
function Log(target, propertyName) {
    console.log("Property Decorator");
    console.log({
        target,
        propertyName,
    });
}
function Log2(target, name, descriptor) {
    console.log("Accessor Decorator");
    console.log({
        target,
        name,
        descriptor,
    });
}
function Log3(target, name, descriptor) {
    console.log("Method Decorator");
    console.log({
        target,
        name,
        descriptor,
    });
}
function Log4(target, name, position) {
    console.log("Parameter Decorator");
    console.log({
        target,
        name,
        position,
    });
}
class Product {
    constructor(title, _price) {
        this.title = title;
        this._price = _price;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Invalid Price, should be a positive number & more than zero");
        }
    }
    readPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "readPriceWithTax", null);
console.log("--------------Decorators--------------");
console.log(harry);
//# sourceMappingURL=decorators.js.map