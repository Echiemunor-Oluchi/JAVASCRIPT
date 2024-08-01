// Higher order functions
// Higher order functions are functions that take another function as a parameter.

// The function passed as a parameter is called a callback function

function sayHello() {
  alert("Hello");
}

function square(n) {
  return n * n;
}

function cube(callback, n) {
  return callback(n) * n;
}

console.log(cube(square, 3));

// Higher order functions on arrays
// 1. forEach
// 2. map
// 3. filter
// 4. find
// 5. findIndex
// 6. some
// 7. every
// 8. sort

const names = [
  "Martins",
  "Kyle",
  "James",
  "Jo",
  "Edu",
  "Jordan",
  "David",
  "Peter",
  "Paul",
];

// questions: from this array, filter out the names whose length is less than 5 after names that starts with E has been filtered out.

let newNames = [];

function saveNamesNotStartingWithE(arrayNames) {
  for (let i = 0; i < arrayNames.length; i++) {
    if (arrayNames[i][0] !== "E") {
      newNames.push(arrayNames[i]);
    }
  }
}

saveNamesNotStartingWithE(names);

console.log(newNames);
const longNames = [];

const removeNamesLessThan5 = (array) => {
  for (let i = 0; i < array.length; i++) {
    if(array[i].length >= 5) {
      longNames.push(array[i]);
    }
  }
};

removeNamesLessThan5(newNames);
console.log(longNames);

// console.log(findFirstIndexOfLetterE(names));

// const removeElement = (index, array) => {
// array.splice(index, 1);
// };

// removeElement(findFirstIndexOfLetterE(names), names);
// console.log(names);



//Class for Monday 15th July, 2024
const keyword = "mouse";

const newArr = names
.filter((elem, i, arr) => elem[0] === "E")
.filter((elem, i) => elem.length > 4);

console.log(newArr);

// forEach
let btns = document.querySelectorAll(".btn");

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    console.log(i);
  });
});

// map
const namesWithNum = names.map((name, i) => {
  if (name === "Jo") {
    name = "Joseph";
    return name;
  }
  return `${name} ${name.length}`;
});
console.log(namesWithNum);

// reduce
const numbers = [23, 12, 4, 5, 6];

const total = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(total);

// find
const itemFound = numbers.find((num) => num === 4);
console.log(itemFound);

// findIndex
const itemIndex = numbers.findIndex((num) => num === 4);
console.log(itemIndex);

// some
const numberGreaterthanTen = numbers.some((num) => num > 10);
console.log(numberGreaterthanTen);

// every
const allNumberGreaterthanTen = numbers.every((num) => num > 10);
console.log(allNumberGreaterthanTen);

// sort
const fruits = ["Mango", "Guava", "Orange", "Apple", "Pineapple"];
const newNumbers = [1, 3, 37, 9, 10];

const sortedNumbers = [...newNumbers];

sortedNumbers.sort((a, b) => a - b);
sortedNumbers.sort((a, b) => b - a);

const users = [
  {
    firstname: "Smith",
    lastname: "Jordan",
    age: 20,
  },
  {
    firstname: "Smith",
    lastname: "Jordan",
    age: 20,
  },
  {
    firstname: "Smith",
    lastname: "Jordan",
    age: 20,
  },
  {
    firstname: "Smith",
    lastname: "Jordan",
    age:20,
  },
];



