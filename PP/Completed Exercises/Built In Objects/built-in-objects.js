// Task 1


const input = [2, 4, 7, 11, -2, 1];

const duplicated = [];

input.forEach(function(a) {
    duplicated.push(a);
    duplicated.push(a);
});

console.log("Task 1: ",duplicated);


// Task 2


const input1 = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

const singles = [];

input1.forEach(function(num) {
    if (!singles.includes(num)) {
        singles.push(num);
    };

    return singles.sort((a, b) => a - b);
});

console.log("Task 2: ", singles);


// Task 3


const example = [2, 6, 6, 23, 7, 3];

const checkOddEven = function(el) {
    return el.length % 2 !== 0;
};

console.log("Task 3: ", checkOddEven(example));


// Task 4


const example1 = [275, 231, 626, 344, 543, 898, 232, 3455, 232];

const lessThanMiddle = function(el) {
    if (el.length % 2 === 0) {
        return "Length of array is even!";
    };

    const middleIndex = Math.floor(el.length / 2);
    const middleValue = el[middleIndex];

    const filtered = el.filter(function(value) {
        return value < middleValue;
    });

    return filtered.length;
};

console.log("Task 4: ", lessThanMiddle(example1));


// Task 5


const input2 = [1, 4, -2, 11, 8, 1, -2, 3];

const smallestEl = function (el) {
    const minValue = Math.min(...el);
    const minLastIndex = el.lastIndexOf(minValue);

    return {
        minValue: minValue,
        minLastIndex: minLastIndex,
    };
};

console.log("Task 5: ", smallestEl(input2));


// Task 6


const input3 = [10, 25, 3, 50, 7, 18];
const value = 20;

const lessThan = input3.filter(function(el) {
    return el < value;
});

console.log("Task 6: ", lessThan);


// Task 7


const input4 = ["process", "Product", "promise", "test", "Prototype", "apple"];

const startsWithPro = input4.filter(function (el) {
    return el.toLowerCase().slice(0, 3) === "pro";
});

console.log("Task 7: ", startsWithPro);


// Task 8


const input5 = [5, 12, 8, 130, 44];

function customFunction (input, callback) {
    return input.filter(callback);
};

const lessThanTen = function(el) {
    return el < 10;
};

console.log("Task 8: ", customFunction(input5, lessThanTen));


// Task 9-12


const products = [
    { name: "Milk", price: 2.687 },
    { name: "Bread", price: 2.385 },
    { name: "Eggs", price: 8.271 },
    { name: "Apples", price: 3.536 }
];

const totalPrice = products.reduce(function(acc, item) {
    return acc += item.price;
}, 0);

const averagePrice = totalPrice / products.length;

const biggestPrice = products.reduce(function(prev, curr) {
    if (prev.price > curr.price) {
        return prev;
    } else {
        return curr;
    };
});

console.log("Task 9-12: ", "Total price: ", totalPrice, "|| Average price: ", averagePrice, "|| Biggest price: ", biggestPrice.name.toUpperCase());


// Task 13 - 17


const exampleString = "Miami 1919 1402";

const exampleStringValidator = function() {
    const hasAllCaps = exampleString === exampleString.toUpperCase();

    let hasDigit = false;

    exampleString.split("").forEach(function(el) {
        if (!isNaN(el) && el !== " ") {
            hasDigit = true;        
        };
    });

    const hexColor = /^#([A-Fa-f0-9]{3}){1,2}$/;
    const isHexColor = hexColor.test(exampleString);

    const numbers = exampleString.match(/\d+/g) || [];
    let isYearValid = false;

    for (let i = 0; i < numbers.length; i++) {
        const year = parseInt(numbers[i]);
        if (year >= 1900 && year <= 2018) {
            isYearValid = true;
        } else {
            isYearValid = false;
            break;
        }
    };
 
    return {
        hasAllCaps: hasAllCaps,
        hasDigit: hasDigit,
        isHexColor: isHexColor,
        isYearValid: isYearValid
    }
};

console.log("Task 13-17: ", exampleStringValidator());


// Task 18


const untilMyBirthday = function() {
    const today = new Date();
    const birthday = new Date(today.getFullYear(), 3, 4);

    if (today > birthday) {
        birthday.setFullYear(today.getFullYear() + 1);
    };

    const difference = birthday - today;
    const daysUntilBirthday = Math.ceil(difference / (1000 * 3600 * 24));

    return daysUntilBirthday;
};

console.log("Task 18: ", untilMyBirthday());


// Task 19


const departure = "08:22:13";
const arrival = "11:43:22";

const tripDuration = function(start, end) {
    const startTime = start.split(":");
    const endTime = end.split(":");

    const startHours = parseInt(startTime[0]);
    const startMinutes = parseInt(startTime[1]);
    const startSeconds = parseInt(startTime[2]);

    const endHours = parseInt(endTime[0]);
    const endMinutes = parseInt(endTime[1]);
    const endSeconds = parseInt(endTime[2]);

    const startTotalSeconds = startHours * 3600 + startMinutes * 60 + startSeconds;
    const endTotalSeconds = endHours * 3600 + endMinutes * 60 + endSeconds;

    const difference = endTotalSeconds - startTotalSeconds;

    const hours = Math.floor(difference / 3600);
    const minutes = Math.floor((difference % 3600) / 60);
    const seconds = difference % 60;

    return hours + " hours " + minutes + " minutes " + seconds + " seconds";
};

console.log("Task 19: ", tripDuration(departure, arrival));


// Task 20


function Points (x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.printPoints = function() {
        console.log("X:", this.x, "Y:", this.y, "Z:", this.z);
    };
};

const newPoint = new Points (3, 5.2, 4);

console.log("Task 20: " + newPoint.x + ", " + newPoint.y + ", " + newPoint.z);


// Task 21

const pointA = { x: 7, y: 5, z: 3 };
const pointB = { x: 2, y: 4, z: 4 }; 

const pointsDistance = function(point1, point2) {
    return Math.sqrt( 
        Math.pow(point2.x - point1.x, 2) +
        Math.pow(point2.y - point1.y, 2) +
        Math.pow(point2.z - point1.z, 2)
    );
};

console.log("Task 21: ", pointsDistance(pointA, pointB));


// Task 22-24


const random5to20 = function() {
    return Math.floor(Math.random() * 16) + 5;
};

const random50to100 = function() {
    return Math.floor(Math.random() * 51) + 50;
};

const randomArray = function(callback, count) {
    const arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(callback());
    };
    
    return arr;
};

console.log("Task 22-24: ", randomArray(random5to20, 4));


// Task 25


const arrayExample = ['car', 'roof', 'pool', 'street', 'sky'];

const shuffle = function () {
    const original = arrayExample.slice();
    const shuffled = [];

    for (let i = 0; i < arrayExample.length; i++) {
        const randomIndex = Math.floor(Math.random() * original.length);
        const removed = original.splice(randomIndex, 1)[0];
        shuffled.push(removed);
    };

    return shuffled;
};

console.log("Task 25: ", shuffle(arrayExample));


// Task 26


const reversedExample = 12345;

const reversed = function() {
    return parseInt(reversedExample.toString().split("").reverse().join(""));
};

console.log("Task 26: ", reversed());


// Task 27


const stringExample = "Going to New York City";

const alphaString = function() {
    return stringExample.replace(/[^a-z]/gi, '').toLowerCase().split("").sort().join("");
};

console.log("Task 27: ", alphaString());


// Task 28


const alphaStringSentence = function() {
    return stringExample.split(" ").map(word => word.split("").sort().join("")).join(" ");
};

console.log("Task 28: ", alphaStringSentence());


// Task 29


const splitWords = function () {
    return stringExample.split(" ");
};

console.log("Task 29: ", splitWords());


// Task 30


const abbExample = "John Snow";

const abbForm = function () {
    const words = abbExample.split(" ");
    return words[0] + " " + words[1][0] + ".";
};

console.log("Task 30: ", abbForm());


// Task 31


const start1 = '0000';
const end1 = '123';
const direction1 = 'l';

const start2 = '00000000';
const end2 = '123';
const direction2 = 'r';

const leftOrRight = function (start, end, direction) {
    const startLength = start.length;
    const endLength = end.length;
    const remaining = startLength - endLength;

    if (direction === "l") {
        return start.slice(0, remaining) + end;
    } else if (direction === "r") {
        return end + start.slice(endLength);
    };
};

const result1 = leftOrRight(start1, end1, direction1);
const result2 = leftOrRight(start2, end2, direction2);

console.log("Task 31: ", result1, result2);


// Task 32


const inputExample = "the city is ancient";

const capitalize = function () {
    return inputExample.charAt(0).toUpperCase() + inputExample.slice(1);
};

console.log("Task 32: ", capitalize());


// Task 33


const emailExample = "aradviktor@gmail.com";

const email = function () {
    const seperate = emailExample.split("@");
    const name = seperate[0];
    const domain = seperate[1];

    return name.slice(0, 4) + "..." + "@" + domain;
};

console.log("Task 33: ", email());


// Task 34


const swapCase = "I'm Going To Work";

const swap = function () {
    return swapCase.split("").map(char => {
        if (char === char.toLowerCase()) {
            return char.toUpperCase();
        } else {
            return char.toLowerCase();
        };
        }).join("");
};

console.log("Task 34: ", swap());