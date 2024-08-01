let firstName = 'Michael';
let lastName = 'Jordan'
let city = 'Lagos';
let country = 'Nigeria';
let language = 'Javascript';
let quote = "The saying, 'seeing is believing' is not correct in 2024."
let fullname = firstName + " " + lastName;
let statement = `My name is ${fullname} I am from, ${city} , ${country}, I am ${2 + 8} years old`;
console.log(fullname);
console.log(quote);
console.log(statement.length);

//length of a string
let password = 'portal1';
console.log(password.length);

//accessing the character of a string
let firstCharacter = password[0];
let lastIndex = password.length - 1;
let lastCharacter = password[lastIndex];
console.log(firstCharacter);
console.log(lastCharacter);

//methods on a string
//1. toUpperCase()
let flower = "sunflower";
console.log(flower.toUpperCase());

//2. toLowerCase
let furniture = "TABLE";
console.log(furniture.toLowerCase());

//Assignment:
//First one is concatenation of first name and last name
function concatenate(){
  let firstname = document.getElementById('firstname').value;
  let lastname = document.getElementById('lastname').value;
  let wholename = `${firstname} ${lastname}`;
  let output = document.getElementById('output');
  output.innerText = wholename;

  firstname.value = " ";
  lastname.value = " ";
}

//Number 2: To calculate length
function number(){
  let password = document.getElementById('password').value;
  let Number = (password.length);
  let amount = document.getElementById('amount');

  amount.innerHTML = Number;
}

//Number 3: To change to uppercase
function change(){
  let course = document.getElementById('courseinput').value;
  let change = document.getElementById('change');
  let uppercase = course.toUpperCase();

  change.innerHTML = uppercase;
}

//Number 4: To change to lowercase
function changes(){
  let program = document.getElementById('program').value;
  let changes = document.getElementById('changes');
  let lowercase = program.toLowerCase();

  changes.innerHTML = lowercase;
}

//Number 5: To give us the first inex in the input form
function firstIndex(){
  let school = document.getElementById('schoolInput').value;
  let index = document.getElementById('school');
  let firstIndex = school[0];

  index.innerHTML = firstIndex;
}

//Number 6: To give us the last index in the input form


  function lastIndexe(){
  let college = document.getElementById('college').value;
  let indexe = document.getElementById('lastIndex');
  let lastIndexe = college.length-1;
   let lastvalue = college[lastIndexe];
    indexe.innerText = lastvalue;
}

//Class for Wednesday 15th May, 2024
//trim
let sentence = "       All that glitters is not gold";
console.log(sentence.trim());

//includes
let keyword = 'con';
let airconditioner = "airconditioner";
console.log(airconditioner.includes(keyword));

//indexOf
let town = 'Akure';
console.log(town.indexOf('A'));

// lastIndexOf
let localGovt = 'Alimosho';
console.log(localGovt.lastIndexOf('o'));

//replace
let wordTwo = 'Javascript is a friendlylanguage';
console.log(wordTwo.replace("Javascript","python"));

//slice
let longText = 'The height reached and kept by great men were not attained by sudden flight. But they while their companion slept, were toiling upwards in the night';

let result = longText.slice(0, 30);
console.log(result + '...');

//split
let mediumText = 'Get easy and affordable access';
console.log(mediumText.split(" "));

//startsWith
const str = "Hello, world!";
console.log(str.startsWith("Hello", 0));
console.log(str.startsWith("world", 7));

//endsWith
const stri = "Hello, world!";
console.log(stri.endsWith("world!"));
console.log(stri.endsWith("Hello", 5));

//concat
const str1 = "Hello, ";
const str2 = "world!";
console.log(str1.concat(str2));

//assignment
// Number 1: Using Includes
function search(){
  let search = document.getElementById('searchfor');
  let result = document.getElementById('result');
  let normalword ='cottonwool';
  let containword = normalword.toLowerCase().includes(search.value.toLowerCase());
  result.innerHTML = containword;
}

// Number 2: Using replace
function replace(){
  let input = document.getElementById('replacefor');
  let resulte = document.getElementById('resulte');
  resulte.innerHTML = input.value;
}

//Correction for number 1
let randomWord = 'International';
let searchInput = document.getElementById('testing');
function searchKeyword() {
  let keyword = searchInput.value.toLowerCase();
  let checked = randomWord.toLowerCase().includes(keyword);
  document.getElementById("test-result").innerText = checked;
}
