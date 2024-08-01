/*
======= fUNCTIONS =================
A function is a reusable block of code or programming statements designed to perform a 
certain task.
 
A function is declared by a function key word followed by a name, followed by parentheses(). A parentheses 
can take a parameter. If a function take a parameter it will be called with argument. A function can also take 
a default parameter. To store a data to a function, a function has to return certain data types. 
To get the value we call or invoke a function. Function makes code:

-clean and easy to read
-reusable
-easy to test

A function can be declared or created in couple of ways:

Declaration function
Expression function
Anonymous function
Arrow function
*/

// Function Declaration
//declaring a function without a parameter
function functionName() {
  // code goes here
}

functionName(); // calling function by its name and with parentheses

// Function without a parameter and return
function square() {
  let num = 2;
  let sq = num * num;
  console.log(sq);
}

square();

function addTwoNumbers() {
  let numOne = 10;
  let numTwo = 20;
  let sum = numOne + numTwo;

  console.log(sum);
}

addTwoNumbers();

// Function returning value

// Function with a parameter
function square(number) {
  return number * number;
}

function greet(name){
  console.log("Hello " + name);
}

console.log(square(10));
console.log(square(4));
square(20);

// Function with two parameters
function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo;
  return sum;
}

sumTwoNumbers(5, 50);
sumTwoNumbers(100, 200);

// Function with many parameters
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
let value = sumArrayValues(numbers); // 15
for (let i = 0; i < numbers.length; i++) {}




const price = [24, 25, 67, 78, 8, 89, 5];

//calling a function
console.log(sumArrayValues(numbers));
console.log(sumArrayValues(price));

//Problem1:
// Declare a function named sayHello that prints "Hello, world!" to the console. Call the function after declaring it.

function sayHello(){
  console.log('Hello world');
}
sayHello()

// Problem2:
// Declare a function named currentDate that returns the current date. Call the function and store the returned value in a variable, then print that variable to the console.

function currentDate(){
  return currentDate  //note: this is wrong
}


// Problem3:
// Declare a function named greet that takes one parameter name and prints "Hello, [name]!" to the console. Call the function with the argument "Alice".

function greet(name){
console.log(`Hello ${name}!`);
}

console.log(greet('Alice'));


// Problem4:
// Declare a function named add that takes two parameters a and b, adds them, and returns the result. Call the function with the arguments 5 and 3, and print the result to the console.

function add(a, b){
  return a + b;
}
console.log(add(5, 3));


// Problem5:
// Declare a function named calculateTotal that takes three parameters price, quantity, and taxRate, and returns the total cost including tax. Call the function with the arguments 100, 2, and 0.1, and print the result to the console.

function calculateTotal(price,quantity,taxRate){

  return price + quantity + taxRate
}
console.log(calculateTotal(100,2,0.1))


// Problem6: Write a function called calculateAverage that takes five parameters representing five different test scores and returns the average of these scores.

function calculateAverage(para1,para2,para3,para4,para5){  
return (para1 + para2 + para3 + para4 + para5) / 5
}
console.log(calculateAverage(1,2,3,4,5));


//Problem 7
// Define a function multiply that takes two parameters x and y and returns their product. Call this function with arguments 3 and 4, and print the result to the console.

function multiply(x,y){
return x * y;
}
console.log(multiply(2,4));

//   Anonymous Function
//   Anonymous function or without name
 
const anonymous = function () {
  console.log(
    "I am an anonymous function and my value is stored in anonymousFun"
  );
};

anonymous();

/// Expression Function
// Expression functions are anonymous functions. After we create a function without a name
//and we assign it to a variable. To return a value from the function we should call the variable

// Function expression
const squaree = function (n) {
   return n * n;
 };

 console.log(squaree(2));

//   Arrow Function
// Arrow function is an alternative to write a function, however function declaration and
// arrow function have some minor differences.
// Arrow function uses arrow instead of the keyword function to declare a function.
// Let us see both function declaration and arrow function.

// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
function squareee(n) {
  return n * n;
}
console.log(squareee(6));

// an arrow function
const squareeee = (n) => n * n;
console.log(squareeee(5));
const greett = () => console.log("Hello class");


// if we have only one line in the code block, it can be written as follows, explicit return
 const square1 = (n) => n * n; // -> 4

//   Function with default parameters
function greetings(name = "Peter") {
  let message = `${name}, welcome to 30 Days Of JavaScript!`;
  return message;
}

console.log(greetings("Paul"));

let hello = document.getElementById('Hello');
hello.addEventListener("click", () => {
 alert('Hello!');

})



//Super simple dev exercise
//7a.)create a function called 'greet' that displays the message 'Hello!' in the console. Call/run this function a few times using: greet();

function great() {
  console.log('Hello');
}
great()
great()
great()

/*7b.) Continuing from 7a, add a parameter called 'name' to the 'greet' function and display the message: 'Hello ${name}!'
Call the function a few times with different names: greet('Simon');*/

function greet2 (name){
  console.log(`Hello ${name}`);
  if (!name){
  console.log('Hi there!');
  }
}
greet2('Simon');
greet2('Oluchi');
greet2('Juliet');

/* 7c.) Try calling greet() without a name(it will display 'Hello undefined!').Modify the function so that if 'name' is undefined, it will display 'Hi there!' instead.
Hint: Use an if-statement. Since undefined is a falsy value, you can use: if (!name) {...} to check if 'name' is undefined).
*/
greet2()
greet2();

/*7d.) Create a ;function 'convertToFahrenheit(celcius)' that takes a number in degree Celcius and returns a number in degrees Fahrenheit.
.Formula: Fahrenheit = (Celcius * 9/5) + 32
.Convert To Fahrenheit(25) => 77
*/

function convertToFahrenheit (celcius){
  return Fahrenheit =  (celcius * 9/5) + 32;
}
console.log(convertToFahrenheit(25));

/*7e.) Create a function 'convertToCelcius(fahrenheit)' that takes a number in degrees Fahrenheit and returns a number in degrees Celsius.
. Formula: Celsius = (Fahrenheit - 32) * 5/9
.Convert To Celsius(86) => 30
*/

function convertToCelcius (Fahrenheit){
  return celcius = (Fahrenheit - 32) * 5/9
}
console.log(convertToCelcius(86));

/*7f.) Create a function 'convertTemperature(degrees,unit)' that takes a number and a unit ('C' or 'F'), and converts it into the other unit.
.convertTemperature(24,'C') => '77F'
.convertTemperature(86, 'F') => '30C'
*/

function convertTemperature(degrees,unit) {
  let convertedValue;
  let convertedUnit;

  if (unit === 'C'){
    convertedValue =  (degrees * 9/5) + 32;
    convertedUnit = 'F';
  }

  else if (unit === 'F'){
    convertedValue =  (degrees - 32) * 5/9;
    convertedUnit = 'C';
  }

  else{
    return 'Invalid unit'
  }

  return `${convertedValue.toFixed(0)}${convertedUnit}`;
}
console.log(convertTemperature(24, 'C'));
console.log(convertTemperature(86, 'F'));

/*7g.)Create a function convertLength(length, from, to) that takes a number and a unit ('km' or 'miles') and converts the length to another unit ('km' or 'miles').
Note: 1 mile = 1.6km(approximately).
.convertLength(50, 'miles','km') => '80 km'
.convertLength(32, 'km','miles') => '20 miles'
.convertLength(50, 'km','km') => '50 km'
*/

function convertLength (length, from, to){
  let newNumber;
  let newUnit;

if (from === 'miles'){
  newNumber = length * 1.6;
  newUnit = 'km';
  if(from === 'miles' && to === 'ft'){
    newNumber = length * 5280;
    newUnit = 'ft';
  }
}
else if(from === 'km'){
  newNumber = length / 1.6;
  newUnit = 'miles';
  if(to === 'km'){
    newNumber = length;
    newUnit = 'km';
  }
  if (from === 'km' && to === 'ft'){
    newNumber = length * 3281;
    newUnit = 'ft';
  }
}
else{
  return `Invalid unit:${from}`;
}

return `${newNumber.toFixed(0)}${newUnit}`
}
console.log(convertLength(50, 'miles', 'km'));
console.log(convertLength(32, 'km', 'miles'));
console.log(convertLength(50, 'km', 'km'));
console.log(convertLength(5, 'miles', 'km'));
console.log(convertLength(5, 'miles', 'ft'));
console.log(convertLength(5, 'km', 'ft'));
console.log(convertLength(5, 'lbs', 'lbs'));

/*7h.) Update convertLength to support converting between km, miles, and also feet.
Note: 1 mile = 5280ft,
      1km = 3281ft (approximately);
- convertLength(5, 'miles', 'km') => '8km'
- convertLength(5, 'miles', 'ft') =>
  '26400 ft'
- convertLength(5, 'km','ft') => 
  '16405 ft'*/

/*7i.) Update convertLength so that if you give it an invalid unit, it will return `Invalid unit: ${unit}`.
.convertLength(5, 'lbs','lbs') => 'Invalid unit: lbs'*/