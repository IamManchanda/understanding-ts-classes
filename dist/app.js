"use strict";
var e1 = {
    name: "Max",
    priveleges: ["create-server"],
    startDate: new Date(),
};
var e2 = {
    name: "Harry",
    startDate: new Date(),
};
function addAandB(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    if ("priveleges" in emp) {
        console.log("Priveleges: " + emp.priveleges);
    }
    if ("startDate" in emp) {
        console.log("Start Date: " + emp.startDate);
    }
}
var Car = (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving a car...");
    };
    return Car;
}());
var Truck = (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a truck...");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading cargo for Rs." + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(10000);
    }
}
function moveAnimal(animal) {
    var speed;
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
    console.log("Moving at speed " + speed);
}
console.log("--------------Adv. Types--------------");
console.log(e1);
printEmployeeInformation(e1);
console.log(e2);
printEmployeeInformation(e2);
useVehicle(v1);
useVehicle(v2);
moveAnimal({ type: "bird", flyingSpeed: 10 });
//# sourceMappingURL=app.js.map