"use strict";
var add;
add = function (n1, n2) {
    return n1 + n2;
};
var Person = (function () {
    function Person(name) {
        this.name = name;
        this.age = 30;
        if (name) {
            this.name = name;
        }
    }
    Person.prototype.greet = function (phrase) {
        if (this.name) {
            console.log(phrase + ", I am " + this.name + ".");
        }
        else {
            console.log(phrase + ".");
        }
    };
    return Person;
}());
var user1;
var user2;
user1 = new Person();
user2 = new Person("Harry");
console.log("--------------Interfaces--------------");
console.log(add(2, 3));
user1.greet("Hello there");
user2.greet("Hey there");
//# sourceMappingURL=app.js.map