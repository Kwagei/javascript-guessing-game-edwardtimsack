const startBtn = document.querySelector("#start-button");
let lives = document.querySelector(".lives")
let words = document.querySelector("#game")
let luckyNumber = Math.floor(Math.random() * 100) + 1;


startBtn.addEventListener("click", function () {
    const numbers = [];
    const container = document.getElementById("button-container");

    lives = 7;
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

          } else if(Number(button.textContent) < luckyNumber) {
            words.style.display = 'block';
            words.textContent = "Guess Too Low!";
          } else if(Number(button.textContent) > luckyNumber){
            words.style.display = 'block';
            words.textContent = "Guess too High";
          }
          console.log(button.textContent); //log the value to the console when clicked
        });
        container.appendChild(button);
      }

});



  