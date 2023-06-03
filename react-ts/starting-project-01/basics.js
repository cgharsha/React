// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Primitives
var age;
age = 12.1;
var userName;
userName = "Harsha";
var isInstructor;
isInstructor = true;
// More complex types
var hobbies;
hobbies = ["Sports", "cooking"];
var person;
person = {
    name: "Harsha",
    age: 2,
};
// person = {
//   isEmployee: true,
// };
var people;
// Type inference
var course = "React - Complete guide";
// course = 123;
// Union Types
var courses = "So many courses";
courses = 1233;
var newPerson;
var newPeople;
// Function and types
function addFunc(a, b) {
    return a + b;
}
function printValue(value) {
    console.log(value);
}
// Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
updatedArray[0].split('');
function insertAtBeginningNew(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var stringArray = insertAtBeginningNew(['a', 'b', 'c'], 'd');
