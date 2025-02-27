// Task 1


function countVowels(a) {
    let vowelCount = 0;
    for (let i = 0; i < a.length; i++) {
      let char = a[i].toLowerCase();
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowelCount++;
      };
    };
    return vowelCount;
  };
  
  var countVowelsResult = countVowels("JavaScript");
  console.log("Vowel count:", countVowelsResult);


  // Task 2


  function combineArrays(a, b) {
    var combined = [];
    var length;
  
    if (a.length > b.length) {
      length = a.length;
    } else {
      length = b.length;
    };
  
    for (let i = 0; i < length; i++) {
      if (i < a.length) {
        combined.push(a[i]);
      }
      if (i < b.length) {
        combined.push(b[i]);
      };
    };
  
    return combined;
  };

  var combineArraysResult = combineArrays(['a','b','c'], [1,2,3]);
  console.log("Combined two arrays:", combineArraysResult);


  // Task 3


  function rotateArray (a, b) {
    var rotated = [];
  
    for (let i = b; i < a.length; i++) {
      rotated.push(a[i]);
    };
  
    for (let i = 0; i < b; i++) {
      rotated.push(a[i]);
    };
  
    return rotated;
  };
  
  var rotateArrayResult = rotateArray([1, 2, 3, 4, 5, 6], 2);
  console.log("Rotated array:", rotateArrayResult);


  // Task 4
  
  
  function convertToArray (a) {
    var result = [];
    var numberString = a + "";

    for (var i = 0; i < numberString.length; i++) {
      result[result.length] = numberString[i];
    };

    return result;
  };

  var convertToArrayResult = convertToArray(12345);
  console.log("Number to an array of digits:", convertToArrayResult);


// Task 5


  function multiplication() {
    var result = "";

    for (var i = 1; i <= 12; i++) {
        var row = "";

        for (var j = 1; j <= 12; j++) {
            row += (i * j) + "\t";
        }

        result += row + "\n";

    return "Multiplication result: " + result;
};

console.log(multiplication());


// Task 6


  function celsiusToFahrenheit(a) {
    var fahrenheit = (a * 9/5) + 32;
    return fahrenheit;
};

var celsiusToFahrenheitResult = celsiusToFahrenheit(0);
console.log("Converted value:", celsiusToFahrenheitResult, "°F");


// Task 7


const biggestNumber = function (a) {
  let count = -Infinity;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== undefined && a[i] !== null && !isNaN(a[i]) && isFinite(a[i])) {
      if (a[i] > count) {
        count = a[i];
      }
    }
  }

  return count;
};

console.log(biggestNumber([4, 8, "hello", 15, undefined, 23, null, 42]));