console.log("--------------Decorators: Before Log--------------");

function WithLogger(logString: string) {
  console.log("Logger Factory");
  return function renderWithLogger(constructor: any) {
    console.log("Rendering with Logger");
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("Template Factory");
  return function renderWithTemplate(constructor: any) {
    console.log("Rendering with Template");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("div")!.querySelector("h2")!.innerHTML = p.name;
    }
  };
}

const elem = "<div><h1>My Person Object</h1><h2></h2></div>";

@WithLogger("Logging My Person...")
@WithTemplate(elem, "app")
class MyPerson {
  name = "Harry";

  constructor() {
    console.log("Creating my person object");
  }
}

const harry = new MyPerson();

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property Decorators");
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number;
  constructor(title: string, _price: number) {
    this.title = title;
    this._price = _price;
  }

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error(
        "Invalid Price, should be a positive number & more than zero",
      );
    }
  }

  readPriceWithTax(tax: number): number {
    return this._price * (1 + tax);
  }
}

console.log("--------------Decorators--------------");
console.log(harry);
