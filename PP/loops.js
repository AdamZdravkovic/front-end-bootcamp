// Task 1


var result = [];

for (let num = 0; num <= 10; num++) {
    console.log("The square of ", num , " is ", num * num);
}


// Task 2


for (var i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i, "is even");
    } else {
        console.log( i,"is odd");
    }
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
var minValue1 = input1[0];
var minIndex1 = 0;

for (var i = 0; i < input1.length; i++) {
    if (input1[i] < minValue1) {
        minValue1 = input1[i];
        minIndex1 = i;
    };
};

console.log("Smallest number and its index:", minValue1, ",", minIndex1);


// Task 13

var input2 = [4, 2, 2, -1, 6];

var min = input2[0];
var secondMin = input2[0];

for (var i = 1; i < input2.length; i++) {
    if (input2[i] < min) {
        secondMin = min;
        min = input2[i];
    } else if (input2[i] > min) {
        if (secondMin === min || input2[i] < secondMin) {
            secondMin = input2[i];
        }
    }
};


if (secondMin === min) {
    console.log("Second smallest element not found");
} else {
    console.log("Second smallest element:", secondMin);
};



if (secondMin === null) {
    console.log("Second smallest element not found");
} else {
    console.log("Second smallest element:", secondMin);
};




// Task 14

var input3 = [2, 4, -2, 7, -2, 4, 2];
var isSymmetric2 = true;


for (var i = 0; i < input3.length / 2; i++) {
    if (input3[i] !== input3[input3.length - 1 - i]) {
        isSymmetric2 = false;
        break;
    }
};

if (isSymmetric2) {
    console.log("The array is symmetric.");
} else {
    console.log("The array isn't symmetric.");
};





// Task 15


var array3 = [4, 5, 6, 2];
var array4 = [3, 8, 11, 9];

var intertwinedArray = [];

var index = 0;

for (var i = 0; i < array3.length; i++) {
    intertwinedArray[index] = array3[i];
    index++;
    intertwinedArray[index] = array4[i];
    index++;
};


console.log("Interwined array:", intertwinedArray);





// Task 16


var arr1 = [4, 5, 6, 2];
var arr2 = [3, 8, 11, 9];

var result = [];

for (var i = 0; i < arr1.length; i++) {
    result[result.length] = arr1[i];
}

for (var i = 0; i < arr2.length; i++) {
    result[result.length] = arr2[i];
}

console.log(result);



// Task 17


var newArr = [4, 6, 2, 8, 2, 2];
var e = 2;
var newArr1 = [];

for (var i = 0; i < newArr.length; i++) {
    if (newArr[i] !== e) {
        newArr1[newArr1.length] = newArr[i];
    };
};

console.log("New Array without element e:", newArr1);



// Task 18


var e = 78;
var p = 3;
var a = [2, -2, 33, 12, 5, 8];


if (p >= a.length) {
    console.log("Position p is greater than array length!");
} else {
    var newArray = [];

    for (var i = 0; i < p; i++) {
        newArray[i] = a[i];
    }

    newArray[p] = e;

    for (var i = p; i < a.length; i++) {
        newArray[i + 1] = a[i];
    }
};

console.log("New Array with element e:", newArray);