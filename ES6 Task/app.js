// <h1>Global Scope</h1>

// ● Declare a variable using var outside of any function or block.
var myGlobalVariable = "Hellow World";
console.log(myGlobalVariable); // Output = "Hellow world"

// ● Declare a variable using let outside of any function or block.
let myGlobalVariable = "hellow World";
console.log(myGlobalVariable); // Output = "Hellow world"

// ● Declare a variable using const outside of any function or block.
const myGlobalVariable = "Hellow World";
console.log(myGlobalVariable); // Output = "Hellow World"

// ● Log all three variables to the console.
var myVar = "I am a var Variable"
var myLet = "I am a let Variable"
var myConst = "I am a const Variable"
console.log(myVar);
console.log(myLet);
console.log(myConst);


// ● Are they accessible globally?
// VAR
var myVar = "I am global var";
console.log(myVar); // Accessible
console.log(window.myVar); // Accessible (Output: "I am global var")

// LET
let myLet = "I am global let";
console.log(myLet); // Accessible
console.log(window.myLet); // undefined

// CONST
const myConst = "I am global const";
console.log(myConst); // Accessible
console.log(window.myConst); // undefined



//<h1>Function Scope</h1>


// ● Create a function and declare variables using var, let, and const inside the function.
function testFunction() {
    var varVariable = "I am a var variable inside the function";
    let letVariable = "I am a let variable inside the function";
    const constVariable = "I am a const variable inside the function";
}
// ● Log the variables to the console outside the function.
console.log(varVariable);
console.log(letVariable);
console.log(constVariable);


/* <h1>Block Scope</h1> */


// ● Use an if statement and declare variables using var, let, and const inside the block.
if (true) {
    var varVariable = "I am a var variable inside the block";
    let letVariable = "I am a let variable inside the block";
    const constVariable = "I am a const variable inside the block";
}
// ● Try logging the variables to the console outside the block.
console.log(varVariable);
console.log(letVariable);
console.log(constVariable);


// <h1>Hoisting with var:</h1>


// ● Write code where you log a var variable before it is declared.
console.log(myVar); // before declaration
var myVar = "I am a var variable";
console.log(myVar); //  after declaration

// OUTPUT
undefined
"I am a var variable"


// Hoisting with let and const:


// ● Write code where you log a let variable before it is declared.
console.log(myLet); // Logging before declaration
let myLet = "I am a let variable";
console.log(myLet); // Logging after declaration

// ● Write code where you log a const variable before it is declared.
console.log(myConst); // Logging before declaration
const myConst = "I am a const variable";
console.log(myConst); // Logging after declaration

// ● What kind of error do you get?
ReferenceError: Cannot access 'myLet'(or 'myConst') before initialization

//Re-declaration:
// ● Declaring the same variable name twice using var
var myVar = "First declaration";
var myVar = "Second declaration"; // Redeclaration
console.log(myVar);

//OUTPUT
"Second declaration"

// ● Declaring the same variable name twice using let
let myLet = "First declaration";
let myLet = "Second declaration"; // Redeclaration
console.log(myLet);

//OUTPUT
SyntaxError: Identifier 'myLet' has already been declared

// ● Declaring the same variable name twice using const
const myConst = "First declaration";
const myConst = "Second declaration"; // Redeclaration
console.log(myConst);

//OUTPUT
SyntaxError: Identifier 'myConst' has already been declared


//Re-assignment:

// ● Declare a variable using var and assign it a value. Then reassign it a new value.
var myVar = "Initial value"; // Declare and assign
console.log(myVar); // Output: Initial value

myVar = "New value"; // Reassign
console.log(myVar); // Output: New value



// ● Declare a variable using let and assign it a value. Then reassign it a new value.
let myLet = "Initial value";
console.log(myLet); // Output: "Initial value"

myLet = "New value";
console.log(myLet); // Output: "New value"


// ● Declare a variable using const and assign it a value. Then reassign it a new value.
const myConst = "Initial value";
console.log(myConst); // Output: "Initial value"

myConst = "New value";
console.log(myConst); // Output: TypeError: Assignment to constant variable.


//Temporal Dead Zone (TDZ):


// ● Declare a let variable inside a block but try to log it before the declaration.
{
    console.log(myLet);
    let myLet = "I am a let variable";
}
//OUTPUT
// ReferenceError: Cannot access 'myLet' before initialization


// ● Declare a const variable inside a block but try to log it before the declaration.
{
    console.log(myConst);
    const myConst = "I am a const variable";
}
//OUTPUT
//ReferenceError: Cannot access 'myConst' before initialization


//When to use var, let, and const:


// ● Write a piece of code to demonstrate a good use case for var.
function legacyFunction() {
    var counter = 0; // Function-scoped variable
    for (var i = 0; i < 5; i++) {
        counter++;
    }
    console.log("Final counter value:", counter); // Accessible here
    console.log("Final i value:", i); // Accessible here because var is function-scoped
}

legacyFunction();

// ● Write a piece of code to demonstrate a good use case for let.
function calculateSquares() {
    for (let i = 1; i <= 5; i++) {
        let square = i * i; // Block-scoped variable
        console.log(`Square of ${i}:`, square);
    }
    // console.log(i); // Would throw a ReferenceError because `i` is block-scoped
}

calculateSquares();

// ● Write a piece of code to demonstrate a good use case for const.
function displayConfig() {
    const API_URL = "https://api.example.com"; // Immutable constant
    const MAX_RETRIES = 3; // Another constant value

    console.log("API URL:", API_URL);
    console.log("Max Retries:", MAX_RETRIES);

    // API_URL = "https://api.newurl.com"; // This would throw a TypeError
}

displayConfig();


//String Interpolation:

//● Create variables for a person's first name and last name.
//● Use a template literal to create a full name string and log it to the console.
let firstName = "John";
let lastName = "Doe";

let fullName = `${firstName} ${lastName}`;

console.log(fullName);
//OUTPUT "John Doe"


//Multi-line Strings:

// ● Use a template literal to create a multi-line string (e.g., an address) and
// log it to the console.
// Create a multi-line address using a template literal
let address = `
123 Main Street
Apt B/4
Nazimabad, DW 7443
PAK
`;

console.log(address);
//OUTPUt 
// 123 Main Street
// Apt B/4
// Nazimabad, DW 7443
// PAK


// Simple Expressions:


// ● Create variables for two numbers.
// ● Use a template literal to create a string that includes the sum of the
// numbers.
// ● Log the string to the console.
let num1 = 25;
let num2 = 75;

let resultString = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;

console.log(resultString); //OUTPUT 100


//Function Calls:

// ● Create a function that takes two numbers and returns their product.
// ● Use a template literal to call this function inside a string and log the
// result to the console.
// Create a function that takes two numbers and returns their product
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}
let number1 = 6;
let number2 = 9;
let resultString = `The product of ${number1} and ${number2} is ${multiplyNumbers(number1, number2)}.`;

console.log(resultString); //OUTPUT 54


//Creating a Tagged Template:

// ● Write a simple tag function that takes a template string and logs it.
// ● Use this tag function with a template literal.
// Create a tag function that takes a template string and logs it
function logTemplate(strings, ...values) {
    console.log("Template strings:", strings);
    console.log("Values:", values);
}

let name = "Nimer";
let age = 22;
logTemplate`My name is ${name} and I am ${age} years old.`;

//OUTPUT Template strings: [ 'My name is ', ' and I am ', ' years old.' ]
// Values: [ 'Nimer', 22 ]


//Formatting:


// ● Write a tag function that formats a string by making it uppercase.
// ● Use this tag function with a template literal and log the result.
// Create a tag function to format a string by making it uppercase
function toUpperCaseTag(strings, ...values) {
    let formattedString = strings.reduce(
        (result, str, i) => result + str + (values[i] !== undefined ? values[i] : ""),
        ""
    );
    return formattedString.toUpperCase();
}

let name = "Nimer";
let hobby = "painting";
let result = toUpperCaseTag`My name is ${name} and I love ${hobby}.`;

console.log(result); //OUTPUT MY NAME IS Nimer AND I LOVE PAINTING.


//Conditional Logic:

// ● Create a variable for the current hour.
// ● Use a template literal to display a different message depending on
// whether it's morning (before 12 PM) or afternoon (after 12 PM).
// Create a variable for the current hour
let currentHour = new Date().getHours();
let message = currentHour < 12
    ? `Good morning! It's ${currentHour} AM.`
    : `Good afternoon! It's ${currentHour > 12 ? currentHour - 12 : 12} PM.`;

console.log(message);
//OUTPUT Good morning! It's 10 AM.
//Good afternoon! It's 12 PM.


//Loops within Template Literals:

//● Create an array of items (e.g., a shopping list).
// ● Use a template literal to generate an HTML list (<ul> and <li>
//     elements) from the array and log it to the console.
// Create an array of items (shopping list)
let shoppingList = ["Apples", "Bananas", "Carrots", "Dairy"];
let htmlList = `
<ul>
    ${shoppingList.map(item => `<li>${item}</li>`).join("")}
</ul>
`;
console.log(htmlList);
//OUTPUT <ul>
//     <li>Apples</li>
//     <li>Bananas</li>
//     <li>Carrots</li>
//     <li>Dairy</li>
// </ul>


//Escaping Backticks:

// ● Create a string that includes a backtick character using a template
// literal.
// ● Log the string to the console.
let stringWithBacktick = `This is a backtick: \``;

console.log(stringWithBacktick);
//OUTPUT This is a backtick: `


//Nested Template Literals:


// ● Create nested template literals to build a more complex string, such as
// a nested HTML structure (e.g., a table with rows and cells).
// ● Log the result to the console.
// Create an array of data for the table
let tableData = [
    ["Nimer", 22, "Engineer"],
    ["Hussain", 24, "Designer"],
    ["Qureshi", 26, "Developer"]
];

let htmlTable = `
<table border="1">
    <thead>
        <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Profession</td>
        </tr>
    </thead>
    <tbody>
        ${tableData
        .map(row => `
                <tr>
                    ${row.map(cell => `<td>${cell}</td>`).join("")}
                </tr>
            `)
        .join("")}
    </tbody>
</table>
`;
console.log(htmlTable);
//OUTPUT
{/* <table border="1">
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Profession</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Alice</td>
            <td>25</td>
            <td>Engineer</td>
        </tr>
        <tr>
            <td>Bob</td>
            <td>30</td>
            <td>Designer</td>
        </tr>
        <tr>
            <td>Charlie</td>
            <td>28</td>
            <td>Developer</td>
        </tr>
    </tbody>
</table> */}


//  20: Simple Conditions //

let age1 = 20;
let canVote = age1 >= 18 ? "Yes" : "No";
console.log(canVote);

// 21: Even or Odd //

let number = 7;
let evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
console.log(evenOrOdd);

// 22: Grade Evaluation //  

let score = 85;
let grade = score >= 90 ? "A" :
    score >= 80 ? "B" :
        score >= 70 ? "C" :
            score >= 60 ? "D" : "F";
console.log(grade);

// 23: Login Status //

let isLoggedIn = true;
let statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(statusMessage);

// 24: Discount Eligibility //

let isMember = true;
let purchaseAmount = 150;
let discount = isMember && purchaseAmount > 100 ? purchaseAmount * 0.1 : 0;
console.log(discount);

// 25: Determine Max Value //

function maxValue(a, b) {
    return a > b ? a : b;
}
console.log(maxValue(5, 10));

// 26: Greeting Message //

function greet(name = "guest") {
    return Hello, ${ name } !;
}
console.log(greet("Dora"));
console.log(greet());

// 27: Mapping Values //

let Nums = [1, 2, 3, 4, 5];
let mappedNums = Nums.map(nums => nums % 2 === 0 ? nums * 2 : nums * 3);
console.log(mappedNums);

// 28: Filtering Values //

let Names = ["apple", "bat", "cat", "dog", "elephant"];
let filteredNames = Names.filter(Names => Names.length > 3);
console.log(filteredNames);

// 29: Copying an Array //

let originalArray = [1, 2, 3];
let copiedArray = [...originalArray];
console.log(copiedArray);

// 30: Merging Arrays //

let array1 = [1, 2];
let array2 = [3, 4];
let mergedArray = [...array1, ...array2];
console.log(mergedArray);

// 31: Adding Elements to an Array //

let numbersArr = [2, 3, 4];
let updatedArray = [1, ...numbersArr, 5];
console.log(updatedArray);

// 32: Copying an Object //

let originalObject = { a: 1, b: 2 };
let copiedObject = { ...originalObject };
console.log(copiedObject);

// 33: Merging Objects //

let object1 = { a: 1, b: 2 };
let object2 = { b: 3, c: 4 };
let mergedObject = { ...object1, ...object2 };
console.log(mergedObject);

// 34: Updating Object Properties //

let user1 = { name: "Dora", age: 23, email: "doragmail.com" };
let updatedUser1 = { ...user1, email: "newemail@gmail.com", address: "123 Main St" };
console.log(updatedUser1);

// 35: Passing Array Elements as Arguments //

function sum(a, b, c) {
    return a + b + c;
}
let numbersToSum = [1, 2, 3];
console.log(sum(...numbersToSum));

// 36: Combining Multiple Arrays //

function combineArrays(...arrays) {
    return [].concat(...arrays);
}
console.log(combineArrays([1, 2], [3, 4], [5, 6]));

// 37: Rest Parameter with Spread Operator //

function multiply(multiplier, ...numbers) {
    return numbers.map(num => num * multiplier);
}
console.log(multiply(2, 1, 2, 3));

// 38: Spread Operator with Nested Structures //

let nestedArray = [[1, 2], [3, 4], [5, 6]];
let shallowCopy = [...nestedArray];
shallowCopy[0][0] = 100;

console.log(nestedArray);
console.log(shallowCopy);

// 39: Sum Function //

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4));

// 40: Average Function //

function average(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
}
console.log(average(2, 4, 6, 8));

// 41: First and Rest //

let nums = [10, 20, 30, 40];
let [first, ...rest] = nums;
console.log(first);
console.log(rest);

// 42: Skip and Rest //

let colors = ["red", "green", "blue", "yellow", "purple"];
let [, , ...remainingColors] = colors;
console.log(remainingColors);

// 43: Basic Destructuring //

let User = { name: "Yousuf", age: 38, email: "yousuf@gmail.com", address: "123 Street, karachi." };
let { userName, email, ...restProps } = User;
console.log(userName, email, restProps);

// 44:Nested Destructuring //

let std = { id: 1, name: "Dora", grades: [90, 80], info: { age: 20, major: "CS" } };
let { stdId, stdName, info: { major }, ...Rest } = std;
console.log(stdId, stdName, major, rest);

// 45: Filter Even Numbers //

function filterEven(...numbers) {
    return numbers.filter(num => num % 2 === 0);
}
console.log(filterEven(1, 2, 3, 4, 5));

// 46: Combine and Sort Arrays //

function combineAndSort(...arrays) {
    return [].concat(...arrays).sort((a, b) => a - b);
}
console.log(combineAndSort([3, 1], [4, 2], [6, 5]));

// 47: Basic Destructuring //

let fruits = ["apple", "banana", "cherry"];
let [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(firstFruit, secondFruit, thirdFruit);

// 48: Skipping Elements //

let Colors = ["red", "green", "blue", "yellow"];
let [primaryColor, , tertiaryColor] = colors;
console.log(primaryColor, tertiaryColor);

// 49: Rest Operator //

let numberVal = [1, 2, 3, 4, 5];
let [firstNumber, ...remainingNumbers] = numberVal;
console.log(firstNumber);
console.log(remainingNumbers);

// 50: Basic Object Destructuring //

let prsn = { name: "Nimrah", ge: 20, city: "Islamabad" };
let { pname, page, city } = prsn;
console.log(pname, page, city);

// 51: Renaming Variables //

let vehicle = { make: "Toyota", model: "corolla", year: 2021 };
let { make: carMake, model: carModel, year: carYear } = vehicle;
console.log(carMake, carModel, carYear);

// 52: Default Values //

let mobSettings = { theme: "dark" };
let { theme, language = "English" } = mobSettings;
console.log(theme, language);

// 53: Array of Arrays //

let NestedArray = [[1, 2], [3, 4], [5, 6]];
let [[a], [, b], [, c]] = nestedArray;
console.log(a, b, c);

// 54: Object within an Object //

let profile = { username: "user123", details: { Email: "user@example.com", address: "123 Street" } };
let { username, details: { Email, Address } } = profile;
console.log(username, email, address);

// 55: Mix of Arrays and Objects //

let data = { id: 1, info: [{ name: "Nimer" }, { age: 25 }] };
let { id, info: [{ name }, { age }] } = data;
console.log(id, name, age);

// 56: Array Parameters //

function printCoordinates([x, y]) {
    console.log(x: ${ x }, y: ${ y });
}
printCoordinates([5, 10]);

// 57: Object Parameters //

function displayUser({ name, age }) {
    console.log(Name: ${ name }, Age: ${ age });
}
displayUser({ name: "Bob", age: 30 });

// 58: List Property Names //

let book = { title: "1984", author: "George Orwell", year: 1949 };
console.log(Object.keys(book));

// 59: Count Properties //

let student = { name: "John", age: 20, grade: "A", school: "XYZ High" };
console.log(Object.keys(student).length);

// 60: Iterate Over Keys //

let product = { name: "Laptop", price: 1000, category: "Electronics" };
Object.keys(product).forEach(key => console.log(${ key }: ${ product[key]}));

// 61: List Property Values //

let movie = { title: "Inception", director: "Nolan", year: 2010, genre: "Sci-Fi" };
console.log(Object.values(movie));

// 62: Sum Values //

let scores = { math: 90, science: 85, english: 88 };
let totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
console.log(totalScore);

// 63: Iterate Over Values //

let user = { username: "Dora", email: "dora@gmail.com", location: "Lahore" };
Object.values(user).forEach(value => console.log(value));

// 64: List Entries //

let car = { make: "Tesla", model: "Model S", year: 2020 };
console.log(Object.entries(car));

// 65: Convert Object to Array //

let person = { firstName: "John", lastName: "Doe", age: 30 };
console.log(Object.entries(person));

// 66: Iterate Over Entries //

let settings = { theme: "dark", notifications: true, privacy: "high" };
Object.entries(settings).forEach(([key, value]) => console.log(${ key }: ${ value }));

// 67: Filter Keys //

let inventory = { apples: 5, bananas: 12, oranges: 8, grapes: 15 };
let filteredKeys = Object.keys(inventory).filter(key => inventory[key] > 10);
console.log(filteredKeys);

// 68: Transform Values //

let temperatures = { morning: 20, afternoon: 25, evening: 18 };
let fahrenheitTemps = Object.fromEntries(
    Object.entries(temperatures).map(([key, temp]) => [key, temp * 1.8 + 32])
);
console.log(fahrenheitTemps);

// 69: Key-Value Swap //

let roles = { admin: "Admin", editor: "Editor", viewer: "Viewer" };
let swappedRoles = Object.fromEntries(
    Object.entries(roles).map(([key, value]) => [value, key])
);
console.log(swappedRoles);

// 70: Filter and Map //

let val = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterAndMap(arr, filterFn, mapFn) {
    return arr.filter(filterFn).map(mapFn);
}
console.log(filterAndMap(val, n => n % 2 !== 0, n => n ** 2));

// 71: Sort and Reduce //

let fruit = ["apple", "banana", "cherry", "dates"];
function sortAndReduce(arr, sortFn, reduceFn) {
    return arr.sort(sortFn).reduce(reduceFn);
}
console.log(sortAndReduce(fruit, undefined, (acc, fruit) => acc + " " + fruit));

// // 72: Simple Callback //

// function greet (name, callback) {
//    callback (Hello, ${name}!);
// }
// function printGreeting(message) {
//     console.log(message);
// }
// greet("Alice", printGreeting);

// 73: Asynchronous Callback //

function fetchData(callback) {
    setTimeout(() => callback("Data fetched"), 1000);
}
function displayData(data) {
    console.log(data);
}
fetchData(displayData);

// 74: Simple Arrow Function //

const add = (a, b) => a + b;
console.log(add(3, 5));

// 75: Arrow Function with Array Methods //

let newValues = [1, 2, 3, 4, 5];
let squaredNumbers = newValues.map(num => num ** 2);

console.log(squaredNumbers);

// 76: Variable Scope //

function outer() {
    let x = 10;
    function inner() {
        console.log(x);
    }
    inner();
}
outer();

// 77: Closure //

function createCounter() {
    let counter = 0;
    return function () {
        counter++;
        console.log(counter);
    };
}
let counter1 = createCounter();
let counter2 = createCounter();
counter1();
counter1();
counter2();

// 78: Simple Default Parameters //

function greet(name = "World", message = "Hello") {
    console.log(${ message }, ${ name }!);
}
greet("Dora", "Hi");
greet();

// 79: Default Parameters with Other Arguments //

function calculateArea(width = 10, height = 5) {
    return width * height;
}
console.log(calculateArea());
console.log(calculateArea(6, 7));

// 80: Square Numbers //

let numbs = [1, 2, 3, 4, 5];
let squared = numbs.map(num => num ** 2);
console.log(squared);

// 81: Convert to Uppercase //

let bakers = ["cakes", "Nimcos", "chips"];
let uppercased = bakers.map(bakers => bakers.toUpperCase());
console.log(uppercased);

// 82: Filter Even Numbers //

let nmbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evens = nmbers.filter(num => num % 2 === 0);
console.log(evens);

// 83: Filter Long Words //

let Fruits = ["apple", "banana", "cherry", "date"];
let longWords = fruits.filter(Fruits => Fruits.length > 5);
console.log(longWords);

// 84: Log Numbers //

let logNum = [1, 2, 3, 4, 5];
logNum.forEach(logNum => console.log(logNum));

// 85: Log Word Lengths //

let veg = ["carrots", "potatoes", "Peas"];
veg.forEach(veg => console.log(veg.length)); // Logs 5, 6, 6

// 85: Sum of Numbers //

let sumOfNum = [1, 2, 3, 4, 5];
let newSum = sumOfNum.reduce((acc, num) => acc + num, 0);
console.log(newSum);

// 86: Concatenate Strings //

let message = ["Hello", "world", "this", "is", "JavaScript"];
let sentence = message.reduce((acc, word) => acc + " " + word, "").trim();
console.log(sentence);

// 87: Check for Even Number //

let abc = [1, 3, 5, 7, 8];
let hasEven = abc.some(num => num % 2 === 0);
console.log(hasEven);

// 88: Check for Long Word //

let Mobiles = ["iphone", "Samsung", "Vivo", "Redmi"];
let hasLongWord = Mobiles.some(word => word.length > 5);
console.log(hasLongWord);

// 89: Check All Even Numbers //

let evenNumbers = [2, 4, 6, 8, 10];
let allEven = evenNumbers.every(num => num % 2 === 0);
console.log(allEven);

// 90: Check All Long Words //

let xyz = ["elephant", "giraffe", "hippopotamus"];
let allLong = xyz.every(word => word.length > 5);
console.log(allLong);

// 91: Find First Even Number //

let valNum = [1, 3, 5, 7, 8];
let firstEven = valNum.find(num => num % 2 === 0);
console.log(firstEven);

// 92: Find Long Word //

let stdNames = ["Hamza", "Ibrahim", "Fahad", "Abdullah"];
let firstLongWord = stdNames.find(word => word.length > 5);
console.log(firstLongWord);

// 93: Find Index of First Even Number //

let numbers = [1, 3, 5, 7, 8];
let firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
console.log(firstEvenIndex);

// 94: Find Index of Long Word //

let ABC = ["apple", "banana", "cherry", "date"];
let firstLongWordIndex = ABC.findIndex(word => word.length > 5);
console.log(firstLongWordIndex);

// 95: Simple Promise //

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
delay(2000).then(() => console.log("Hello, world!"));

// 96: Promise Chain //

function fetchData() {
    return Promise.resolve({ data: "Sample data" });
}
fetchData().then(data => console.log(data));

// 97: Error Handling //

function fetchUserData() {
    return new Promise((resolve, reject) => {
        let user = { name: "Zara" };
        user.age ? resolve(user) : reject("Age is missing");
    });
}
fetchUserData()
    .then(user => console.log(user))
    .catch(err => console.log(err));

// 98: Simulate Network Request //

function getWeather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() > 0.5;
            success ? resolve("Sunny") : reject("Network Error");
        }, 1000);
    });
}
getWeather()
    .then(data => console.log(data))
    .catch(err => console.log(err));

// 99: Simple async Function //

async function sayHello() {
    await delay(2000);
    console.log("Hello, world!");
}
sayHello();

// 100: Fetch Data with async/await //

async function getUserData() {
    try {
        let data = await fetchUserData();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
getUserData();

// 102: Fetch and Process Data //

function fetchUser() {
    return Promise.resolve({ name: "Alice", age: 25 });
}
function fetchPosts() {
    return Promise.resolve(["Post1", "Post2"]);
}
async function getUserAndPosts() {
    let user = await fetchUser();
    let posts = await fetchPosts();
    console.log(user, posts);
}
getUserAndPosts();

// 103: Error Handling in async/await //

function fetchUser() {
    return new Promise((resolve, reject) => {
        let user = null;
        if (user) {
            resolve(user);
        } else {
            reject("User not found");
        }
    });
};

async function getUserInfo() {
    try {
        let user = await fetchUser();
        console.log(user);
    } catch (err) {
        console.log(err);
    }
};

getUserInfo();

// 104: Simulate API Calls //

function apiCall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() > 0.5;
            if (success) {
                resolve("Data received");
            } else {
                reject("Error occurred");
            }
        }, Math.random() * 2000);
    });
}

async function getData() {
    try {
        let data1 = await apiCall();
        console.log(data1);
        let data2 = await apiCall();
        console.log(data2);
        let data3 = await apiCall();
        console.log(data3);
    } catch (err) {
        console.log(err);
    }
}

getData();

// 105: Fetch Multiple Data Simultaneously with async/await //

function fetchData1() {
    return new Promise(resolve => setTimeout(() => resolve("Data from API 1"), 1000));
}
function fetchData2() {
    return new Promise(resolve => setTimeout(() => resolve("Data from API 2"), 1500));
}
function fetchData3() {
    return new Promise(resolve => setTimeout(() => resolve("Data from API 3"), 500));
}

async function fetchAllData() {
    try {
        let [data1, data2, data3] = await Promise.all([fetchData1(), fetchData2(), fetchData3()]);
        console.log(data1, data2, data3);
    } catch (err) {
        console.log("Error:", err);
    }
}

fetchAllData();







