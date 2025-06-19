// Task 1

var val1 = 1;

switch (val1) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
};


// Task 2


var val2 = 8;

switch (val2) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Input must be a number between 1 and 7");
};


// Task 3

var val3 = 5;

switch (val3) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("It's weekday");
        break;
    case 6:
    case 7:
        console.log("It's weekend");
        break;
    default:
        console.log("Input must be a number between 1 and 7");
};


// Task 4

var val4 = 8;

switch (val4) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Input must be a number between 1 and 12");
};


// Task 5


var val5 = 8;

switch (val5) {
    case 1:
        console.log("Winter");
        break;
    case 2:
        console.log("Winter");
        break;
    case 3:
        console.log("Spring");
        break;
    case 4:
        console.log("Spring");
        break;
    case 5:
        console.log("Spring");
        break;
    case 6:
        console.log("Summer");
        break;
    case 7:
        console.log("Summer");
        break;
    case 8:
        console.log("Summer");
        break;
    case 9:
        console.log("Autumn");
        break;
    case 10:
        console.log("Autumn");
        break;
    case 11:
        console.log("Autumn");
        break;
    case 12:
        console.log("Winter");
        break;
    default:
        console.log("Input must be a number between 1 and 12");
};


// Task 6

var val6 = "C";

switch (val6) {
    case "A":
        console.log("Good job");
        break;
    case "B":
        console.log("Pretty good");
        break;
    case "C":
        console.log("Passed");
        break;
    case "D":
        console.log("Not so good");
        break;
    case "F":
        console.log("Failed");
        break;
    default:
        console.log("Unknown grade");
};


// Task 7

var val7 = "Munich";

switch (val7) {
    case "Belgrade":
    case "Niš":
    case "Novi Sad":
        console.log("Serbia");
        break;
    case "Chicago":
    case "New York":
    case "Los Angeles":
        console.log("United States of America good");
        break;
    case "Munich":
    case "Dortmund":
    case "Berlin":
        console.log("Germany");
        break;
    case "Rome":
    case "Venice":
    case "Turin":
        console.log("Italy");
        break;
    case "Paris":
    case "Lyon":
    case "Lille":
        console.log("France");
        break;
    default:
        console.log("Please choose a different city");
};



// Task 8

var val8 = 5;
var val9 = 7;
var operation = "-";

var result;

switch (operation) {
    case "+":
        result = val8 + val9;
        console.log(result);
        break;
    case "-":
        result = val8 - val9;
        console.log(result);
        break;
    case "*":
        result = val8 * val9;
        console.log(result);
        break;
    case "/":
    result = val9 === 0 ? "Division by zero!" : val8 / val9;
    console.log(result);
    break;
    default:
        console.log("Wrong operator");
        break;
};
