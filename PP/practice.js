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




































  