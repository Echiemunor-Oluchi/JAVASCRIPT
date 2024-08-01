//pi
console.log(Math.PI);
//round
let num = 9.5;
console.log(Math.round(num));

//floor
console.log(Math.floor(10.8));

//ceil
console.log(Math.ceil(10.2));

//min
console.log(Math.min(10, 5, -2, -4, 8, 0));

//max
console.log(Math.max(10, 5, -2, -4, 8, 0));

//abs
console.log(Math.abs(-1));

//sqrt
console.log(Math.sqrt(100));

//random
console.log(Math.floor(Math.random() * 10) + 1);


//Classwork
//create a button that when you click on the button it will give you a number between 10 and 50
function Generate(){
  let number = document.getElementById('generate');
  let generator = Math.floor(Math.random()* 41 +10);
  number.innerHTML = generator;
}


//Assignment
function random(){
  let quotesbox = document.getElementById('quote');
  let personbox = document.getElementById('person');
  let quotearray = [
    {
      quote:"The only limit to our realization of tomorrow is our doubts of today.",
      names:'Franklin D. Roosevelt',
    },
    {
      quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      names:'Martin Luther King Jr',
    },
    {
      quote:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      names:'Ralph Waldo Emerson',
    },
    {
      quote:"The purpose of our lives is to be happy.",
      names:'Dalai Lama',
    },
    {
      quote:"Life is what happens when you're busy making other plans.",
      names:'John Lennon',
    },
    {
      quote:"You miss 100% of the shots you dont take.",
      names:'Wayne Gretzky',
    },
    {
      quote:"It does not matter how slowly you go as long as you do not stop.",
      names:'Confucius',
    },
    {
      quote:"Success is not final, failure is not fatal: It is the courage to continue that counts.",
      names:'Winston Churchill',
    },
    {
      quote:"The only thing necessary for the triumph of evil is for good men to do nothing.",
      names:'Edmund Burke',
    },
    {
      quote:"The best way to predict the future is to invent it.",
      names:'Alan Kay',
    },
  ]

let randomIndex = Math.floor(Math.random()* quotearray.length);
let randomquotes = quotearray[randomIndex];

quotesbox.innerText = randomquotes.quote;
personbox.innerText = randomquotes.names;
}