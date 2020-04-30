"use strict";
const names = [];
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
function countAndDescribe(element) {
    let description;
    if (element.length > 0) {
        if (element.length === 1) {
            description = "Got 1 element";
        }
        else {
            description = `Got ${element.length} elements`;
        }
    }
    else {
        description = "Got no elements";
    }
    return [element, description];
}
console.log("--------------Generic Functions--------------");
console.log(mergedObj);
console.log(mergedObj.name);
console.log(mergedObj.age);
console.log(mergedObj.hobbies);
console.log(countAndDescribe(""));
console.log(countAndDescribe("Hello there!"));
console.log(countAndDescribe([]));
console.log(countAndDescribe(["Sports"]));
//# sourceMappingURL=app.js.map