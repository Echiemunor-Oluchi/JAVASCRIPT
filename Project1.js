let totalDisplay = document.getElementById("totalDisplay");
let submitBtn = document.querySelector(".submitBtn");
let success = document.querySelector(".success");
let danger = document.querySelector(".danger");
let cartDisplay = document.querySelector(".orangeDisplayAmount");
let toggleDots = document.querySelector(".toggleDots");
let actionsBox = document.querySelector(".actionsBox");
let switchBtn = document.querySelector(".LightDarkMode");
let groceryBox = document.querySelector(".grocery");
let shoppedItems = document.querySelector(".shoppedItems");
let count = 0;
let totalCost = 0;

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let groceryInput = document.querySelector("#groceryInput").value;
  let priceInput = parseInt(document.querySelector("#price").value);
  let quantity = parseInt(document.querySelector("#quantity").value);
  let arrayInputs = [groceryInput, priceInput, quantity];
  let inputNames = ["Grocery", "Price", "Quantity"];
  let isEmpty = false;
  let emptyFieldNames = [];

  for (let i = 0; i < arrayInputs.length; i++) {
    if (i === 0 && arrayInputs[i] === "") {
      isEmpty = true;
      emptyFieldNames.push(inputNames[i]);
    } else if (i !== 0 && (arrayInputs[i] === "" || isNaN(arrayInputs[i]))) {
      isEmpty = true;
      emptyFieldNames.push(inputNames[i]);
    }
  }

  if (isEmpty) {
    danger.style.display = "block";
    if (emptyFieldNames.length === 1) {
      danger.textContent = `${emptyFieldNames[0]} field cannot be empty`;
    } else {
      danger.textContent = `${emptyFieldNames.join(", ")} fields cannot be empty`;
    }
    setTimeout(function() {
      danger.style.display = "none";
    }, 2000);
    return;

  } else {
    let priceCalculation = priceInput * quantity;
    totalCost += priceCalculation;
    totalDisplay.textContent = `Total:$${totalCost}`;
    success.style.display = "block";
    success.textContent = `${groceryInput} is successfully added!`;
    totalDisplay.style.fontWeight = "bolder";
    totalDisplay.style.display = "flex";
    count++;
    cartDisplay.textContent = `${count}`;
  }
  setTimeout(function(){
    success.style.display = "none";
  }, 2000);
  displayShoppingItems(groceryInput,priceInput,quantity);

  document.querySelector("#groceryInput").value = ""; //why is it that when i put groceryInput.value here, it didn't work?
  document.querySelector("#price").value = "";
  document.querySelector("#quantity").value = "";
  return;
});

let isLight = true;
toggleDots.addEventListener("click", () => {
  actionsBox.style.display = actionsBox.style.display === "flex" ? "none" : "flex";
});

// Light dark mode function
switchBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  isLight = !isLight;
  [document.body, groceryBox, actionsBox].forEach(element => {
    element.style.background = isLight ? "#fff" : "#252525";
  });
  groceryBox.style.color = isLight ? "#000" : "#fff";
shoppedItems.style.background = isLight ? "#f2f2f2" : " #6e6e6e";
  switchBtn.innerHTML = isLight ? `dark <i class="bi bi-moon-fill"></i>` : `light <i class="bi bi-brightness-high-fill"></i>`;
});

//Display shopping Items function
  const displayShoppingItems = (groceryInput, priceInput, quantity) => {
    let itemContainer = document.createElement('div');
    itemContainer.classList.add('shoppedItemsItem');

    itemContainer.innerHTML = `
        <span>${groceryInput}</span>
        <span>${priceInput} x ${quantity}</span>
        <div class="clearDeleteIcon">
            <i class="bi bi-pen-fill"></i>
            <i class="bi bi-trash3"></i>
        </div>`;


  
    if (shoppedItems.style.display === 'none' || !shoppedItems.style.display) {
        shoppedItems.style.display = 'flex'; 
        shoppedItems.style.gap = "2em";
    }

  
    shoppedItems.appendChild(itemContainer);

    console.log("New item added:", itemContainer);
};
