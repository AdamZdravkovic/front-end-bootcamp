// Task 1


(function () {
    let arr = [1, 2, 3, 4, 5];
    let result = [];

    let temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
    };

    console.log(result);
})();


// Task 2


(function (a, b) {
    console.log(a * b);
})(4, 5);


// Task 3


(function (a) {
    let newArray = "";
    let result = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] === "m" || a[i] === "M") {
            newArray += "*";
            result++;
        } else {
            newArray += a[i];
        };
    };

    console.log(newArray, result);
})("programMing");


// Task 4


function emailSuggestion (a, b) {
    return function () {
        console.log(a.toLowerCase() + "." + b.toLowerCase() + "@gmail.com");
    };
};

const emailFunction = emailSuggestion("Pera", "Peric");
emailFunction();


// Task 5


function decValue (a) {
    return function () {
        let decimal = parseInt(a, 8);
        console.log(decimal);
    };
};

const decValueResult = decValue(34);
decValueResult();

// Task 6


function validatePassword(password, successCallback, errorCallback) {
    if (password.length < 6) {
      errorCallback("Password must be at least 6 characters long.");
      return;
    };
  
    let hasDigit = false;
    for (let i = 0; i < password.length; i++) {
      if (password[i] >= '0' && password[i] <= '9') {
        hasDigit = true;
        break;
      };
    };
  
    if (hasDigit) {
      successCallback("Password is valid.");
    } else {
      errorCallback("Password must contain at least one digit.");
    };
  };
  
  function successCallback(message) {
    console.log(message);
  };
  
  function errorCallback(message) {
    console.log(message);
  };
  
  validatePassword("JSGuru9", successCallback, errorCallback);


// Task 7


function filterArray(array, callback) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        result.push(array[i]);
      };
    };
    return result;
  };
  
  function isOdd(num) {
    return num % 2 !== 0;
  };
  
  console.log(filterArray([2, 8, 11, 4, 9, 3], isOdd));


// Task 8


function hasFive(string, callback) {
    for (let i = 0; i < string.length; i++) {
        if (callback(string[i])) {
            return true;
        };
    };
    return false;
};

function checkNumber(char) {
    return char === "5";
};

console.log(hasFive("Adam5Adam", checkNumber));


// Task 9


function replaceJS(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'J' && str[i + 1] === 'S') {
        result += '**';
        i++;
      } else {
        result += str[i];
      };
    };

    return result;
  };
  
  console.log(replaceJS("Programming in JS is super interesting!"));


  // Task 10


function insertCharacter (string, index, letter) {
    let newArr = "";

    for (let i = 0; i < index - 1; i++) {
            newArr += string[i];
        };

    newArr += letter;

    for (let i = index - 1; i < string.length; i++) {
        newArr += string[i];
    };

    return newArr;
};

 console.log(insertCharacter("Goo morning", 4, 'd'));


 // Task 11


 function deleteCharacter (string, index) {
    let newStr = "";

    for (let i = 0; i < string.length; i++) {
        if (i !== index) {
            newStr += string[i];
        };
    };

    return newStr;
 };

 console.log(deleteCharacter("Goodd morning!", 3));


 // Task 12


 function removeEverySecond (array) {
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        newArr.push(array[i]);
        i++;
    };

    return newArr;
 };

 console.log(removeEverySecond([3, 5, 1, 8, 90, -4, 23, 1, 67]));


 // Task 13


 function doubleBetween (array, start, end) {
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        if (i < start || i > end) {
            newArr.push(array[i]);
        } else {
            array[i] *= 2;
            newArr.push(array[i]);
        };
    };

    return newArr;
 };

 console.log(doubleBetween([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6));


 // Task 14


 function isSubset (a, b) {
    for (let i = 0; i < a.length; i++) {
        let result = false;

        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                result = true;
            };
        };
            if (!result) {
                return false;
        };
    };

    return true;
 };

 console.log(isSubset([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]));


 // Task 15


 function sortByLetterA(arr) {
    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = i + 1; j < arr.length; j++) {
            let countA1 = 0;
            let countA2 = 0;

            for (let k = 0; k < arr[i].length; k++) {
                if (arr[i][k] === 'a' || arr[i][k] === 'A') {
                    countA1++;
                };
            };

            for (let k = 0; k < arr[j].length; k++) {
                if (arr[j][k] === 'a' || arr[j][k] === 'A') {
                    countA2++;
                };
            };

            if (countA1 > countA2) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            };
        };
    };

    return arr;
}
console.log(sortByLetterA(['apple', 'tea', 'amazing', 'morning', 'JavaScript']));


// Task 16


function nextDay() {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    console.log(today.getDate() + ". " + (today.getMonth() + 1) + ". " + today.getFullYear() + ".");
};

nextDay();


// Task 17


function previousDay() {
    const today = new Date();
    today.setDate(today.getDate() - 1);
    console.log(today.getDate() + ". " + (today.getMonth() + 1) + ". " + today.getFullYear() + ".");
};

previousDay();


// Task 18


function alignRight(arr) {
    let maxLength = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let length = 0;

        if (num === 0) {
            length = 1;
        } else {
            let tempNum = num;
            for (let j = tempNum; j >= 1; j = j / 10) {
                length++;
            };
        };

        if (length > maxLength) {
            maxLength = length;
        };
    };

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let length = 0;

        if (num === 0) {
            length = 1;
        } else {
            let tempNum = num;
            for (let j = tempNum; j >= 1; j = j / 10) {
                length++;
            };
        };

        let spaces = maxLength - length;
        let spaceStr = "";

        for (let j = 0; j < spaces; j++) {
            spaceStr += " ";
        };

        console.log(spaceStr + num);
    };
};

alignRight([78, 111, 4, 4321]);