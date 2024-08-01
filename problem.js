//Scenario: You are developing a personalized greeting card application

// Task: Write a JavaScript function that:

// Prompts the user to enter their name.
// Displays a greeting message based on the time of day (e.g., "Good morning, [Name]!").
// Counts the number of characters in the user's name and displays it.
// Ensures that the greeting message and character count are displayed on the web page.


//let userName = prompt("Enter your name");
let greetingDisplay = document.getElementById('displayGreeting');
//greetingDisplay.innerText = `Good Morning, ${userName}`;

//let characterNumber = userName.length;
let characterDisplay = document.getElementById('displayNumber');
//characterDisplay.innerText = `Hey, you have ${characterNumber} letters in your name, nice!`


// Problem 2
// Scenario: You are building a simple expense tracker for users to log their daily expenses.

// Task: Write a JavaScript function that:

// Prompts the user to enter their daily income and expenses.
// Calculates and displays the remaining balance.
// Checks if the expenses exceed the income and displays an appropriate message.
// Updates the number of entries displayed on the web page.


// Problem 3
// Scenario: You are creating a form validation for a sign-up page.

// Task: Write a JavaScript function that:

// Validates that the email input contains "@" and ".com".
// Validates that the password input is at least 8 characters long.
// If validation fails, displays error messages; if it passes, displays a success message.
// Updates the form's status on the web page.


// Problem 4
// Scenario: You are developing a task management app with a countdown timer for each task.

// Task: Write a JavaScript function that:

// Adds a new task to a list when the user clicks a button.
// Prompts the user to enter the estimated time for the task and starts a countdown timer.
// Updates the task list and displays the remaining time for each task.
// Displays a warning message if the time entered is not a positive number.


// Problem 5
// Scenario: You are enhancing a quiz game that provides instant feedback.

// Task: Write a JavaScript function that:

// Asks the user three yes/no questions.
// Uses conditional statements to check answers and tally the score.
// Displays the score and feedback (e.g., "Great job!" or "Keep trying!") based on the score.
// Updates the score and feedback on the web page.


// Problem 6
// Scenario: You are creating a motivational quote generator that also logs user interactions.

// Task: Write a JavaScript function that:

// Stores an array of motivational quotes.
// Selects and displays a random quote when the user clicks a button.
// Prompts the user to rate the quote as "Inspiring" or "Not Inspiring".
// Displays the total number of interactions and the percentage of "Inspiring" ratings on the web page.


// Problem 7
// Scenario: You are developing a color picker tool for web designers.

// Task: Write a JavaScript function that:

// Provides an input field for users to enter a color name or hex code.
// Changes the background color of the web page to the specified color when a button is clicked.
// Validates that the input is a valid color and displays an error message if not.
// Logs and displays the history of selected colors on the web page.


// Problem 8
// Scenario: You are creating a word processing tool with text analysis features.

// Task: Write a JavaScript function that:

// Takes a user's input string and displays it on the web page.
// Converts the string to uppercase and displays the result.
// Counts and displays the number of words in the string.
// Checks if the string contains the word "JavaScript" and displays a corresponding message.


// Problem 9
// Scenario: You are developing a budgeting tool with a savings goal tracker.

// Task: Write a JavaScript function that:

// Prompts the user to enter their monthly income and expenses.
// Calculates and displays the remaining balance.
// Prompts the user to enter a savings goal.
// Checks if the remaining balance meets the savings goal and displays an appropriate message.
// Updates the balance and goal status on the web page.


// Problem 10
// Scenario: You are enhancing an interactive learning platform with personalized feedback.

// Task: Write a JavaScript function that:

// Asks the user three programming-related questions (e.g., yes/no or multiple choice).
// Uses conditional statements to tally the correct answers.
// Displays personalized feedback based on the user's score (e.g., "Excellent!", "Good effort!", "Try again!").
// Updates the user's progress and feedback on the web page.




function expenseTracker(){
  let dailyIncome = parseInt(prompt("Enter your daily income"));
  let income = document.getElementById('dailyIncome');
  income.innerText = dailyIncome;

  let dailyExpenses = parseInt(prompt("Enter your daily expenses"));
  let expenses = document.getElementById('dailyExpenses');
  expenses.innerText = dailyExpenses

  let balance = document.getElementById('remainingBalance');
  let balanceCalculation = dailyIncome - dailyExpenses;
  balance.innerText = `$${balanceCalculation}`


  if (dailyExpenses > dailyIncome){
    //alert("Your expenses is too much baby girl, cut down a bit!");
  }
  else{
    balance.innerText = `$${balanceCalculation}`
  }

  let entriesCount = 0;
  let numberEntries = document.getElementById('numberEntries');
  entriesCount++;
  numberEntries.innerText = entriesCount++;

}


// Problem 1: To-Do List Application
// Create a simple to-do list application where users can add, edit, and delete tasks. Additionally, implement a feature to mark tasks as completed and filter the list to show all tasks, only completed tasks, or only pending tasks.






 /* Problem 2: Countdown Timer
Build a countdown timer that allows users to input a time in minutes and seconds, and then start the countdown. The timer should display the remaining time and play an alert sound when the countdown reaches zero.*/
const hourInput = document.querySelector('#hrs')
const minuteInput = document.querySelector('#min');
const secondsInput = document.querySelector('#secs');
const startButton = document.querySelector('.startButton');
const endButton = document.querySelector('.endButton');

let seconds, hours, minutes;

let timerInterval;

const decreaseCount = () => {
  if (seconds > 0 ){
    seconds--;
    secondsInput.value = seconds;
  }
}
startButton.addEventListener('click', () =>{
  seconds = parseInt(secondsInput.value);
  timerInterval = setInterval(decreaseCount, 1000);
});





































/*Problem 3: Weather Dashboard
Create a weather dashboard that fetches and displays current weather data for a specified city using a weather API. The dashboard should show temperature, humidity, wind speed, and a brief weather description.

Problem 4: Quiz Application
Develop a quiz application where users can answer multiple-choice questions. The application should keep track of the score and display the final score at the end. Add a feature to show the correct answers after the quiz is completed.

Problem 5: E-commerce Product Gallery
Create a product gallery for an e-commerce website. Users should be able to view products in different categories, search for products, and click on a product to view more details. Implement pagination to handle a large number of products.

Problem 6: Expense Tracker
Build an expense tracker where users can add their daily expenses, categorize them, and view a summary of expenses by category and date range. Provide a visual representation of the expenses using charts or graphs.

Problem 7: Image Carousel
Develop an image carousel that automatically transitions through a set of images. Allow users to manually navigate through the images using next and previous buttons, and implement indicators to show the current image position.

Problem 8: Personal Blog
Create a personal blog where users can write, edit, and delete blog posts. Each post should have a title, content, and date of publication. Implement a commenting system where users can add comments to blog posts.

Problem 9: Contact Form Validation
Design a contact form with fields for name, email, phone number, and message. Implement client-side validation to ensure that the inputs are correctly formatted and provide feedback to the user when validation fails.

Problem 10: Interactive Map
Integrate an interactive map using a mapping library (e.g., Leaflet or Google Maps API). Allow users to add markers with descriptions to the map and display the coordinates of the clicked location. */