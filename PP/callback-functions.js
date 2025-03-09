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


