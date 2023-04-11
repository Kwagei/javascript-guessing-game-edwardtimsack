const startBtn = document.querySelector("#start-button");
let lives = document.querySelector(".lives")
let words = document.querySelector("#game")


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
      })
      console.log(numbers)
    
      for (let i = 0; i < numbers.length; i++) {
        const button = document.createElement("button");
        button.textContent = numbers[i];
        container.appendChild(button);
      }

})



  