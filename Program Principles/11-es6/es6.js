// Task 1
// Write a function that capitalizes the first letter of each string argument it receives


function capitalize(input) {
    return input
        .filter(function(item) {
            return typeof item === "string";
        })
        .map(function(item) {
            return item.charAt(0).toUpperCase() + item.slice(1);
        });
};

console.log("Task 1:", capitalize(['hello', 'there', 'ES', 6]));


// Task 2
// Write a function that calculates sales tax using a constant tax rate (e.g. 20%)


function taxCalc(input) {
    const tax = 0.20;

    const fullPrices = input.map(item => {
        return {
            name: item.name,
            price: item.price + (item.price * tax)
        };
        });

    const taxOnly = input.map(item => item.price * tax);

    return {
        fullPrices: fullPrices,
        taxOnly: taxOnly
    };
};

const products = [{ name: "Banana", price: 120 }, { name: "Orange", price: 100 }];
console.log("Task 2:", taxCalc(products));


// Task 3
// Write a function that increases each element by a given value. If omitted, use 1


const increaseBy = (array, increment = 1) => array.map(item => item + increment);


console.log("Task 3:", increaseBy([4, 6, 11, -9, 2.1], 2));


// Task 4
// Write a function that filters all even elements from the array


const filterAllEven = array => array.filter(item => item % 2 === 0);

console.log("Task 4:", filterAllEven([6, 11, 9, 0, 3]));


// Task 5
// Write a function that filters strings containing 'JS' or 'js'


const filterJS = array => array.filter(item => item.toLowerCase().includes("js"));

console.log("Task 5:", filterJS(['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']));


// Task 6
// Write a function that filters all integer numbers from the array


const filterIntegers = array => array.filter(item => Number.isInteger(item));

console.log("Task 6:", filterIntegers([1.6, 11.34, 9.23, 7, 3.11, 8]));


// Task 7
// Write a function that filters all integer arguments that contain digit 5


const filterFives = (...args) => args.filter(item => Number.isInteger(item) && item.toString().includes("5"));

console.log("Task 7:", filterFives(23, 11.5, 9, 'abc', 45, 28, 553));


// Task 8
// Write a function that returns indexes of elements greater than 10


const greaterThanTen = array => array.reduce((acc, item, index) => {
    if (item > 10) {
        acc.push(index);
    };

    return acc;
}, []);

console.log("Task 8:", greaterThanTen([1.6, 11.34, 29.23, 7, 3.11, 18]));


/* Task 9
Create an array of persons (name and age). Use enhanced object literals
Write a function that prints names of persons older than 25.
Write a function that checks if there is any person older than 40.
Write a function that checks if all persons are older than 20 */


const createPerson = (name, age) => ({name, age});

const persons = [
    createPerson("Adam", 29),
    createPerson("Petar", 29),
    createPerson("Sava", 28)
];

const olderThan25 = persons.filter(person => person.age >= 25).map(person => person.name);

const olderThan40 = persons.some(person => person.age > 40);

const olderThan20 = persons.every(person => person.age > 20);

console.log("Task 9:", "Names:", olderThan25, ";", "Anyone older than 40?", olderThan40,";", "Everyone older than 20?", olderThan20);


// Task 10
// Write a function that checks if all values in an array are positive integers


const checkPositive = array => array.every(item => item >= 0) ? "yes" : "no";

console.log("Task 10:", checkPositive([3, 11, 9, 5, 6]));


// Task 11
// Write a function that calculates the product of elements in the array


const arrayProduct = array => array.reduce((acc, item) => acc * item, 1)

console.log("Task 11:", arrayProduct([2, 8, 3]));


// Task 12
// Write a function that calculates the maximum of the given array


const maxValue = array => Math.max(...array);

console.log("Task 12:", maxValue([2, 7, 3, 8, 5.4]));


// Task 13
// Custom every() method


function myEvery (array, testFunction) {
    for (let i = 0; i < array.length; i++) {
        if (!testFunction(array[i])) {
            return false;
        };
    };

    return true;
};

function customCallback (item) {
    return item.length >= 6 && item.includes("n");
};

console.log("Task 13:", (myEvery(["Bisons", "Pandas", "Tigers"], customCallback)));


// Custom some() method


function mySome (array, testFunction) {
    for (let i = 0; i < array.length; i++) {
        if (testFunction(array[i])) {
            return true;
        };
    };

    return false;
};

console.log("Task 14:", (mySome(["Bisons", "Pandas", "Tigers"], customCallback)));