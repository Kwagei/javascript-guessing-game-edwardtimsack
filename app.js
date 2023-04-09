function generateButtons() {
  const buttonContainer = document.getElementById("button-container");
  const numbers = []

  for (let i = 1; i < 101; i++) {
    numbers.push(i)
  }
  numbers.sort(() => {
    return 0.5 - Math.random()
  })
  console.log(numbers)

  for (let i = 0; i < numbers.length; i++) {
    const button = document.createElement("button");
    button.textContent = numbers[i];
    buttonContainer.appendChild(button);
  }
}

    // Regenerate random numbers by just clicking the start button in the HTML
function regenerateNumbers() {
  const buttonContainer = document.getElementById("button-container");
  const buttons = buttonContainer.querySelectorAll("button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].textContent = Math.floor(Math.random() * 100) + 1;
  }
}

generateButtons();  

const startButton = document.getElementById("start-button");
startButton.addEventListener("click", regenerateNumbers);


   

    