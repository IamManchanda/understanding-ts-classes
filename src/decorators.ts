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
  return function renderWithTemplate<
    T extends { new (...args: any[]): { name: string } }
  >(originalConstructor: T) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Rendering with Template");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl
            .querySelector("div")!
            .querySelector("h2")!.innerHTML = this.name;
        }
      }
    };
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
  console.log("Property Decorator");
  console.log({
    target,
    propertyName,
  });
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor Decorator");
  console.log({
    target,
    name,
    descriptor,
  });
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor,
) {
  console.log("Method Decorator");
  console.log({
    target,
    name,
    descriptor,
  });
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter Decorator");
  console.log({
    target,
    name,
    position,
  });
}

class Product {
  @Log
  title: string;
  private _price: number;
  constructor(title: string, _price: number) {
    this.title = title;
    this._price = _price;
  }

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error(
        "Invalid Price, should be a positive number & more than zero",
      );
    }
  }

  @Log3
  readPriceWithTax(@Log4 tax: number): number {
    return this._price * (1 + tax);
  }
}

console.log("--------------Decorators--------------");
console.log(harry);
