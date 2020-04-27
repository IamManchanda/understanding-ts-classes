interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "Max",
  age: 3,
  greet(phrase: string) {
    console.log(
      `${phrase}, I am ${this.name}, and I am ${this.age} years old.`,
    );
  },
};

console.log("--------------Interfaces--------------");
user1.greet("Hello there");
