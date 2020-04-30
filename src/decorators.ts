console.log("--------------Decorators: Before Log--------------");

function Logger(logString: string) {
  return function handleLogger(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("Logging The Person...")
class ThePerson {
  name = "Max";

  constructor() {
    console.log("Creating the person object");
  }
}

const pers = new ThePerson();

console.log("--------------Decorators--------------");
console.log(pers);
