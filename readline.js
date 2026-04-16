const readline = require('readline-sync');

// get user name
let name = readline.question("What is your name? ");
console.log("Hello, " + name + "!");

// Question 1
let question1_input = readline.questionInt("Please enter an integer value: ");
console.log("Great! You entered: " + question1_input + "\n");

// Question 2
let question2_input = readline.question("What data type is [Monday, Tuesday, Wednesday]? ");
if (question2_input.toLowerCase() === "array") {
    console.log("Congratulations, you've entered the correct response: " + question2_input + "\n");
} else {
    console.log("Incorrect. The correct answer is 'array'. You entered " + question2_input + "\n");
}

// Question 3
let question3_input = readline.questionInt('What does "10" - 2 evaluate to? ');
if (question3_input === 8) {
    console.log("Congratulations, you've entered the correct response: " + question3_input + "\n");
} else {
    console.log("Incorrect. The correct answer is 8.");
}

// Question 4
let question4_input = readline.question("What does the operator === mean? ");
let answer4 = question4_input.toLowerCase();

if (answer4 === "equality comparison" || answer4 === "equal") {
    console.log("Congratulations, you've entered the correct response: " + question4_input + "\n");
} else {
    console.log("Incorrect. It means strict equality. You entered " + question4_input + "\n");
}

// Question 5
let question5_input = readline.question('What does typeof "42" return? ');
if (question5_input.toLowerCase() === "string") {
    console.log("Congratulations, you've entered the correct response: " + question5_input + "\n");
} else {
    console.log("Incorrect. The correct answer is 'string'. You entered " + question5_input + "\n");
}