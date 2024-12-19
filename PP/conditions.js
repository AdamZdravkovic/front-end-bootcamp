// Task 1

var n1 = 3;
var n2 = -7;
var n3 = 2;

if (n1 > 0 && n2 > 0 && n3 > 0) {
    console.log("The sign is +");
} else if (n1 < 0 && n2 < 0 && n3 > 0) {
    console.log("The sign is +");
} else if (n1 > 0 && n2 < 0 && n3 < 0) {
    console.log("The sign is +");
} else if (n1 < 0 && n2 > 0 && n3 < 0) {
    console.log("The sign is +");
} else {
    console.log("The sign is -");
};

// Task 2

var num1 = -5;
var num2 = -2;
var num3 = -6;
var num4 = 0;
var num5 = -1;

if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
    console.log(num1);
} else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
    console.log(num2);
} else if (num3 > num1 && num3 > num2 && num3 > num4 && num1 > num5) {
    console.log(num3);
} else if (num4 > num1 && num4 > num3 && num4 > num2 && num4 > num5) {
    console.log(num4);
} else if (num5 > num2 && num5 > num3 && num5 > num4 && num5 > num1) {
    console.log(num5);
};


// Task 3

var a = 0;
var b = -1;
var c = 4;

if (a > b && a > c) {
    if (b > c) {
        console.log(a + ", " + b + ", " + c);
    } else {
        console.log(a + ", " + c + ", " + b);
    }
} else if (b > a && b > c) {
    if (a > c) {
        console.log(b + ", " + a + ", " + c);
    } else {
        console.log(b + ", " + c + ", " + a);
    }
} else if (c > b && c > a) {
    if (b > a) {
        console.log(c + ", " + b + ", " + a);
    } else {
        console.log(c + ", " + a + ", " + b);
    }
}


// Example 4

var exampleValue = 7;

if (typeof exampleValue == "number" && exampleValue % 2 == 0 ) {
    var exampleResult = exampleValue / 2;
    console.log(exampleValue + " / 2 = " + exampleResult);
} else {
    console.log("X");
};


// Task 5

var example1 = 10;
var example2 = -2;

if (example1 > example2) {
    console.log("First number is bigger");
} else if (example1 = example2) {
    console.log("Numbers are equal");
} else {
    console.log("Second number is bigger");
};


// Task 6

var celTemp = 60;

if (celTemp) {
    fahTemp = (9 * celTemp / 5) + 32;
    console.log(celTemp + "°C is " + fahTemp + "°F");
};


// Task 7

var test1 = 11;
var test2 = 32;

if (test1 < 13) {
    console.log(13 - test1);
} else if (test1 == 13) {
    console.log("Numbers are equal");
} else {
    console.log((test1 - 13) * 2);
};


// Task 8

var exampleValue1 = 12;
var exampleValue2 = 5;

if (exampleValue1 !== exampleValue2) {
    console.log(exampleValue1 + exampleValue2);
} else {
    console.log((exampleValue1 + exampleValue2) * 3);
};


// Task 9

var exampleValue3 = 6;
var exampleValue4 = 50;

if (exampleValue3 === 50 || exampleValue4 === 50 || (exampleValue3 + exampleValue4 === 50)) {
    console.log("true");
} else {
    console.log("-");
};


// Task 10

var exampleValue5 = 34;

if (exampleValue5 >= 20 && exampleValue5 <= 100) {
    console.log("20 ⇔ 100");
} else if (exampleValue5 >= 100 && exampleValue5 <= 400) {
    console.log("100 ⇔ 400");
} else {
    console.log("-");
};


// Task 11

var exampleValue6 = 3;

if (exampleValue6 % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
};


// Task 12

var exampleValue7 = 15;

if (exampleValue7 % 3 === 0 && exampleValue7 % 5 === 0) {
    console.log(exampleValue7);
} else {
    console.log("-");
}


// Task 13

var exampleValue8 = 3;
var exampleValue9 = -7;
var exampleValue10 = 2;

if ((exampleValue8 * exampleValue9 * exampleValue10) >= 0) {
    console.log("The sign is +");
} else {
    console.log("The sign is -");
};