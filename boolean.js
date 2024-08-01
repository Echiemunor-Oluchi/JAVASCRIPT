
/*
A boolean data type represents one of the two values:true or false. Boolean 
value is either true or false. The use of these data types will be clear when you 
start the comparison operator. Any comparisons return a boolean value which is either 
true or false.
*/

// Example: Boolean Values

let isLightOn = true;
let isRaining = false;
let isHungry = false;
let isMarried = true;
let truValue = 4 > 3; // true
let falseValue = 4 < 3; // false

/* Truthy values
All numbers(positive and negative) are truthy except zero
All strings are truthy except an empty string ('')
The boolean true
*/

/* Falsy values
0
null
undefined
NaN
the boolean false
'', "", ``, empty string
*/

// Operators
// Assignment operators
// =, +=, -=, *=, /= %=
let a = 3;
let b = 2;
b = b + a; // b = 5
b += a; // b = 5
a *= b; // 3 * 5
a /= b; // 15 / 5
a %= b;

// Arithmetic operator
// Addition(+), Subtraction(-), Multiplication(), Division(/), Modulus(%), Exponential(*)

let numOne = 2;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerOf = numOne ** numTwo;

console.log(sum, diff, mult, div, remainder, powerOf);

// comparison Operators
// >, <, >=, <=, ==, ===, !=, !==
console.log(3 > 2);
console.log(3 >= 2);
console.log(3 < 2);
console.log(2 < 3);
console.log(2 <= 3);
console.log(3 == 2);
console.log(3 != 2);
console.log(3 == "3");
console.log(3 === "3");
console.log(3 !== "3");
console.log(3 != 3);
console.log(3 !== 3);
console.log(0 == false);
console.log(0 === false);
console.log(0 == "");
console.log(0 == " ");
console.log(0 === "");
console.log(1 == true);
console.log(1 === true);
console.log(undefined == null);
console.log(undefined === null);

console.log("mango".length == "avocado".length);
console.log("mango".length != "avocado".length);
console.log("mango".length < "avocado".length);
console.log("milk".length == "meat".length);
console.log("milk".length != "meat".length);
console.log("tomato".length == "potato".length);
console.log("python".length > "dragon".length);
// logical operator
// 1. OR ||
// 2. AND &&
// 3. NOT !

let boolOne = null;
let boolTwo = true;
let result = boolOne || (boolTwo && !boolTwo) || boolOne;

// increment and decrement operator
// increment : pre-increment and post-increment

let y = 5;
let nextSlide = y--;



// GPT Exercises
// Declare two Boolean variables, isTrue and isFalse, and initialize them with true and false respectively.

let isTrue = true;
let isFalse = false;

// Create a new variable result and set it to the result of isTrue && isFalse.
//Print the value of result to the console.
//Change result to isTrue || isFalse and print the value again.


//Monday 27th May, 2024
//Ternary operator
let isRainy = true;

isRainy ? console.log("It is raining") : console.log("It is not raining")

//converting to different types
let var1 = '10';
let var2 = '20';
let var3 = parseInt(var1) + parseInt(var2);
console.log(var3);

//check if an input is a number
let result1 = isNaN(10);
console.log(result1);

//window method
//alert('Welcome to class');
//prompt

function sumTwoNum(){
  let userInput1 = parseInt(prompt("Enter first number", '10'));
  let userInput2 = parseInt(prompt("Enter second number"));
  let sum = userInput1 + userInput2;
  document.getElementById('result').innerText = sum;
}


function checkPassword() {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;

  let isValid = password === confirmPassword;
  let messageDisplay = document.getElementById("message");
  isValid
    ? (messageDisplay.innerText = "Passwords matches")
    : (messageDisplay.innerText = "Passwords do not match");
}

//Assignment1: Create a function that checks if an email address contains both '@' and '.' characters,ensuring it follows a basic email format.

function checkEmailAddress(){
  let emailaddress = document.getElementById('emailaddress').value;
  let displaybox = document.getElementById('displayresult');
  let keyletter1 = '@';
  let keyletter2 = '.';
  let check = emailaddress.includes(keyletter1 && keyletter2);
  let checkstatement = check ? "Bravo! your email address is correct" : "Incorrect email address format, make sure to include special characters like @ and ."
  displaybox.innerText = checkstatement;
}

//Assignment2:  Write a function to ensure a username is at least 5 characters long but no more than 15 characters

function checkUsernameLength(){
  userInput = document.getElementById('username').value;
  userNameDisplay = document.getElementById('displayUsernameCheck');
  userNameChecker = userInput.length >= 5 && userInput.length <= 15;

 checkCondition = userNameChecker ? "Your Username is Valid" : "Username invalid! Username cannot be more than 15 characters, check again!"

 userNameDisplay.innerText = checkCondition;
}

//Assignment 3:  Write a function that checks if a user's age falls within a specific range, say 18 to 65.
function checkAge(){
  let ageInput = document.getElementById('ageInput').value;
  let eligibilityDisplay = document.getElementById('checkeligibility');
  let eligibilitychecker = ageInput >= 18 && ageInput <= 65;
  let eligibilityCondition = eligibilitychecker ? "You are an adult, you can proceed" : "Oops! you are still a small child, wait till you are 18!";
  eligibilityDisplay.innerText = eligibilityCondition;
}





//Class for Wednesday 29th May, 2024
//Assignment correction for number 1
function checkAtAndDot(email) {
  return email.includes('@') && email.includes('.');
}

let myEmail = 'easy@gmail.com';

function displayMessage() {
  let isValid = checkAtAndDot(myEmail);
  isValid ? alert('Email is valid') : alert('Email is not valid');
}

//Assignment for number 2
function checkUsernameLength(username){
  return username.length >= 5 && username.length <= 15;
}


//Classwork
//test 2 inputs: returns true if either of the input is 20 or the sum is 20
function chechIfInputAndSumIsTwenty (input1, input2){
  return input1 === 20 || input2 === 20 || input1 + input2 === 20;
} 
function displayResult() {
  chechIfInputAndSumIsTwenty() ? alert('Number is correct') : alert('Number is not correct');
}
displayResult()


//Class for Thursday 30th May, 2024

//if else
let temp = 50;
if (temp >= 30) {
  console.log('Put on the AC');
}
else {
  console.log('leave the AC off');
}




