//Getting the elements from html form

let nameInput = document.getElementById("name-input");
let emailInput = document.getElementById("email-input");
let messageInput = document.getElementById("message-input");


let usersData = [];
function submit(){
  //accept the data first
// console.log(nameInput.value);
// console.log(emailInput.value);
// console.log(messageInput.value);
const userInfo = {
  name: nameInput.value,
  email: emailInput.value,
  message: messageInput.value,
};

//object
// console.log(userInfo);
//After the user fills the form and clicks on submit, everything wipes off in the input field and the form becomes empty for another user to use
nameInput.value = "";
emailInput.value = "";
messageInput.value = "";

//For an array

usersData.push(userInfo);
console.log(usersData);
}


//Algorithm
//correction
//1. create the form
//2. get all the elements using their id
//3. Do a submit function
//4.


//Classwork2
let username = document.getElementById('username');
let email = document.getElementById('email');
let message = document.getElementById('message');

//Next is to pass a function
function Click(){
  message.innerHTML = username.value;
  email.innerHTML = email.value;
}

