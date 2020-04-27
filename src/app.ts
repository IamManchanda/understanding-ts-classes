interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  age = 30;

  constructor(public name: string) {}

  greet(phrase: string) {
    console.log(`${phrase}, I am ${this.name}.`);
  }
}

let user1: Greetable;
user1 = new Person("Harry Manchanda");

console.log("--------------Interfaces--------------");
user1.greet("Hello there");
