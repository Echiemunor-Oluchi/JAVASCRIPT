// Date object
let today = new Date();

const weekDays = ["Sunday", "Monday"];

let year = today.getFullYear();
let month = today.getMonth() + 1;
let weekDay = today.getDay();
let date = today.getDate();
let hour = today.getHours();
let minute = today.getMinutes();
let seconds = today.getSeconds();

console.log(year, month, weekDays[weekDay], date, hour, minute, seconds);

const setTime = () => {
  today = new Date();
  hour = today.getHours();
  let amPm = hour < 12 ? "AM" : "PM";
  hour = hour > 12 ? (hour -= 12) : hour;
  minute = today.getMinutes();
  seconds = today.getSeconds();
  document.getElementById("date").innerText = `${hour}: ${minute}: ${seconds} ${amPm}`;
};

// setInterval
setInterval(setTime, 1000);

let count = 0;
const increaseCount = () => {
  count++;
  document.getElementById("count").innerText = count;
};

let clearIntervalId = null;

const startCount = () => {
  clearIntervalId = setInterval(increaseCount, 1000);
  console.log(clearIntervalId);
};

let startBtn = document.querySelector(".btn-start");
let stopBtn = document.querySelector(".btn-stop");

startBtn.addEventListener("click", () => {
  startCount();
});

stopBtn.addEventListener("click", () => {
  clearInterval(clearIntervalId);
});

// setTimeout
let timeoutId = null;
timeoutId = setTimeout(() => {
  console.log("It's 3 seconds");
}, 3000);

clearTimeout(timeoutId);

// DESTRUCTURIND AND SPREAD OPERATOR