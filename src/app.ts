const names: Array<string | number> = [];

/* 
const promise: Promise<string> = new Promise(function handlePromise(resolve) {
  setTimeout(function handleTimout() {
    resolve("This is done");
  }, 2000);
}); 
*/

function merge<A, B>(objA: A, objB: B) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });

console.log("--------------Generics--------------");
console.log(mergedObj);
console.log(mergedObj.name);
console.log(mergedObj.age);
console.log(mergedObj.hobbies);
