//loops
//for loops
 let message = 'Welcome to Javascript class!';
// console.log(message);//to print this thing 100 times, you have to set a loop

//syntax for for loop
// for (initialization; condition; update){
  //statement
// }
// for(let i = 1; i <= 100; i++){
//   console.log(message, i);
// }


// Given an array let fruits = ['apple', 'banana', 'cherry', 'date'], use a for loop to print each fruit.
// let fruitArray = ['apple', 'banana', 'cherry', 'date'];
// for(let i = 0; i < fruitArray.length; i++){
//   console.log(fruitArray[i]);
// }

//Use a for loop to calculate the sum of numbers from 1 to 100.
// let sum = 0;
// for(let i = 1; i <= 100; i++){
//   sum += i;
// }
// console.log(sum);

//Use a for loop to print all even numbers between 1 and 20.
// let evenNumber = 0;
// for(let i = 1; i <= 20; i+2){
//   evenNumber += i;
// };
// console.log(evenNumber)

//Develop a small script which generate array of 5 random numbers
// let randomNumbers = [];
// for (let i = 0; i < 5; i++) {
//   let randomNumber = Math.floor(Math.random() * 50);
//   randomNumbers.push(randomNumber);
// }
// console.log(randomNumbers);


//WEDNESDAY 19TH JUNE, 2024
//while loop
// let j = 0;

// while(j <= 100){
//   console.log('Message inside while loop', j);
//   j++;
// }

//write a program to allow a user to enter a number until they enter zero, the loop should prompt the user to enter another number
//prompt a user to enter a number but if they enter 0, the program will end
// let userEntries = [];
// let input = parseInt(prompt('Enter a number'));
// userEntries.push(input);

//   while(input != 0){
//     input = parseInt(prompt('Enter a number'));
//     userEntries.push(input);0
//   }
//   userEntries.pop(0);
//   console.log(userEntries);

  //do while loop
  // let newEntries = []
  // let userInput = parseInt(prompt('Enter a number'));
  // do{
  //   let userInput = parseInt(prompt('Enter a number'));
  //   newEntries.push(userInput);

  // }while(userInput !== 0);

  // console.log(newEntries);

  //print numbers of 1 to 100
  
  let cardWrapper = document.getElementById('card-wrapper');

  for (let i = 1; i <= 100; i++){
    if (i == 50) continue;
    cardWrapper.innerHTML += `<li class = 'card'>${i}</li>`;
  }

// break
// continue
//two statements we use in for loops: break and continue

//Assignment
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

//Extract all the countries contain the word 'land' from the countries array and print it as array
let newArray = [];
for(let i = 0; i < countries.length; i++){
  if(countries[i].includes('land')){
    newArray.push(countries[i])
  }
}

//2. Find the country containing the hightest number of characters in the countries array
let longestCountry = ''
for(let i = 0; i < countries.length; i++){
  if (countries[i].length > longestCountry.length){
    longestCountry = countries[i];
  }
}
console.log(longestCountry);


//3. Extract all the countries containing only five characters from the countries array and print it as array
let newCountryArray = [];
for(let i = 0; i < countries.length; i++){
  if (countries[i].length === 5){
    newCountryArray.push(countries[i]);
  }
}
console.log(newCountryArray);

//4. Reverse the countries array and capitalize each country and stored it as an array
const reversedArray = countries.reverse();

let newCapitalizedReversedArray = [];
for(let i = 0; i < reversedArray.length; i++){
  let upperCaseArray = reversedArray[i].toUpperCase();
  newCapitalizedReversedArray.push(upperCaseArray);
}
console.log(newCapitalizedReversedArray);


//5. Use the countries array to create the following array of arrays:

// [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya','KEN',5]
// ]

const emptyArray = [];
const threeElementArray = [];

 for(let i = 0; i < countries.length; i++){
let country = countries[i];
let splicedCountry = countries[i].slice(0,3).toUpperCase();
let countryLength = countries[i].length;
  let contentArray = [country,splicedCountry,countryLength]
  threeElementArray.push(contentArray);
 }
 console.log(threeElementArray);



// solutions to Assignment
// Generate array of five random numbers and the numbers must be unique

// create an empty array to store the random numbers
// set up a loop that runs while the array length is less than or equal to 4
// generate the random number (1 - 10);
// check if the number generated is not in the array
// push the number inside the array
// print the array
// end

let randomNumbers = [];
while (randomNumbers.length <= 4) {
  let randomNum = Math.floor(Math.random() * 6) + 1;
  if (!randomNumbers.includes(randomNum)) {
    randomNumbers.push(randomNum);
  }
}
console.log(randomNumbers);
document.getElementById("result").innerText = randomNumbers;

// Nested loops
let arr = [1, 2, 3, 4];
let twoDim = [
  [1, 4, 6, 8, 3],
  [11, 2, 9, 12, 5, 7],
  [6, 8, 3, 2, 1],
  [14, 13, 10, 2, 5],
  [2, 6, 7, 8, 9, 1],
];

for (let row = 0; row < twoDim.length; row++) {
  let colLength = twoDim[row].length;
  for (let col = 0; col < colLength; col++) {
    console.log(twoDim[row][col]);
}
}

// 1. For Loop
// Problem: Calculate the Sum of an Array of Numbers
// Write a function that takes an array of numbers as input and calculates the sum of all the numbers in that array. For example, if the input array is [1, 2, 3, 4, 5], the function should return 15 because 1 + 2 + 3 + 4 + 5 = 15.

const arrNum = [2, 3, 6, 8, 9]

//Solution to Problem 1
function calculateSumOfArray(){

  
  for(i = 0; i < 5 ; i++){
    sum = inputNumber + inputNumber + inputNumber + inputNumber + inputNumber;
    let emptyArray = [];
  emptyArray.push(inputNumber);
  }

  //sumDisplay.innerText = emptyArray;
}

















// 2. While Loop
// Problem: User Login Attempt
// Simulate a user login system where the user has up to 3 attempts to enter the correct password. If the correct password is entered, display a success message. If the user fails to enter the correct password in 3 attempts, display a failure message.

// 3. Do While Loop
// Problem: Menu Selection
// Create a simple menu-driven program that displays a menu to the user and performs actions based on the user's choice. The menu should be displayed repeatedly until the user chooses to exit.

// 4. Nested If Statement
// Problem: Grade Calculation
// Write a function that takes a student's score and returns their grade based on the following criteria:

// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: <60









