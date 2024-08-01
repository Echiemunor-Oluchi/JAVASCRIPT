//classes
//classwork on classes
//create a car class and add 3 properties and two methods and add 2 instances of the class
// classes

// class creation
class Student {
  constructor(name, id, age) {
    this.name = name;
    this.id = id;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getId() {
    return this.id;
  }
}


const princewill = new Student("Princewill", "std-10", 10); // class instantiation
const oluchi = new Student("Oluchi", "std-2", 8);

console.log(princewill);
console.log(oluchi);

console.log(princewill.getName());
console.log(oluchi.getName());

let lists = [];

class List {
  constructor() {
    this.lists = [];
  }

  addItem(item) {
    this.lists.push(item);
  }

  getItems() {
    return this.lists;
  }
}

const list = new List();
const list2 = new List();
// const list1 = new List();

let item = {
  name: "Biscuit",
  price: 200,
  quantity: 10,
};

list.addItem(item);
list.addItem(item);
console.log(list.getItems());
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let name = document.querySelector("item-name").value;
//   let price = document.querySelector("item-name").value;
//   let quantity = document.querySelector("item-name").value;

//   let item = {
//     name,
//     price,
//     quantity,
//   };

//   list.addItem(item);
//   list.getItems()
// });


class Car {
  constructor(model, year, colour){
    this.model = model;
    this.year = year;
    this.colour = colour;
  }

  get year() {
    return this.year;
  }

  get colour(){
    return this.colour;
  }
};

const car1 = new Car('Benz', '2024', 'black');
const car2 = new Car('Ford', '2023', 'white');

class List{
constructor(itemName, price, quantity){
  this.lists = []
  this.itemName = itemName;
  this.price = price;
  this.quantity = quantity;
}

addItem(items){
  lists.push(items);
}
}

//Thursday 18th July, 2024
const itemForm = document.querySelector(".item-form");
let name = document.querySelector(".item-name");
let price = document.querySelector(".item-price");
let quantity = document.querySelector(".item-quantiy");

itemForm.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("form sumit");
});

class ListItem {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  getName() {
    return this.name;
  }

  setName(newName) {
    this.name = newName;
  }

  getQuantity() {
    return this.quantity;
  }
}

class FullList {
  constructor() {
    this.lists = [];
  }
  addItem(item) {
    this.lists.push(item);
  }

  getItems() {
    return this.lists;
  }
}

class UiManager {
  constructor(listElement) {
    this.listElement = listElement;
  }

  renderItems(items) {
    this.listElement.innerHTML = items
      .map((item) => {
        let { name, price, quantity } = item;

        return `
      <li>
        <span>${name}</span>
        <span>$${price} x ${quantity}</span>
        <span><button>edit</button> <button>delete</button></span>
 </li>
      `;
      })
      .join("");
  }
}

function checkElement(elem, message) {
  if (!elem) {
    throw new Error(`${message}`);
  }
}

const itemForm1 = document.querySelector(".item-form");
let name1 = document.querySelector(".item-name");
let price1 = document.querySelector(".item-price");
let quantity1 = document.querySelector(".item-quantity");
let listContainer = document.querySelector(".list-container");

checkElement(itemForm1, "Item form input not found");
checkElement(name1, "name input not found");
checkElement(price1, "price input not found");
checkElement(quantity1, "quantity input not found");
checkElement(listContainer, "list container input not found");

let fullList = [];

itemForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let itemName = name.value;
  let itemprice = price.value;
  let itemQuantity = quantity.value;

  let newListItem = new ListItem(itemName, itemprice, itemQuantity); // single item

  const fullist = new FullList();
  const uiManager = new UiManager(listContainer);
  fullist.addItem(newListItem);
  uiManager.renderItems(fullist.getItems());
  console.log("formsumit");
});


// class listItem

class ListItem {
  constructor(name, price, quantity, id) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  getName() {
    return this.name;
  }

  setName(newName) {
    this.name = newName;
  }

  getQuantity() {
    return this.quantity;
  }
}

class FullList {
  constructor() {
    this.lists = [];
  }

  addItem(item) {
    this.lists.push(item);
  }

  getItems() {
    return this.lists;
  }

  removeItem(id) {
    this.lists = this.lists.filter((list) => list.id !== id);
  }
}

class UiManager {
  constructor(listElement, notificationElem) {
    this.listElement = listElement;
    this.notificationElem = notificationElem;
    this.timeoutId = null;
  }

  renderItems(items) {
    this.listElement.innerHTML = items
      .map((item) => {
        let { name, price, quantity, id } = item;

        return `
      <li>
        <span>${name}</span>
        <span>$${price} x ${quantity}</span>
        <span><button>edit</button> <button onclick="deleteItem(${id})">delete</button></span>
      </li>
      `;
      })
      .join("");
  }

  sendNotificationMsg(message, modifier) {
    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
      this.notificationElem.innerText = "";
      this.notificationElem.classList.remove(modifier);
    }
    this.notificationElem.innerText = message;
    this.notificationElem.classList.add(modifier);

    this.timeoutId = setTimeout(() => {
      this.notificationElem.innerText = "";
      this.notificationElem.classList.remove(modifier);
    }, 2500);
  }
}

class Storage {
  constructor() {}

  saveList(key, fullList) {
    localStorage.setItem(key, JSON.stringify(fullList.getItems()));
  }

  retrieveList(key) {
    const storedList = localStorage.getItem(key);
    if (storedList) {
      return JSON.parse(storedList);
    }
    return [];
  }

  loadList(key, fullList) {
    const items = this.retrieveList(key);
    fullList.lists = items;
  }
}

const fullist = new FullList();

const fullListStorage = new Storage();
fullListStorage.loadList("full-lists", fullist);

const uiManager = new UiManager(listContainer, notificationElem);
uiManager.renderItems(fullist.getItems());

function deleteItem(id) {
  fullist.removeItem(id);
  updateUi("item deleted", "error-msg");
}

function updateUi(message, modifier) {
  uiManager.renderItems(fullist.getItems());
  uiManager.sendNotificationMsg(message, modifier);
}

function checkElement(elem, message) {
  if (!elem) {
    throw new Error(`${message}`);
  }
}


checkElement(itemForm, "Item form input not found");
checkElement(name, "name input not found");
checkElement(price, "price input not found");
checkElement(quantity, "quantity input not found");
checkElement(listContainer, "list container input not found");
checkElement(notificationElem, "notification element not found");

itemForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let itemName = name.value;
  let itemprice = price.value;
  let itemQuantity = quantity.value;
  let id = new Date().getTime();

  let newListItem = new ListItem(itemName, itemprice, itemQuantity, id); // single item

  fullist.addItem(newListItem);
  fullListStorage.saveList("full-lists", fullist);

  updateUi(`${itemName} was added, "success-msg"`);

  console.log("form sumit");
});

