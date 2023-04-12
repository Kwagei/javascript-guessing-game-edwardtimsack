const startBtn = document.querySelector("#start-button");
let lives = document.querySelector(".lives")
let words = document.querySelector("#game")
let luckyNumber = Math.floor(Math.random() * 100) + 1;
let gameOver= false;


startBtn.addEventListener("click", function () {
    const numbers = [];
    const container = document.getElementById("button-container");

    lives.textContent = 7;
    words.style.display = "none"
    container.innerHTML = "";

    for (let i = 1; i < 101; i++) {
        numbers.push(i)
      }
      numbers.sort(() => {
        return 0.5 - Math.random()
      });
      console.log(numbers)
    
      for (let i = 0; i < numbers.length; i++) {
        const button = document.createElement("button");
        button.textContent = numbers[i];
        button.addEventListener("click", function (){

          if (Number(button.textContent) === luckyNumber) { // check if the button value is equal to the lucky number
            words.textContent = "Congratulations, You Won!"; // log a message to the console if the button value is the lucky number
            button.disabled = true;
            button.style.backgroundColor = 'green';
            gameOver = true;


            const buttons = document.querySelectorAll("button");
            for (let j = 0; j < buttons.length; j++) {
              buttons[j].disabled = true;
              button.style.backgroundColor = 'red';

            }
            words.textContent = "Congratulations, You Won!"

          } else if(Number(button.textContent) < luckyNumber) {
            words.style.display = 'block';
            words.textContent = "Guess Too Low!";
            button.disabled = true;
            button.style.backgroundColor = 'gold';
            lives.textContent = Number(lives.textContent) - 1;
            

          } else if(Number(button.textContent) !== luckyNumber){
            words.style.display = 'block';
            words.textContent = "Guess too High";
            button.disabled = true;
            button.style.backgroundColor = 'red';
            lives.textContent = Number(lives.textContent) - 1;

          }
          console.log(button.textContent); //log the value to the console when clicked
        });

        if (Number(button.textContent) === 0) {
          words.style.display = 'block';
          words.textContent = "Sorry, Game Over!!";
          button.forEach(button => {
            button.disabled = true;
            button.style.backgroundColor = 'red';
          });
         
        }
        
        container.appendChild(button);
      }

      // chances = numOfLives-1;


});


// if (live_num == 0) {
//   words.style.display = 'block';
//   words.textContent = "Sorry, Game over!";
//   const buttons = document.querySelectorAll('.btn button');
//   buttons.forEach(button => {
//     button.disabled = true;
//     button.style.backgroundColor = 'red';
//   });
// }
// if (Number(button.textContent) !== luckyNumber) {
//   lives.textContent = Number(lives.textContent) - 1;
// }



  