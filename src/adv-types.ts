type Admin = {
  name: string;
  priveleges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  priveleges: ["create-server"],
  startDate: new Date(),
};

const e2: Employee = {
  name: "Harry",
  startDate: new Date(),
};

type Combineable = string | number;
type Numeric = number | boolean;

type Universal = Combineable & Numeric;

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(`Name: ${emp.name}`);
  if ("priveleges" in emp) {
    console.log(`Priveleges: ${emp.priveleges}`);
  }
  if ("startDate" in emp) {
    console.log(`Start Date: ${emp.startDate}`);
  }
}

class Car {
  drive() {
    console.log("Driving a car...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo for Rs.${amount}`);
  }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(10000);
  }
}

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed: number;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
    default:
      speed = 0;
  }

  console.log(`Moving at speed ${speed}`);
}

const userInputElement = document.getElementById("user-input");

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hello there!";
}

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "not a valid email address",
  username: "must start with a capital letter",
};

function sum(a: number, b: number): number;
function sum(a: string, b: number): string;
function sum(a: number, b: string): string;
function sum(a: string, b: string): string;
function sum(a: Combineable, b: Combineable) {
  if (typeof a === "string" || typeof b === "string") {
    return `${a.toString()} ${b.toString()}`;
  }
  return a + b;
}

const resultNum = sum(1, 4);
const resultStr = sum("Harry", "Manchanda");

const fetchedUserData = {
  id: "u1",
  name: "Harry",
  job: {
    title: "CEO",
    description: "My own Company",
  },
};

const userInput = "";
const storedData = userInput ?? "Default";

console.log("--------------Adv. Types--------------");
console.log(e1);
printEmployeeInformation(e1);
console.log(e2);
printEmployeeInformation(e2);
useVehicle(v1);
useVehicle(v2);
moveAnimal({ type: "bird", flyingSpeed: 10 });
console.log(errorBag);
console.log(resultNum);
console.log(resultStr);
console.log(fetchedUserData?.job?.title);
console.log(storedData);
