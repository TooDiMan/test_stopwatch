const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");
const millisecondElement = document.querySelector(".millsecond");

const startButton = document.querySelector(".start");
const waitButton = document.querySelector(".wait");
const stopButton = document.querySelector(".stop");

let hour = 00,
  minute = 00,
  second = 00,
  millisecond = 00,
  wasClicked = false,
  interval,
  timer;

startButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

waitButton.addEventListener("click", () => {
  if (wasClicked === true) {
    clearInterval(interval);
  }
  wasClicked = true;
  setTimeout(() => {
    wasClicked = false;
  }, 300);
});

stopButton.addEventListener("click", () => {
  clearInterval(interval);
  clearFields();
});

function startTimer() {
  millisecond++;
  if (millisecond < 9) {
    millisecond.innerText = "0" + millisecond;
  }
  if (millisecond > 9) {
    millisecond.innerText = millisecond;
  }
  if (millisecond > 99) {
    second++;
    secondElement.innerText = "0" + second;
    millisecond = 0;
    millisecond.innerText = "0" + millisecond;
  }

  //Second
  if (second < 9) {
    secondElement.innerText = "0" + second;
  }
  if (second > 9) {
    secondElement.innerText = second;
  }
  if (second > 59) {
    minute++;
    minuteElement.innerText = "0" + minute;
    second = 0;
    secondElement.innerText = "0" + second;
  }

  //Minutes
  if (minute > 9) {
    minuteElement.innerText = minute;
  }

  //Hour
  if (hour > 9) {
    hourElement.innerText = hour;
  }
}

function clearFields() {
  hour = 00;
  minute = 00;
  second = 00;
  millisecond = 00;
  hourElement.textContent = "00";
  minuteElement.textContent = "00";
  secondElement.textContent = "00";
  millisecondElement.textContent = "00";
}