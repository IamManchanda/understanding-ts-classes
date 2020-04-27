"use strict";
var user1;
user1 = {
    name: "Max",
    age: 3,
    greet: function (phrase) {
        console.log(phrase + ", I am " + this.name + ", and I am " + this.age + " years old.");
    },
};
console.log("--------------Interfaces--------------");
user1.greet("Hello there");
//# sourceMappingURL=app.js.map