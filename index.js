// initializing some values
let totalAttempts = 5;
let attempts = 0;
let totalWins = 0;
let totalLosts = 0;

// finding or selecting elements
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const lostWinMsg = document.createElement("p");
const remainingAttempt = cardBody.querySelector(".remainingAttempt");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  attempts++;

  if (attempts == 5) {
    guessingNumber.disabled = true;
    checkButton.disabled = true;
  }
  if (attempts < 6) {
    let guessNumber = Number(guessingNumber.value);
    checkResult(guessNumber);
    remainingAttempt.innerHTML = `Remaining attempts : ${
      totalAttempts - attempts
    }`;
  }
  guessingNumber.value = "";
});
function checkResult(guessingNumber) {
  const randomNumber = getRandomNumber(5);
  if (guessingNumber == randomNumber) {
    resultText.innerHTML = `you have Won !`;
    totalWins++;
  } else {
    resultText.innerHTML = `you have lost ; random number was: ${randomNumber}`;
    totalLosts++;
  }

  lostWinMsg.innerHTML = `Win: ${totalWins},Losts :${totalLosts}`;
  lostWinMsg.classList.add("large-text");
  cardBody.appendChild(lostWinMsg);
}
function getRandomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}
