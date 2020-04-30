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

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let description;
  if (element.length > 0) {
    if (element.length === 1) {
      description = "Got 1 element";
    } else {
      description = `Got ${element.length} elements`;
    }
  } else {
    description = "Got no elements";
  }
  return [element, description];
}

function extractAndConvert<O extends object, K extends keyof O>(
  obj: O,
  key: K,
) {
  return `Value ${obj[key]}`;
}

const eacObj = {
  name: "Harry",
  age: 30,
};
const eac = extractAndConvert(eacObj, "name");

class DataStorage<D extends string | number | boolean> {
  private data: D[] = [];

  addItem(item: D) {
    this.data.push(item);
  }

  removeItem(item: D) {
    if (this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1);
  }

  readItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("First Item");
textStorage.addItem("Second Item");
textStorage.removeItem("First Item");

const numStorage = new DataStorage<number>();
numStorage.addItem(1);
numStorage.addItem(2);
numStorage.removeItem(1);

interface CourseGoal {
  title: string;
  description: string;
  completeUntill: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date,
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntill = date;
  return courseGoal as CourseGoal;
}

const peopleNames: Readonly<string[]> = ["Max", "Anna"];
/* peopleNames.push("Manu"); // Mutation doesn't work */

console.log("--------------Generics--------------");
console.log(mergedObj);
console.log(mergedObj.name);
console.log(mergedObj.age);
console.log(mergedObj.hobbies);
console.log(countAndDescribe(""));
console.log(countAndDescribe("Hello there!"));
console.log(countAndDescribe([]));
console.log(countAndDescribe(["Sports"]));
console.log(eac);
console.log(textStorage.readItems());
console.log(numStorage.readItems());
console.log(
  createCourseGoal("Revise TypeScript", "Get better in TypeScript", new Date()),
);
