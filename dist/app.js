"use strict";
var Person = (function () {
    function Person(name) {
        this.name = name;
        this.age = 30;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + ", I am " + this.name + ".");
    };
    return Person;
}());
var user1;
user1 = new Person("Harry Manchanda");
console.log("--------------Interfaces--------------");
user1.greet("Hello there");
//# sourceMappingURL=app.js.map