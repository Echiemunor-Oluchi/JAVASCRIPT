// CONDITIONALS
/*
Conditional statements are used for make decisions based on different conditions. By default , statements 
in JavaScript script executed sequentially from top to bottom. If the processing logic require so, the 
sequential flow of execution can be altered in two ways:

1. Conditional execution: a block of one or more statements will be executed if a certain expression is true
2. Repetitive execution: a block of one or more statements will be repetitively executed as long as a certain 
expression is true. In this section, we will cover if, else , else if statements. The comparison and logical 
operators we learned in the previous sections will be useful in here.


Conditions can be implementing using the following ways:

if
if else
if else if else
switch
ternary operator
*/
// let num = parseInt(prompt("Enter a number"));
if (num >= 10) {
  console.log(`${num} is greater than or equal to 10`);
  console.log("Number is large");
}
console.log("continue");

// if else;
let temp = 50;
if (temp >= 30) {
  console.log("Put on the AC");
} else {
  console.log("leave  the AC off");
}

let isLight = true;
function switchMode() {
  isLight = !isLight;
  if (isLight) {
    console.log("Light mode");
    document.body.style.background = "#fff";
   
  } else {
    console.log("Dark mode");
    document.body.style.background = "#000";
}
}

// if else if else
const subscriptionInput = document.getElementById("subscription-plan");

function subscribe() {
  const dstvPlan = {
    access: 'dstv-access',
    family: 'dstv-family',
    compact: 'dstv-compact',
    premium: 'dstv-premium'
  }

  const price = {
    access: 2500,
    family: 4500,
    compact: 8000,
    premium: 12000,
  }

  const subscriptionType = subscriptionInput.value;

  // if (subscriptionType === dstvPlan.access) {
  //   // alert('You have subscribed for ' + dstvPlan.access);
  // }
   
  // else if (subscriptionType === dstvPlan.family){
  //   // alert('You have subscribed for ' + dstvPlan.family);
  // } 
  
  // else if (subscriptionType === dstvPlan.compact){
  //   // alert('You have subscribed for ' + dstvPlan.compact);
  // }
  //  else
  //   // alert('You have subscribed for ' + dstvPlan.premium);
  //   //}}

let balancevalue = 4000;
let balance = document.getElementById('balance');


if (subscriptionType === dstvPlan.access){
  if(price.access <= balancevalue){
    balancevalue = (balancevalue - price.access);
    alert('You have subscribed successfully');
    balance.innerText = balancevalue
  }else{
    balance.innerText = "Insufficient funds"
  }
  
}

else if(subscriptionType === dstvPlan.family){
  if (price.family <= balancevalue){
    balancevalue = (balancevalue - price.family);
    alert('You have subscribed successfully');
    balance.innerText = balancevalue
  }else{
    balance.innerText = "Insufficient funds"
  }
}

else if(subscriptionType === dstvPlan.family){
  if (price.family <= balancevalue){
    balancevalue = (balancevalue - price.family);
    alert('You have subscribed successfully');
    balance.innerText = balancevalue
  }else{
    balance.innerText = "Insufficient funds"
  }
}

else{
  subscriptionType === dstvPlan.premium
  balancevalue = (balancevalue - price.premium);
  alert('You have subscribed successfully');
  balance.innerText = balancevalue
}
}

// Create a form that allows the customer to select the products and specify the quantity using a select field. Each product has a fixed price, and the form will calculate the total cost. Apply a discount based on the quantity: 15% off for up to 10 items, 10% off for up to 5 items, 5% off for up to 3 items, and no discount for quantities below 3.



const productItems = {
  item1: 'bag',
  item2: 'heels',
  item3: 'Wigs',
  item4: 'Clothes'
}

const productPrices = {
  bag: 500,
  heels: 1000,
  wigs: 1500,
  clothes: 2000
}

function buyItem(){
  let productOptions = document.getElementById('products').value;
  let customerInput = parseInt(document.getElementById('quantity').value);
  let totalCostDisplay = document.getElementById('totalCost');

  if(productOptions === productItems.item1 ){
    if(customerInput >= 10){
      let totalCost = productPrices.bag * customerInput * 0.15;
      totalCostDisplay.innerText = `$${totalCost}`;
    }
    else if(customerInput >= 5){
      let totalCost = productPrices.bag * customerInput * 0.10;
      totalCostDisplay.innerText = `$${totalCost}`;
    }
    else if(customerInput >=3){
      let totalCost = productPrices.bag * customerInput * 0.05;
      totalCostDisplay.innerText = `$${totalCost}`;
    }
    else if(customerInput < 3){
      let totalCost = productPrices.bag * customerInput;
      totalCostDisplay.innerText = `$${totalCost}`;
    }
  }
  else if(productOptions === productItems.item2){
    if(customerInput >= 10){
      let totalCost = productPrices.heels * customerInput * 0.15;
      totalCostDisplay.innerText = `$${totalCost}`;
    }
    else if(customerInput >= 5){
      let totalCost = productPrices.heels * customerInput * 0.10;
      totalCostDisplay.innerText = `$${totalCost}`;
    }
    else if(customerInput >=3){
      let totalCost = productPrices.heels * customerInput * 0.05;
      totalCostDisplay.innerText = `$${totalCost}`;
    }
    else if(customerInput < 3){
      let totalCost = productPrices.heels * customerInput;
      totalCostDisplay.innerText = `$${totalCost}`;
    }
  }

  else if(productOptions === productItems.item3){
    if(customerInput >= 10){
      let totalCost = productPrices.wigs * customerInput * 0.15;
      totalCostDisplay.innerText = `$${totalCost}`;
    }
    else if(customerInput >= 5){
      let totalCost = productPrices.wigs * customerInput * 0.10;
      totalCostDisplay.innerText = `$${totalCost}`;
    }
    else if(customerInput >=3){
      let totalCost = productPrices.wigs * customerInput * 0.05;
      totalCostDisplay.innerText = `$${totalCost}`;
    }
    else if(customerInput < 3){
      let totalCost = productPrices.wigs * customerInput;
      totalCostDisplay.innerText = `$${totalCost}`;
    }
  }

  else{
    if(customerInput >= 10){
      let totalCost = productPrices.clothes * customerInput * 0.15;
      totalCostDisplay.innerText = `$${totalCost}`;
    }
    else if(customerInput >= 5){
      let totalCost = productPrices.clothes * customerInput * 0.10;
      totalCostDisplay.innerText = `$${totalCost}`;
    }
    else if(customerInput >=3){
      let totalCost = productPrices.clothes * customerInput * 0.05;
      totalCostDisplay.innerText = `$${totalCost}`;
    }
    else if(customerInput < 3){
      let totalCost = productPrices.clothes * customerInput;
      totalCostDisplay.innerText = `$${totalCost}`;
    }
  }
}




//Switch statement
switch(condition){
  case 1:
    statement;
  case 2:
    statement;
  default:
    statement;
}

let today = 'Monday';

switch(today.toLowerCase()) {
  case 'Monday':
    console.log('Today is Monday');
    break
  case 'Tuesday':
    console.log('Today is Tuesday');
    break
  case 'Wednesday':
    console.log('Today is Wednesday');
    break
  case 'Thursday':
    console.log('Today is Thursday');
    break
  case 'Friday':
    console.log('Today is Friday');
    break
  case 'Saturday':
    console.log('Today is Saturday');
    break
  case 'Sunday':
    console.log('Today is Sunday');
    break
  default:
    console.log('Enter a valid day');
}








//Algorithm
//when they click on subscribe, dstv access plan which is 2500
//the 2500 will be subtracted from the original balance of 4000 and stored in a variable
//the remaining balance will show on that Balance place