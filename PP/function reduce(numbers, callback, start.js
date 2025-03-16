function reduce(numbers, callback, startIndex) {
  if (typeof startIndex !== "number") {
    startIndex = 2; // default start index if not provided
  }

  if (typeof callback !== "function") {
    return "You don't have a callback!";
  }

  let accumulator = numbers[0]; // start with the first element of the array

  for (let i = startIndex; i < numbers.length; i++) {
    accumulator = callback(accumulator, numbers[i]); // accumulate result
  }

  return accumulator;
}

const callback = function (acc, num) {
  return acc + num * 2; // Example callback that doubles the number and adds to accumulator
};

let numbers = [3, 5, 2, 6, 2];

console.log(reduce(numbers, callback, 3)); // Output will be based on your logic
