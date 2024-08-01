// DESTRUCTURING

// Array Destructuring
const numbers = [1, 2, 3, 4];

numbers[500];

let [one, two, , four, five] = numbers;

console.log(one, two, four, five);

// Destructuring Objects

let smartPhone = {
  brand: "Samsung",
  model: "Galaxy S24 Ultra",
  color: {
    cyan: "cyan",
    black: "black",
    gold: "gold",
  },
  storage: {
    storageA: 256,
    storageB: 512,
  },
  ram: 12,
  battery: 6000,
  has5G: true,
  waterResistant: true,
  makeACall: function () {
    console.log(`${this.brand} is calling`);
  },
  sendMessage: () => {
    console.log(`${this.brand} is sending a message`);
  },
  displayBrand() {
    console.log(this.brand);
  },
};

smartPhone.displayBrand();
smartPhone.makeACall();
smartPhone.sendMessage();

// destructuring object
let {
  model,
  battery,
  color: { cyan },
} = smartPhone;
console.log(model, battery, cyan);

// renaming during destructuring
let { brand: b } = smartPhone;
console.log(b);

// let btn = document.querySelector(".btn");

// btn.addEventListener("click", function () {
//   console.log(this.innerText);
// });

// SPREAD OPERATOR (...)
const primeNumbers = [2, 3, 5, 7, 11, 13, 17];
const [numTwo, numThree, ...nums] = primeNumbers;
console.log(nums);

const undoStack = [];
undoStack.push([...primeNumbers]);
console.log(undoStack);
primeNumbers.push(19);
console.log(primeNumbers);
undoStack.push([...primeNumbers]);
console.log(undoStack);
primeNumbers.push(23);
console.log(primeNumbers);

const smartPhone2 = { ...smartPhone, model: "Galaxy S20 Ultra" };
console.log(smartPhone2);