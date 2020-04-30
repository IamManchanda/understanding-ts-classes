"use strict";
const names = [];
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log("--------------Generic Functions--------------");
console.log(mergedObj);
console.log(mergedObj.name);
console.log(mergedObj.age);
console.log(mergedObj.hobbies);
//# sourceMappingURL=app.js.map