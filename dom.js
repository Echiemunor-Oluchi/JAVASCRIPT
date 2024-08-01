// DOM

console.log(document);
console.log(document.head);
console.log(document.title);
// To change the title
document.title = 'start work'
// document.body.innerHTML = 'Hello from javascript';
console.log(document.body);
console.log(document.documentURI);

//getting html elements
//1. getting element by id
// document.getElementById("first-heading").innerHTML = "replaced heading text";

document.getElementById("first-paragraph").innerText = "Paragraph replaced";

document.getElementById("list").innerHTML = "<li>Water</li>";

document.getElementById("name-input")

//Events
const passwordInput = document.getElementById("password-input");
function showPassword(){
    passwordInput.type = "text"; 
    document.getElementById("password-input").type = "text"
}
function hidePassword(){
    document.getElementById("password-input").type = "password"
}
console.log()


