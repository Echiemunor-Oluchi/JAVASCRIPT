
console.log(4 + 4);
console.log('welcome to javascript class');

// Data types


//ESC-Vsyntax for variable declaration
//const and let

const gravity = 10;
const firstName = 'Oluchi';
const dateOfBirth = '02/07/2003';
const skyIsBlue = true;


//Using the 'let' keyword
let age = 10;
age = 11;

//type of operator
console.log(typeof 10);
console.log(typeof firstName);
console.log(typeof skyIsBlue);

//non-primitive
//object
const person = {
    firstName: "Smith",
    lastName: "Jordan",
    age: 20,
    isMarried: false,
    nextOfKin: undefined,
    numOfSocialMediaAcc: null,
}

//function
function login(){
    console.log("Login successful");
}

//function invocation/calling
login();

//arrays
const numbers = [10, 57, 19, 4, 6];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);


//Adsignment for 2nd May, 2024
// Number 1
let challenge = 'Learning javascript is fun';
console.log(challenge);

// Number 2: To create an object
const people ={
    Name: 'Oluchi',
    Age: '20',
}

console.log(people);

//Number 3: To declare an array named fruits
const fruits = ['apple', 'orange', 'pawpaw'];

console.log(fruits);

//Number 4: To create an object named car
const car ={
    Brand:'Benz',
    Model:'Benz C',
    Year: '2024',
}

console.log("Brand:" + car.Brand);
console.log("Model:" + car.Model);
console.log("Year:" + car.Year);

//Number 5: To create an array named products

const products = ['Dove','Milo','Bard'];
console.log(products[0]);
console.log(products[1]);
console.log(products[2]);

//Number 6: To declare an array named even Numbers
const evenNumbers = [2, 4, 6, 8, 10];
console.log(evenNumbers);

