// Generate a random number between 1 and 100
// var randomNumber = Math.floor(Math.random() * 100) + 1;

// Print the random number to the console
// console.log(randomNumber);

 // Display the random number on the webpage
    //   var randomNumberElement = document.getElementById("random-number");
    //   randomNumberElement.innerHTML = randomNumber;

    // var randomNumber = Math.floor(Math.random() * 100) + 1;

    // Display the random number on the webpage
    // var randomNumberElement = document.getElementById("random-number");
    // randomNumberElement.innerHTML = randomNumber;


    // Generate three random numbers between 1 and 100
    // var randomNumber1 = Math.floor(Math.random() * 100) + 1;
    // var randomNumber2 = Math.floor(Math.random() * 100) + 1;
    // var randomNumber3 = Math.floor(Math.random() * 100) + 1;
    // var randomNumber4 = Math.floor(Math.random() * 100) + 1;
    // var randomNumber5 = Math.floor(Math.random() * 100) + 1;
    // var randomNumber6 = Math.floor(Math.random() * 100) + 1;

    // Create three new button elements
    // var button1 = document.createElement("button");
    // var button2 = document.createElement("button");
    // var button3 = document.createElement("button");
    // var button4 = document.createElement("button");
    // var button5 = document.createElement("button");
    // var button6 = document.createElement("button");

    // Set the text of each button to a random number
    // button1.innerText = randomNumber1;
    // button2.innerText = randomNumber2;
    // button3.innerText = randomNumber3;
    // button4.innerText = randomNumber4;
    // button5.innerText = randomNumber5;
    // button6.innerText = randomNumber6;


    // Add the buttons to the button container div
    // var buttonContainer = document.getElementById("button-container");
    // buttonContainer.appendChild(button1);
    // buttonContainer.appendChild(button2);
    // buttonContainer.appendChild(button3);
    // buttonContainer.appendChild(button4);
    // buttonContainer.appendChild(button5);
    // buttonContainer.appendChild(button6);

  
    function generateButtons(numButtons) {
      const buttonContainer = document.getElementById("button-container");
      const randomNumbers = Array.from({length: numButtons}, () => Math.floor(Math.random() * 100));

      for (let i = 0; i < numButtons; i++) {
        const button = document.createElement("button");
        button.textContent = randomNumbers[i];
        buttonContainer.appendChild(button);
      }
    }

    generateButtons(100);
    
    var arr = ['1-101'];
    var i = arr.length, j, temp;
    
    // const numButtons = 100;
    // const numTrials = 7;
    // let randomNumbers = Array.from({length: numButtons}, () => Math.floor(Math.random() * 100));
    // let attemptsRemaining = numTrials;

    // function generateButtons() {
    //   const buttonContainer = document.getElementById("button-container");

    //   for (let i = 0; i < numButtons; i++) {
    //     const button = document.createElement("button");
    //     button.textContent = randomNumbers[i];
    //     buttonContainer.appendChild(button);

    //     // add event listener to each button
    //     button.addEventListener("click", () => {
    //       attemptsRemaining--;
    //       button.disabled = true;
    //       console.log(`You clicked ${randomNumbers[i]}! ${attemptsRemaining} attempts remaining.`);
          
    //       if (attemptsRemaining === 0) {
    //         console.log("Game over!");
    //         // reset the game
    //         attemptsRemaining = numTrials;
    //         randomNumbers = Array.from({length: numButtons}, () => Math.floor(Math.random() * 100));
    //         buttonContainer.innerHTML = "";
    //         generateButtons();
    //       }
    //     });
    //   }
    // }

    // generateButtons();


    function reloadPage(){
      var lives = 7
      statsDiv.textContent = 'Lives = ${lives}'

      
    }
    