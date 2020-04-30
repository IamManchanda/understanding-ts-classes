"use strict";
const e1 = {
    name: "Max",
    priveleges: ["create-server"],
    startDate: new Date(),
};
const e2 = {
    name: "Harry",
    startDate: new Date(),
};
function sum(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const resultNum = sum(1, 4);
const resultStr = sum("Harry", "Manchanda");
function printEmployeeInformation(emp) {
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
    loadCargo(amount) {
        console.log(`Loading cargo for Rs.${amount}`);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(10000);
    }
}
function moveAnimal(animal) {
    let speed;
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
    userInputElement.value = "Hello there!";
}
const errorBag = {
    email: "not a valid email address",
    username: "must start with a capital letter",
};
console.log("--------------Adv. Types--------------");
console.log(resultNum);
console.log(resultStr);
console.log(e1);
printEmployeeInformation(e1);
console.log(e2);
printEmployeeInformation(e2);
useVehicle(v1);
useVehicle(v2);
moveAnimal({ type: "bird", flyingSpeed: 10 });
console.log(errorBag);
//# sourceMappingURL=app.js.map