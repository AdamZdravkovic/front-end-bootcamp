// Task 1

var result = [];

for (var i = 0; i <= 10; i++) {
    result[i] = i * i;
    console.log(result);
};


// Task 2

for (var i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i, "is even");
    } else {
        console.log( i,"is odd");
    };
};


// Task 3

var sum = 0;

for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
};
};

console.log("Sum of the multiples:", sum);


// Task 4

var array = [7, 5, 10];
var arraySum = 0;
var arrayProduct = 1;

for (var i = 0; i < array.length; i++) {
    arraySum += array[i];
    arrayProduct *= array[i];
};

console.log("Sum of all numbers:", arraySum);
console.log("Product of all numbers:", arrayProduct);


// Task 5

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];

var y = "";

for (var i = 0; i < x.length; i++) {
    y += x[i];
};

console.log("Single string:", y);


// Task 6

var a = [
    [1, 2, 1, 24], 
    [8, 11, 9, 4], 
    [7, 0, 7, 27]
];

for (var i = 0; i < a.length; i++) {
    console.log("Row " + i + ":");
   for (var j = 0; j < a[i].length; j++) {
    console.log(a[i][j]);  
   };
};


// Task 7

var resultSquares = 0;

for (var i = 0; i <= 20; i++) {
    resultSquares += i * i;
};

console.log("Sum of all squares:", resultSquares);


// Task 8

var arrayScores = [80, 77, 88, 95, 68];
var arraySum = 0;
var arrayAverage = 0;

for (var i = 0; i < arrayScores.length; i++) {
    arraySum += arrayScores[i];
};

arrayAverage = arraySum / arrayScores.length;
console.log("The average score of students:", arrayAverage);

if (arrayAverage < 60 && arrayAverage >= 0) {
    console.log("F Grade");
} else if (arrayAverage < 70) {
    console.log("D Grade");
} else if (arrayAverage < 80) {
    console.log("C Grade");
} else if (arrayAverage < 90) {
    console.log("B Grade");
} else if (arrayAverage < 100) {
    console.log("A Grade");
};


// Task 9


for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    };
};


// Task 10

var e = 3;
var a = [5, -4.2, 3, 7];
var sign = false;

for (var i = 0; i < a.length; i++) {
    if (a[i] === e) {
        sign = true;
    }
};

if (sign) {
    console.log("yes");
} else {
    console.log("no");
}


// Task 11

var input = [-3, 11, 5, 3.4, -8];

for (var i = 0; i < input.length; i++) {
    if (input[i] > 0) {
        input[i] = input[i] * 2;
    };
};

console.log("Double all positive numbers", input);


// Task 12

var input1 = [4, 2, 2, -1, 6];
var minValue = input1[0];
var minIndex = 0;

for (var i = 0; i < input1.length; i++) {
    if (input1[i] < minValue) {
        minValue = input1[i];
        minIndex = i;
    };
};

console.log("Smallest number and its index:", minValue, ",", minIndex);

