// Task 1


function biggerNum (a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
};

var biggerNumResult = biggerNum(5, 7);
console.log("Bigger number is:", biggerNumResult);


// Task 2


function oddNum (a) {
    if (a % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

var oddNumResult = oddNum(5);
console.log("Is this number odd?", oddNumResult);


// Task 3


function threeDig (a) {
    if (a > 99 && a < 1000) {
        return true;
    } else {
        return false;
    }
};

var threeDigResult = threeDig(555);
console.log("Is this number three digit?", threeDigResult);


// Task 4


function arithmeticMean (a, b, c, d) {
    if (typeof a === "number" && typeof b === "number" && typeof c === "number" && typeof d === "number" ) {
        return (a + b + c + d) / 4;
    }
};

var arithmeticMeanResult = arithmeticMean(5, 10, 5, 10);
console.log("Arithmetic mean is?", arithmeticMeanResult);


// Task 5


function drawSquare(a) {
    if (a < 2) {
        return "Number too low";
    };

    var result = "";

    var upperSide = "";
    for (var i = 0; i < a; i++) {
        upperSide += "*";
    };
    result += upperSide + "\n";

    var middleSide = "*";
    for (var i = 0; i < a - 2; i++) {
        middleSide += " ";
    };
    middleSide += "*";
    
    for (var i = 0; i < a - 2; i++) {
        result += middleSide + "\n";
    };

    var lowerSide = "";
    for (var i = 0; i < a; i++) {
        lowerSide += "*";
    };
    result += lowerSide;
    return result;
};

var drawSquareResult = drawSquare(4);
console.log("Draw a square" + "\n" + drawSquareResult);


// Task 6


function horChart (a, b, c) {
    if (a < 1 || b < 1 || c < 1) {
        return "Numbers too low";
    };

    var result = "";

    var firstNum = "";
    for (var i = 0; i < a; i++) {
        firstNum += "*";
    };
    result += firstNum + "\n";

    var secondNum = "";
    for (var i = 0; i < b; i++) {
        secondNum += "*";
    };
    result += secondNum + "\n";

    var thirdNum = "";
    for (var i = 0; i < c; i++) {
        thirdNum += "*";
    };
    result += thirdNum;

    return result;
};

var horChartResult = horChart(4, 5, 2);
console.log("Horizontal Chart" + "\n" + horChartResult);


// Task 7


function countDigits(a) {
    var count = 0;

    if (a < 0) {
        a = -a;
    };

    while (a >= 1) {
        count++;
        a = a / 10;

        a = a - (a % 1);
    };

    return count;
};

var countDigitsResult = countDigits(100);
console.log("Number of digits:", countDigitsResult);


// Task 8


function countOccurrences (a, e) {
    var count = 0;

    for (var i = 0; i < a.length; i++) {
        if (a[i] === e) {
            count++;
        };
    };

    return count;
};

var countOccurrencesResult = countOccurrences([2, 4, 7, 8, 4, 2, 4, 3, 9, 4], 4);
console.log("Number of occurrences:", countOccurrencesResult);


// Task 9


function sumOfOdd (a) {
    var result = 0;

    for (var i = 0; i < a.length; i++) {
        if (a[i] % 2 !== 0) {
            result += a[i];
        };
    };

    return result;
};

var sumOfOddResult = sumOfOdd([7, 5, 3, 2, 1, 8, 9, 5, 5]);
console.log("Sum of odd:", sumOfOddResult);


// Task 10


function countLetter (a) {
    var result = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === "A") {
            result++;
        } else if (a[i] === "a") {
            result++;
        };
    };

    return result;
};

var countLetterResult = countLetter("Adam");
console.log("Count letter:", countLetterResult);


// Task 11


function stringCon (a, b) {
    var result = "";
    for (var i = 0; i < b; i++) {
        result += a;
    };

    return result;
};

var stringConResult = stringCon("bus", 5);
console.log("String concatenation:", stringConResult);


// Task 12


function stringInput (a) {
    return typeof a === "string";
};

var stringInputResult = stringInput(909);
console.log("Is input string?", stringInputResult);


// Task 13


function blankString (a) {
    if (typeof a !== "string") {
        return false;
    };

    for (var i = 0; i < a.length; i++) {
        if (a[i] !== " ") {
            return false;
        };
    };

    return true;
};

var blankStringResult = blankString("    ");
console.log("Is string blank?", blankStringResult);


// Task 14


function multiplyString (a, b) {
    if (b < 1) {
        b = 1;
    };

    var result = "";
    for (var i = 0; i < b; i++) {
        result += a;
    };

    return result;
};

var multiplyStringResult = multiplyString("Rome", 5);
console.log("Multiply string result:", multiplyStringResult);


// Task 15


function countLetterOccurrences (a, b) {
    var result = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === b) {
            result++;
        };
    };

    return result;
};

var countLetterOccurrencesResult = countLetterOccurrences("desert", "e");
console.log("Count letter occurrences:", countLetterOccurrencesResult);


// Task 16


function firstLetterOccurrence (a, b) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === b) {
            return i;
        };
    };

    return -1;
};

var firstLetterOccurrenceResult = firstLetterOccurrence("mountain", "s");
console.log("First letter occurrence:", firstLetterOccurrenceResult);


// Task 17


function lastLetterOccurrence (a, b) {
    for (var i = a.length; i > 0; i--) {
        if (a[i] === b) {
            return i;
        };
    };

    return -1;
};

var lastLetterOccurrenceResult = lastLetterOccurrence("river", "i");
console.log("Last letter occurrence:", lastLetterOccurrenceResult);


// Task 18


function stringToArray (a) {
    var result = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== " ") {
            result[i] = a[i];
        } else {
            result[i] = null;
        };
    };

    return result;
};

var stringToArrayResult = stringToArray("How's going?");
console.log("My new array:", stringToArrayResult);


// Task 19


function primeNumber (a) {
    if (a <= 1) {
        return false;
    };

    for (var i = 2; i < a; i++) {
        if (a % i === 0) {
            return false;
        };
    };

    return true;
};

var primeNumberResult = primeNumber(6);
console.log("Is this prime number?", primeNumberResult);


// Task 20


function replaceSpace (a, b) {
    var result = "";

    for (var i = 0; i < a.length; i++) {
        if (a[i] === " ") {
            result += b;
        } else {
            result += a[i];
        };
    };

    return result;
};

var replaceSpaceResult = replaceSpace("Where's my hat?", "~");
console.log(replaceSpaceResult);


// Task 21


function shortString (a, b) {
    var result = "";

    for (var i = 0; i < b; i++) {
        result += a[i];
    };

    result += "...";

    return result;
};

var shortStringResult = shortString("How do get there?", 6);
console.log(shortStringResult);


// Task 22


function convertArray (a) {
    var result = [];

    for (var i = 0; i < a.length; i++) {
        if (typeof a[i] === "number") {
            result[i] += a[i];
        };
    };

    return result;
};

var convertArrayResult = convertArray(["56", "undefined", "Yes", "3e+5", Infinity]);
console.log(convertArrayResult);


// Task 23


function retirement(a, b) {
    if (a === "female") {
        if (b > 0 && b < 60) {
            var result = 60 - b;
            return "You have " + result + " more years to retire.";
        } else if (b >= 60) {
            return "You're already retired!";
        } else {
            return "Invalid age input.";
        }
    } else if (a === "male") {
        if (b > 0 && b < 65) {
            var result = 65 - b;
            return "You have " + result + " more years to retire.";
        } else if (b >= 65) {
            return "You're already retired!";
        } else {
            return "Invalid age input.";
        }
    } else {
        return "Wrong input";
    };
};


var retirementResult = retirement("male", 55);
console.log(retirementResult); // "You have 10 more years to retired."


// Task 24


function humanizedNumber(a) {
    if (a === 0) {
        return a;
    } else if (a % 100 >= 11 && a % 100 <= 13) {
        return a + "th";
    } else if (a % 10 === 1) {
        return a + "st";
    } else if (a % 10 === 2) {
        return a + "nd";
    } else if (a % 10 === 3) {
        return a + "rd";
    } else {
        return a + "th";
    }
}

var humanizedNumberResult = humanizedNumber(111);
console.log("Humanized number is:", humanizedNumberResult);


// Task 25


function insertString(a, b, c) {
    if (c === undefined || c === null) {
        c = 0;
    };

    var result = "";

    for (var i = 0; i < c; i++) {
        result += a[i];
    };

    result += b;

    for (var i = c; i < a.length; i++) {
        result += a[i];
    };

    return result;
}

var insertStringResult = insertString("Today is a nice day.", "really ", 11);
console.log(insertStringResult);


// Task 26


function arrayToString (a) {
    var result = "";

    for (var i = 0; i < a.length; i++) {
        if (a[i] !== undefined && a[i] !== null && !Number.isNaN(a[i]) && a[i] !== Infinity && a[i] !== "") {
            result += a[i] + " ";
        };
    };

    return result;
};

var arrayToStringResult = arrayToString([3, false, -22, undefined, 33, null, "", NaN]);
console.log("The new string is:", arrayToStringResult);


// Task 27


function falsyValues(a) {
    var result = [];

    for (var i = 0; i < a.length; i++) {
        if (a[i]) {
            result[result.length] = a[i];
        };
    };

    return result;
};

var falsyValuesResult = falsyValues([1, 'hello', '', 42, false, undefined, null, true, NaN]);
console.log("Array with no falsy values:", falsyValuesResult);


// Task 28


function reverseNumber(number) {
    var numString = number + "";
    var result = [];

    for (var i = numString.length - 1; i >= 0; i--) {
        result += numString[i];
    };

    return +result;
};

var reverseNumberResult = reverseNumber(78329);
console.log("Result of reversed number:", reverseNumberResult);


// Task 29


function lastElement(arr, n) {
    if (n === undefined) {
        return arr[arr.length - 1];
    };

    var result = [];

    for (var i = arr.length - n; i < arr.length; i++) {
        result[result.length] = arr[i];
    };

    return result;
};


var lastElementResult = lastElement([7, 9, 0, -2], 2);
console.log("Result of last element:", lastElementResult);


// Task 30


function preFilledArr (a, b) {
    if (b === undefined) {
        b = "null";
    };

   var result = [];
   
   for (i = 0; i < a; i++) {
    result[result.length] = b;
   };
   return result;
};

var preFilledArrResult = preFilledArr(2, 5);
console.log("Result of pre-filled array:", preFilledArrResult);


// Task 31


function perfectNum(number) {
    if ( number <= 0) {
        console.log ("Number is zero or below!");
        return;
    }

    var sum = 0;

    for (var i = 1; i < number; i++) {
        if (number % i === 0 ) {
        sum += i;
    };
};

    if (sum === number ) {
        return number + " is a perfect number";
    } else {
        return number + " is not a perfect number";
    };
};


var perfectNumResult = perfectNum(28);
console.log("Result of number:", perfectNumResult);


// Task 32


function findWord(string, word) {
    var count = 0;
    var container = "";

    for (var i = 0; i <= string.length; i++) {
        if (string[i] === " " || i === string.length) { 
            if (container === word) {
                count++;
            }
            container = "";
        } else {
            container += string[i];
        };
    };

    return "'" + word + "' was found " + count + " times";
};


var findWordResult = findWord("The quick brown fox and small fox", "fox");
console.log(findWordResult);


// Task 33


function hiddenEmail(email) {
    var hiddenEmail = "";
    var atIndex = -1;

    for (var i = 0; i < email.length; i++) {
        if (email[i] === "@") {
            atIndex = i;
            break;
        };
    };

    for (var i = 0; i < email.length; i++) {
        if (i < 3) {
            hiddenEmail += email[i];
        } else if (i === 3) {
            hiddenEmail += "...";
        } else if (i >= atIndex) {
            hiddenEmail += email[i];
    }
    };

    return hiddenEmail;
};


var hiddenEmailResult = hiddenEmail("myemailaddress@bgit.rs");
console.log("Hidden email is:", hiddenEmailResult);


// Task 34


function findMostFrequent(array) {
    var maxFrequency = 0;
    var mostFrequentItem = null;
    
    for (var i = 0; i < array.length; i++) {
        var currentFrequency = 0;

        for (var j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                currentFrequency++;
            };
        };

        if (currentFrequency > maxFrequency) {
            maxFrequency = currentFrequency;
            mostFrequentItem = array[i];
        };
    };

    return mostFrequentItem;
};


var findMostFrequentResult = findMostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);
console.log("The most frequent item is:", findMostFrequentResult);


// Task 35


function checkElement (e, a) {
    var result = 'No';
    for (var i = 0; i < a.length; i++) {
        if (e === a[i]) {
            result = 'Yes';
        };
    };
    return result;
};

var checkElementResult = checkElement(1, [5, -4.2, 3, 7]);
console.log("Does the element exist in the array?", checkElementResult);


// Task 36


function multiplyPositive (a) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] >= 0) {
            a[i] = a[i] * 2;
        };
    };

    return a;
};

var multiplyPositiveResult = multiplyPositive([-3, 11, 5, 3.4, -8]);
console.log("A new array with multiplied positive numbers:", multiplyPositiveResult);


// Task 37


function findMin (a) {
    var minValue = a[0];
    var index = 0;

    for (var i = 1; i < a.length; i++) {
        if (a[i] < minValue) {
            minValue = a[i];
            index = i;
        };
    };

    return minValue + " at index " + index;
};

var findMinResult = findMin([4, 2, 2, -1, 6]);
console.log("Minimum value is", findMinResult);


// Task 38


function findSecondSmall(a) {
    var smallest = a[0];
    var secondSmallest = a[0];

    for (var i = 1; i < a.length; i++) {
        if (a[i] < smallest) {
            secondSmallest = smallest;
            smallest = a[i];
        } else if (a[i] > smallest && (a[i] < secondSmallest || smallest === secondSmallest)) {
            secondSmallest = a[i];
        }
    }

    return secondSmallest;
}

var findSecondSmallResult = findSecondSmall([4, 2, 2, -1, 6]);
console.log("Second smallest number:", findSecondSmallResult);


// Task 39


function positiveSum (a) {
    var sum = 0;

    for (var i = 0; i < a.length; i++) {
        if (a[i] >= 0) {
            sum += a[i];
        };
    };

    return sum;
};

var positiveSumResult = positiveSum([3, 11, -5, -3, 2]);
console.log("Sum of positive elements:", positiveSumResult);


// Task 40


function isSymmetric(a) {
    for (var i = 0; i < a.length / 2; i++) {
        if (a[i] !== a[a.length - 1 - i]) {
            return "isn't symmetric";
        };
    };
    return "is symmetric";
};

var isSymmetricResult = isSymmetric([3, 4, 12, 8]);
console.log("The array", isSymmetricResult);


// Task 41


function intertwineArrays(a, b) {
    var intertwinedArray = [];
    var index = 0;

    for (var i = 0; i < a.length; i++) {
        intertwinedArray[index] = a[i];
        index++;
        intertwinedArray[index] = b[i];
        index++;
    };

    return intertwinedArray;
};

var intertwineArraysResult = intertwineArrays([4, 5, 6, 2], [3, 8, 11, 9]);
console.log("Intertwined array:", intertwineArraysResult);


// Task 42


function concatenateArrays(a, b) {
    var concatenatedArray = [];
    var index = 0;

    for (var i = 0; i < a.length; i++) {
        concatenatedArray[index] = a[i];
        index++;
    };

    for (var i = 0; i < b.length; i++) {
        concatenatedArray[index] = b[i];
        index++;
    };

    return concatenatedArray;
};

var concatenateArraysResult = concatenateArrays([4, 5, 6, 2], [3, 8, 11, 9]);
console.log("Concatenated array:", concatenateArraysResult);


// Task 43


function deleteElement(a, b) {
    var result = [];

    for (var i = 0; i < b.length; i++) {
        if (b[i] !== a) {
            result[result.length] = b[i];
        };
    };

    return result;
};

var deleteElementResult = deleteElement(2, [4, 6, 2, 8, 2, 2]);
console.log("Output array:", deleteElementResult);


// Task 44


function newArray (e, p, a) {
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
    
    return newArray;
};

var newArrayResult = newArray(78, 3, [2, -2, 33, 12, 5, 8]);
console.log("New array:", newArrayResult);


// Task 45


function switchMaxMin(a) {
    var minValue = a[0];
    var maxValue = a[0];

    var minIndex = 0;
    var maxIndex = 0;

    for (var i = 0; i < a.length; i++) {
        if (a[i] > maxValue) {
            maxValue = a[i];
            maxIndex = i;
        }

        if (a[i] < minValue) {
            minValue = a[i];
            minIndex = i;
        };
    };

    a[minIndex] = maxValue;
    a[maxIndex] = minValue;

    return a;
};

var switchMaxMinResult = switchMaxMin([ 3, 500, 12, 149, 53, 414, 1, 19 ]);
console.log("New switched array:", switchMaxMinResult);


// Task 46


function transformArray (a) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] <= 0) {
            a[i] = 20;
        } else {
            a[i] = (a[i] / 2) + 5;
        };
    };
    
    return a;
};

var transformArrayResult = transformArray([ 3, 500, -10, 149, 53, 414, 1, 19 ]);
console.log("Result of transformed array:", transformArrayResult);


// Task 47


function assignGrades(students, points) {
    var result = "";
    for (var i = 0, j = 0; i < students.length && j < points.length; i++, j++) {
        if (points[j] >= 51 && points[j] <= 60) {
            result += students[i] + " acquired " + points[j] + " points and earned 6.\n";
        } else if (points[j] >= 61 && points[j] <= 70) {
            result += students[i] + " acquired " + points[j] + " points and earned 7.\n";
        } else if (points[j] >= 71 && points[j] <= 80) {
            result += students[i] + " acquired " + points[j] + " points and earned 8.\n";
        } else if (points[j] >= 81 && points[j] <= 90) {
            result += students[i] + " acquired " + points[j] + " points and earned 9.\n";
        } else if (points[j] >= 91 && points[j] <= 100) {
            result += students[i] + " acquired " + points[j] + " points and earned 10.\n";
        } else {
            result += students[i] + " acquired " + points[j] + " points and failed to complete the exam.\n";
        }
    }
    return result;
};

var assignGradesResult = assignGrades(
    ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"],
    [50, 39, 63, 72, 99, 51, 83, 59]
);
console.log(assignGradesResult);


// Task 48


function addAndSubtract () {
    var finalSum = 0;

    for (var i = 1; i <= 1000; i++) {
        if (i % 2 === 0) {
            finalSum += i;
        };
    };

    for (var j = 1; j <= 500; j++) {
        if (j % 2 !== 0) {
            finalSum -= j;
        };
    };

    finalSum *= 12.5;
    return finalSum;
};

console.log("Result is:", addAndSubtract());


// Task 49


function twoLetterString(a) {
    var result = "";

    for (var i = 0; i < a.length; i++) {
        if (typeof a[i] === "string" && a[i].length >= 2) {
            result += a[i][0] + a[i][1];
        };
    };

    return result;
};

var twoLetterStringResult = twoLetterString([ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]);
console.log("Two letter string:", twoLetterStringResult);


// Task 50


function reversedString (a) {
    var result = "";

    for (var i = a.length - 1; i >= 0; i--) {
        result += a[i];
    };

    return result;
};

var reversedStringResult = reversedString("Belgrade Institute of Technology");
console.log("Output of reversed string:", reversedStringResult);


// Task 51


function generateCombinations() {
    var count = 0;

    for (var i = 1; i <= 7; i++) { 
        for (var j = i + 1; j <= 7; j++) { 
            console.log(i, j);
            count++;
        };
    };

    return count;
};

var generateCombinationsResult = generateCombinations(7);
console.log("Total combinations:", generateCombinationsResult);


// Task 52


function isPrime(a) {
    if (a <= 1) {
        return false;
    };

    for (var i = 2; i < a; i++) {
        if (a % i === 0) {
            return false;
        };
    };

    return true;
};

var isPrimeResult = isPrime(17);
console.log("Is this number a prime number?", isPrimeResult);


// Task 53


function palindrome (a) {
    var newString = "";
    var oldString = "";

    for (var i = a.length - 1; i >= 0; i--) {
        if (a[i] !== " ") {
            newString += a[i];
        };
    };

    for (var j = 0; j < a.length; j++) {
        if (a[j] !== " ") {
            oldString += a[j];
        };
    };

    if (newString === oldString) {
        return true;
    } else {
        return false;
    };
};

var palindromeResult = palindrome("a nut for a jar of tuna");
console.log("Is this palindrome?", palindromeResult);


// Task 54


function commonDivisor(a, b) {
    var divisor = 1;

    for (var i = 1; i <= a && i <= b; i++) {
        if (a % i === 0 && b % i === 0) {
            divisor = i;
        };
    };

    return divisor;
};

var commonDivisorResult = commonDivisor(192, 42);
console.log("Greatest divisor is:", commonDivisorResult);


// Task 1 Predefined Functions


function convertToNumbers(a) {
    var result = [];

    for (var i = 0; i < a.length; i++) {
        var num = parseFloat(a[i]);
        if (!isNaN(num) && isFinite(num)) {
            result.push(num);
        };
    };

    return result;
}

var convertToNumbersResult = convertToNumbers(["1", "21", undefined, "42", "1e+3", Infinity]);
console.log("The result of converted numbers:", convertToNumbersResult);


// Task 2


function arrayIntoString (a) {
    var result = "";

    for (var i = 0; i <= a.length; i++) {
        if (!isNaN(a[i]) && isFinite(a[i]) && a[i] !== null && a[i] !== undefined) {
            result += a[i];
        };
    };

    return result;
};

var arrayIntoStringResult = arrayIntoString([NaN, 0, 15, false, -22, '', undefined, 47, null]);
console.log("Array into string result:", arrayIntoStringResult);


// Task 3


function filteredArray(a) {
    var result = [];

    for (var i = 0; i < a.length; i++) {
        if (a[i]) {
            result.push(a[i]);
        };
    };

    return result;
};

var filteredArrayResult = filteredArray([NaN, 0, 15, false, -22, '', undefined, 47, null]);
console.log("Result of filtered array:", filteredArrayResult);


// Task 4


function countInteger (a) {
    var count = 0;

    for (var i = 0; i <= a.length; i++) {
        if (Number.isInteger(a[i])) {
            count++;
        };
    };

    return count;
};

var countIntegerResult = countInteger([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]);
console.log("The number of integer values:", countIntegerResult);


// Task 5


function floatCount(a) {
    var count = 0;

    for (var i = 0; i < a.length; i++) {
        if (typeof a[i] === 'number' && !Number.isInteger(a[i])) {
            count++;
        };
    };

    return count;
};

var floatCountResult = floatCount([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]);
console.log("The number of float values:", floatCountResult);``