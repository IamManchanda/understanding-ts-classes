"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(name) {
        this.name = name;
        this.age = 30;
        if (name) {
            this.name = name;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(`${phrase}, I am ${this.name}.`);
        }
        else {
            console.log(`${phrase}.`);
        }
    }
}
let user1;
let user2;
user1 = new Person();
user2 = new Person("Harry");
console.log("--------------Interfaces--------------");
console.log(add(2, 3));
user1.greet("Hello there");
user2.greet("Hey there");
//# sourceMappingURL=interfaces.js.map