// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number): number => {
  return n1 + n2;
};

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
console.log(add(2, 3));
user1.greet("Hello there");
