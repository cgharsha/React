// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12.1;

let userName: string;

userName = "Harsha";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "cooking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Harsha",
  age: 2,
};

// person = {
//   isEmployee: true,
// };

let people: {
  name: string;
  age: number;
}[];

// Type inference

let course = "React - Complete guide";

// course = 123;

// Union Types

let courses: string | number = "So many courses";

courses = 1233;

// Type Aliases

type PersonDef = {
  name: string;
  age: number;
};

let newPerson: PersonDef;

let newPeople: PersonDef[];

// Function and types

function addFunc(a: number, b: number) {
  return a + b;
}

function printValue(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

updatedArray[0].split('')

function insertAtBeginningNew<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const stringArray = insertAtBeginningNew(['a', 'b', 'c'], 'd')

let numbers: Array<number> = [1, 2, 3]
let newNumber: number[] = [1, 2, 3]

const stringNewArray = insertAtBeginningNew<string>(['a', 'b', 'c'], 'd');
