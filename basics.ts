// ---> Primitives: number, string, boolean
let age: number;

age = 12.1; 

let userName: string = 'Debadrita'

let isStudent: boolean;

isStudent = true

// Shows error
// let hobbies: null;

// hobbies = 12

// ---> More complex types: arrays, objects
let hobbies: string[]

hobbies = ['Painting', 'Gaming']

// let person: any; // <--- Back to basic javascript

let person: {
    name: string,
    age: number
}

person = {
    name: 'Debadrita',
    age: 22
}

// Not allowed because boolean type of filed isn't storable
// person = {
//     isEmployee: true
// }

let people: {
    name: string,
    age: number
}[];

people = [{name: 'Debadrita', age: 22}] // <--- arrays of people

// Type inference

let course = 'React - The Complete Guide'

course = 12 // <--- Getting error

// Union types = type that allow more than one type
let courseDes: string | number = 'React - The Complete Guide';

courseDes = 12;

// Type alias = storing the type definition first then using it anywhere
type Person = {
    name: string,
    age: number
}

let personEx: Person

personEx = {
    name: 'Debadrita',
    age: 22
}

let peopleEx: Person[];

peopleEx = [{name: 'Debadrita', age: 22}]

// Function types, parameters
function addFn (a: number, b: number) {
    return a + b;
}

function printFn(value: any) {
    console.log(value)
}

// Generics
function insertAddBeginning<T>(array: T[], value: T) { //<---Generic type = look into the argument type, make sure it returns the same type - T for type
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAddBeginning(demoArray, -1); // [-1, 1, 2, 3]

updatedArray[0].split(''); // <---Will give runtime error but since typescript support has been lost by calling any type, typescript will not show error
// Will now give error because typescript detected updatedArray is full of number