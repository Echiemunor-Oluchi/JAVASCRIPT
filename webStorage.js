// HTML web storage provides two objects for storing data on the client:

// window.localStorage - stores data with no expiration date
// window.sessionStorage - stores data for one session (data is lost when the browser tab is
//closed)Most modern browsers support Web Storage, however it is good to check browser support
// for localStorage and sessionStorage.

// available methods for the Web Storage objects.
// localStorage - to display the localStorage object
// localStorage.clear() - to remove everything in the local storage
// localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters.
// localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
// localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
// localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.

const storedStudents = localStorage.getItem("students");
const retrievedStudents = JSON.parse(localStorage.getItem("students")) || [];
console.log(retrievedStudents);

// Check if localStorage is supported by the browser
if (typeof Storage !== "undefined") {
  // Accessing and storing data in localStorage
  localStorage.setItem("username", "Luchi");
  localStorage.setItem("age", "30");

  // Retrieving data from localStorage
  const username = localStorage.getItem("username");
  const age = localStorage.getItem("age");

  // Output the retrieved data
  console.log(`Username: ${username}`);
  console.log("Age:", age);

  // Removing data from localStorage
  localStorage.removeItem("age");

  // Output after removing data
  const removedAge = localStorage.getItem("age");
  console.log("Removed Age:", removedAge); // Output: null
} else {
  console.log("Sorry, your browser does not support Web Storage...");
}

let ourNumbers = JSON.parse(localStorage.getItem("num"));
console.log(ourNumbers);

// form
const studentForm1 = document.querySelector(".student-form");

const storedStudents1 = localStorage.getItem("new-names");

const names = storedStudents ? JSON.parse(storedStudents) : [];
let nameList = document.querySelector(".name-list");

studentForm1.addEventListener("submit", (e) => {
e.preventDefault();
let name = e.target[0].value;

   names.push(name);
   localStorage.setItem("new-names", JSON.stringify(names));
   displayNames();
   e.target[0].value = "";
    console.log(e.target);
    console.log(e.target[0].value);
    console.log(e);
 });

const displayNames = () => {
nameList.innerHTML = "names"; //check this line again properly
   for (let i = 0; i < names.length; i++) {
   nameList.innerHTML += `<li>${names[i]}</li>`;
   }
 };

// displayNames();

//Destiny's teaching
// let input = document.querySelector('input');
// let p = document.querySelector('p');
// p.innerHTML = ""


// input.addEventListener('keyup', ()=> {
//   localStorage.setItem('userInput', input.value)
//   let storedInput = localStorage.getItem('userInput')
//   p.innerHTML = storedInput;
// })

// p.innerHTML = localStorage.getItem('userInput');

// Assignments Applicants
  const userForm = document.querySelector('#user-form');
  const userTableBody = document.querySelector('#user-table-body');
  const submitBtn  = document.querySelector('.submitBtn');

  submitBtn.addEventListener('click', () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    userTableBody.innerHTML = '';

    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td>${user.gender}</td>
            <td>${user.studentId}</td>
            <td>${user.score}</td>
        `;
        userTableBody.appendChild(row);
    });
  })


  userForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const age = document.getElementById('age').value;
      const gender = document.getElementById('gender').value;
      const studentId = document.getElementById('studentId').value;
      const score = document.getElementById('score').value;

      const newUser = {
          name,
          age,
          gender,
          studentId,
          score
      };

      let users = JSON.parse(localStorage.getItem('users')) || [];
      if (users.length < 6) {
          users.push(newUser);
      } else {
          alert('You can only enter up to 6 users');
      }
      localStorage.setItem('users', JSON.stringify(users));
      
      updateTable();
      userForm.reset();
  });


  //Class for Today: Correction for the Assignment
  // form
const studentForm = document.querySelector(".student-fom");
let tbody = document.querySelector(".tbody");

let studentData = retrieveFromStorage();

function checkElement(element, desc) {
  if (!element) {
    `throw new Error(${desc} not found)`;
  }
}

checkElement(studentForm, "Student form ");
checkElement(tbody, "tbody not found");

studentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = e.target[0].value;
  let age = e.target[1].value;
  let score = e.target[2].value;

  let student = {
    name,
    age,
    score,
  };
  if (isFormValidated(name, age, score)) {
    acceptData(student);
    displayStudentData();
  }
});

const acceptData = (student) => {
  studentData.push(student);
  saveToStorage();
};

const saveToStorage = () => {
  localStorage.setItem("student-data", JSON.stringify(studentData));
};

function retrieveFromStorage() {
  const storedStudent = localStorage.getItem("student-data");
  const retrievedStudent = storedStudent ? JSON.parse(storedStudent) : [];
  return retrievedStudent;
}

function isFormValidated(name, age, score) {
  if (name === "") {
    alert("name cannot be empty");
    return false;
  }

  if (age === "") {
    alert("age cannot be empty");
    return false;
  }

  if (score === "") {
    alert("score cannot be empty");
    return false;
  }

  return true;
}

const displayStudentData = () => {
  let serialNum = 0;
  tbody.innerHTML = "";
  for (let i = 0; i < studentData.length; i++) {
    serialNum++;
    tbody.innerHTML += ` 
    <tr>
    <td>${serialNum}</td>
    <td>${studentData[i].name}</td>
    <td>${studentData[i].age}</td>
    <td>${studentData[i].score}</td>
    </tr>`;
  }
};

displayStudentData();





