//Monday 1st July, 2024
const person = {
  firstName: "John",
  lastName: "Paul",
  age: 250,
  country: "Finland",
  skills: ["HTML", "CSS", "JavaScript"],
  isMarried: true,

  // method
  getFullName: function () {
    return `${this.firstName} ${person.lastName}`;
  },
};

const person2 = {
  firstName: "John",
  lastName: "Smith",

  talk() {
    return `My lastname is ${this.lastName}`;
  },
};

let fullname = person.getFullName();
console.log(fullname);

function showElement(elem) {
  console.log(elem);
}

showElement(5);
showElement(this);

const shoppingCart = {
  items: [],

  addToCart(item) {
    this.items.push(item);
  },

  removeItem(index) {
    this.items.splice(index, 1);
  },

  sortItem() {},

  clearItems() {},

  getItems() {
    console.log(this.items);
  },
};

function addToCart() {
  let products = ["Milk", "Bread", "Sugar", "Egg"];
  let randomIndex = Math.floor(Math.random() * products.length);
  shoppingCart.addToCart(products[randomIndex]);
  shoppingCart.getItems();
}

// create  an object that models the ui of a web app

// themeMode
// switchMode
// UiElement

const uiModel = {
  themeMode: 'light',

  switchMode(){
    this.themeMode = this.themeMode === 'light' ? 'dark' : 'light';
    console.log(`Theme mode switched to ${this.themeMode}`);
  },
  
}

// accessing an object.
// 1. dot notation
// 2. bracket notation

person["firstname"];

// getting object keys
let personKeys = Object.keys(person);
console.log(personKeys);
person[personKeys[0]];

// getting object values
let personValues = Object.values(person);
console.log(personValues);

// Date object
let today = new Date();

const weekDays = ["Sunday", "Monday"];

let year = today.getFullYear();
let month = today.getMonth() + 1;
let weekDay = today.getDay();
let date = today.getDate();
let hour = today.getHours();
let minute = today.getMinutes();
let seconds = today.getSeconds();

console.log(year, month, weekDays[weekDay], date, hour, minute,seconds);

//assignment: create a user account object, give it at least 3 to 5 properties
//eg bank name, acc no, acc balance, bvn,account type
//create a function for the account,
//add money, deposit, withdraw, transfer, check your balance
//do at least three things
//create deposit method, withdraw method and get account balance method