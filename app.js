// const section = document.querySelector('section')
// const article = document.querySelector('article')
// const update  = document.querySelector('.update')

let randomNumber = Math.floor(Math.random() * 100) + 1;

let guesses = 0;

function checkGuess() {
  let guess = parseInt(document.getElementById("guess").value);
  guesses++;

  if (guess === randomNumber) {
    document.getElementById("result").innerHTML = `Congratulations! You guessed the number in ${guesses} guesses.`;
  } else if (guess > randomNumber) {
    document.getElementById("result").innerHTML = "Too high. Guess again.";
  } else if (guess < randomNumber) {
    document.getElementById("result").innerHTML = "Too low. Guess again.";
  }
}
// In this game, the player enters a number into the input field and clicks the "Guess" button. 
// The checkGuess() function is called, which compares the player's guess to the randomly generated number. 
// If the guess is correct, a message is displayed with the number of guesses it took to get it right. If the guess is too high or too low, a message is displayed prompting the player to guess again. The CSS code is used to style the elements on the page.
















