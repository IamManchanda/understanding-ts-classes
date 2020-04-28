// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number): number => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  age = 30;

  constructor(public name?: string) {
    if (name) {
      this.name = name;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(`${phrase}, I am ${this.name}.`);
    } else {
      console.log(`${phrase}.`);
    }
  }
}

let user1: Greetable;
let user2: Greetable;
user1 = new Person();
user2 = new Person("Harry");

console.log("--------------Interfaces--------------");
console.log(add(2, 3));
user1.greet("Hello there");
user2.greet("Hey there");
