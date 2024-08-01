// Getting Element from the DOM
// 1. getElementById()
// 2. getElementsByTagName()
// 3. getElementsByClassName()
// 4. querySelector()
// 5. querySelectorAll()

let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

let paragraphsByClass = document.getElementsByClassName("paragraph");

let queryPara = document.querySelector("#heading");
let queryParaAll = document.querySelectorAll(".paragraph");

paragraphsByClass[0].innerHTML = "I changed the text";

//
const btns = document.querySelectorAll(".btn");
let countOutput = document.querySelector("#count-output");
let count = 0;
countOutput.innerText = count;

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    if (i === 0) {
      console.log("Increase");
      countOutput.innerText = ++count;
    } else if (i === 1) {
      if (count === 0) return 0;
      console.log("Decrease");

      countOutput.innerText = --count;
    } else {
      count = 0;
      countOutput.innerText = count;
      console.log("Reset");
}
});
}

//Thursday 27th June, 2024
//Adding Attributes
// setAttribute

let slideLeftBtn = document.querySelector(".slide-left-btn");
let revealBtn = document.querySelector(".reveal-btn");
let toggleBtn = document.querySelector(".toggle-btn");
let box = document.querySelector("#box");

// slideLeftBtn.addEventListener("click", () => {
//   box.setAttribute("class", "slide-left");
// });

// revealBtn.addEventListener("click", () => {
//   box.setAttribute("class", "");
// });

// Adding class attributes using classList
// 1. Add method
slideLeftBtn.addEventListener("click", () =>{
  box.classList.add("slide-left");
});

// 2. remove method
revealBtn.addEventListener("click", () => {
  box.classList.remove("slide-left");
});

// 3. toggle method
toggleBtn.addEventListener("click", () => {
  // box.classList.toggle("slide-left");
  customToggle();
});

// 4. contains
const customToggle = () => {
  if (box.classList.contains("slide-left")) {
    box.classList.remove("slide-left");
  } else {
    box.classList.add("slide-left");
  }
};

// add class using className
// box.className = "box slide-left";
// box.id

// style
// box.style = "background-color: red";

// /////////////////////////////////////////////////

let productContainer = document.querySelector(".product-container");

const products = [
  {
    id: "prod-2",
    price: 150,
    desc: "lorem ipsum dolor",
    img: "./images/img-2.jpg",
  },
  {
    id: "prod-3",
    price: 400,
    desc: "lorem ipsum dolor",
    img: "./images/img-3.jpg",
  },
  {
    id: "prod-4",
    price: 500,
    desc: "lorem ipsum dolor",
    img: "./images/img-4.jpg",
    category: "Electronic",
  },
  {
    id: "prod-4",
    price: 500,
    desc: "lorem ipsum dolor",
    img: "./images/img-4.jpg",
  },
  {
    id: "prod-4",
    price: 500,
    desc: "lorem ipsum dolor",
    img: "./images/img-4.jpg",
  },
];

const displayProducts = () => {
  for (let i = 0; i < products.length; i++) {
    productContainer.innerHTML += `
     <div class="product">
          <img src="${products[i].img}" alt="" />
          <div>
            <p>${products[i].desc}</p>
            <div>
              <span>$${products[i].price}</span>
              <button>Add to cart</button>
            </div>
          </div>
        </div>
    `;
  }
};

displayProducts();