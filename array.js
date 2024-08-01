//how to create an array
//Array constructor

let newArray = Array(1, 2, 3, 4); //Do not use Array constructors
console.log(newArray);

//const numbers = Array(6).fill(4);

//Array literals
const numbers = [6, 10, 14, 20, 24, 4];
console.log(numbers);

//modifying array Element
numbers[0] = 12;
numbers[2] = 16;
console.log(numbers);

//length of an array
console.log(numbers.length);

//Methods to manipulate array
//1. concat
const firstArr = [1, 2, 3];
const secondArr = [4, 5, 6];
const thirdArr = firstArr.concat(secondArr);
console.log(thirdArr);

// 2. indexOf: To check if an item exist in an array. If it exists it returns the index else it returns -1.
const fruits = ["Banana", "Pawpaw", "Orange"];
const evenNumbers = [4, 6, 8];
console.log(fruits.indexOf("Pawpaw"));
console.log(evenNumbers.indexOf(8));

// 3. lastIndexOf: works exactly as index of but returns the last occurrence

// 4. includes
console.log(fruits.includes("pawpaw"));
// 5. Array.isArray
console.log(Array.isArray(fruits));

// 6. toString
console.log(fruits.toString());
// 7. join
console.log(fruits.join("  "));
// 8. slice
console.log(fruits.slice(0, 2));
// 9. splice: splice deletes and can add an element to an array it affects the valu o the array
console.log(fruits.splice(0, 1, "Coconut"));
console.log(fruits);
// 10. push :  adding a new item at the end of the array
console.log(fruits.push("Waterlemon"));
console.log(fruits);
// pop is not commonly used, as there are other better alternatives like splice
// 11. pop: removes the last item of an array
console.log(fruits.pop());
console.log(fruits);
// avoid using shift and unshift as splice is a better method
// 12. shift: remove an item from the beginning
console.log(fruits.shift());
// 13. unshift
console.log(fruits.unshift("Coconut"));
// 14. reverse
console.log(fruits.reverse());
// 15. sort
console.log(fruits.sort());

let newNumbers = ["Pawpaw", "Pineapple", "Grape", "Apple"];
let ascOrder = newNumbers.sort();
console.log(ascOrder);

// Assignment one
// let shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// document.getElementById("products").innerHTML = shoppingCart;
// In the following shopping cart add, remove, edit items

// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'

// Assignment two
// searching item
// const newerNumbers = [20, 28, 10, 24, 30, 67];
// The user search for a number in the array using the input field,
// if the number is in the array, it returns the index, otherwise, number not found

//ASSIGNMENT ONE SOLUTION
let meatBtn = document.querySelector(".meat");
let sugarBtn = document.querySelector(".sugar");
let shoppingHolder = document.querySelector(".shopping-holder");


let shoppedArray = [
  "images/coffee.jpg",
  "images/tea.jpg",
  "images/honey.jpg",
  "images/milk.jpg",
];

shoppingHolder.innerHTML = ` `;

addImage();

meatBtn.addEventListener("click", () => {
  shoppedArray.unshift("images/meat.jpg");
  shoppingHolder.innerHTML = ` `;
  addImage();
});

sugarBtn.addEventListener("click", () => {
  shoppedArray.push("images/tea.jpg");
  shoppingHolder.innerHTML = ` `;
  addImage();
});

function addImage() {
  shoppedArray.forEach((image) => {
    shoppingHolder.innerHTML += `<img src="${image}" alt="">`;
  });
}


// function addMeat() {
//   let shoppingList = document.getElementById("shoppedProducts");

//   if (shoppedArray.includes("Meat")) {
//     alert("Meat is already in the list");
//     return;
//   }
//   shoppedArray.splice(0, 0, "Meat");
//   let modifiedArray = shoppedArray;
//   shoppingList.innerText = `Products ordered: ${modifiedArray}`;
// }

// function addSugar() {
//   let shoppingList = document.getElementById("shoppedProducts");
//   let shoppedArray = ["Milk", "Coffee", "Tea", "Honey"];
//   if (shoppedArray.includes("Sugar")) {
//     shoppingList.innerText = shoppedArray;
//   } else {
//     shoppedArray.push("Sugar");
//     let modifiedArray = shoppedArray;
//     shoppingList.innerText = `Products ordered: ${modifiedArray}`;
//   }
// }
// function removeHoney() {
//   let shoppingList = document.getElementById("shoppedProducts");
//   let shoppedArray = ["Milk", "Coffee", "Tea", "Honey"];
//   shoppedArray.splice(3, 1);
//   let modifiedArray = shoppedArray;
//   shoppingList.innerText = `Products ordered: ${modifiedArray}`;
// }

// function modifyTea() {
//   let shoppingList = document.getElementById("shoppedProducts");
//   let shoppedArray = ["Milk", "Coffee", "Tea", "Honey"];
//   shoppedArray.splice(2, 1, "GreenTea");
//   let modifiedArray = shoppedArray;
//   shoppingList.innerText = `Products ordered: ${modifiedArray}`;
// }

///////////////////////////////////////////////////////////////
// ASSIGNMENT TWO SOLUTION
function searchNumber() {
  let inputedNumber = parseInt(document.getElementById("inputNumber").value);
  let displayOutput = document.getElementById("displayOutput");
  let numberArray = [20, 28, 10, 24, 30, 67];
  let numberIndex = numberArray.indexOf(inputedNumber);
  if (numberArray.includes(inputedNumber)) {
    displayOutput.innerText = `Hurray!.This Number ${inputedNumber} is found in the array at position ${numberIndex}`;
  } else {
    displayOutput.innerText = `Oops!..Sorry this number ${inputedNumber} is not found, TryAgain!`;
  }
}

//correction
function removeHoney() {
  let indexOfHoney = shoppingCart.indexOf("Honey");
  if (indexOfHoney >= 0) {
    shoppingCart.splice(indexOfHoney, 1);
    document.getElementById("products").innerHTML = shoppingCart;
  }
}

function modifyTea() {
  let indexOfTea = shoppingCart.indexOf("Tea");
  if (indexOfTea >= 0) {
    shoppingCart.splice(indexOfTea, 1, "Green tea");
    document.getElementById("products").innerHTML = shoppingCart;
  }
}
