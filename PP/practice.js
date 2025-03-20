// Task 1 - Map callback function from scratch


const map = function (arr, cb) {
    
    const result = []; // Create an empty array to store results
  
    for (let i = 0; i < arr.length; i++) { // Loop through each element
      const processed = cb(arr[i]); // Appement
      result[i] = processed; // Store the result in the new array
    };
  
    return result; // Return the transformed array
  };


  const double = function (num) {
    return num * 2;
  };
  
  console.log(map([1, 2, 3, 4], double)); // [2, 4, 6, 8]


// Task 2 - Concatenate Strings in Array
// Write a function concatenateStrings that takes an array of strings and a callback.
// The callback should join all the strings in the array into one string, separated by spaces.


  function concatenateStrings (arr, callback) {


    let newString = "";

    for (let i = 0; i < arr.length; i++) {
      newString += callback(arr[i]);
    }


    return newString.trim();  
  };


  function joinStrings (word) {
    return word + " ";
  }


  console.log(concatenateStrings(["Hello", "world", "from", "JavaScript"], joinStrings));
  

  // Task 3
  // Filter numbers array with starting with index "startIndex" and multiply with 2 and return new modified numbers array


  function reduce (arr, cb, startIndex) {
    if (typeof startIndex !== "number" || typeof startIndex === "function") {
      startIndex = 2;
    };
  
    if (typeof callback !== "function") {
      return "You don't have a callback!";
    };
  
    let temp = [];
  
    for (let i = startIndex; i < arr.length; i++) {
       temp[temp.length] = cb(arr[i]);
    };
  
    arr = temp;
    return arr;
  };

  const callback = function (num) {
    return num * 2;
  };
  
  
  let numbers = [3, 5, 2, 6, 2];
  
  
  console.log(reduce(numbers, callback, 3));

  
// Task 4 Find Maximum or Minimum Number in Array
// Write a function findMax or findMin that takes an array of numbers and a callback function. The callback should return the maximum or minimum number in the array


function compare(arr, callback) {
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    result = callback(arr[i], result);
  };

  return result;
};

function minCheck(num, min) {
  if (num < min) {
    min = num;
  };
  return min;
};

function maxCheck(num, max) {
  if (num > max) {
    max = num;
  }
  return max;
};

console.log(compare([5, 3, 8, 1], minCheck));