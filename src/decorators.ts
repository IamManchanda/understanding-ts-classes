console.log("--------------Decorators: Before Log--------------");

function Logger(logString: string) {
  return function handleLogger(constructor: any) {
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

const max = new ThePerson();

function WithTemplate(template: string, hookId: string) {
  return function handleWithTemplate(constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("div")!.querySelector("h2")!.innerHTML = p.name;
    }
  };
}

const elem = "<div><h1>My Person Object</h1><h2></h2></div>";
@WithTemplate(elem, "app")
class MyPerson {
  name = "Harry";

  constructor() {
    console.log("Creating my person object");
  }
}

const harry = new MyPerson();

console.log("--------------Decorators--------------");
console.log(max);
console.log(harry);
