const names: Array<string | number> = [];

/* 
const promise: Promise<string> = new Promise(function handlePromise(resolve) {
  setTimeout(function handleTimout() {
    resolve("This is done");
  }, 2000);
}); 
*/

interface IntA {
  name: string;
  hobbies: string[];
}

interface IntB {
  age: number;
}

function merge<A extends IntA, B extends IntB>(objA: A, objB: B) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });

console.log("--------------Generic Functions--------------");
console.log(mergedObj);
console.log(mergedObj.name);
console.log(mergedObj.age);
console.log(mergedObj.hobbies);
