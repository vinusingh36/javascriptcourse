'use strict';
/*
document.querySelector(".message")
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "🎉 Correct secretNumber !!!!!"
console.log(document.querySelector(".message").textContent);

document.querySelector(".secretNumber").textContent = 14;
document.querySelector(".score").textContent = 10;


document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);


*/

let secretNumber = Math.trunc(Math.random() * 20) + 1

let score = 20;
let highScore = 0;
// console.log(secretNumber);

let message = (params) => {
    document.querySelector(".message").textContent = params;
}




document.querySelector(".check").addEventListener("click", function () {
    // console.log(document.querySelector(".guess").value);
    let guess = Number(document.querySelector(".guess").value);
    // console.log(typeof guess, guess);
    // document.querySelector(".message").textContent = "🎉 Correct secretNumber !!!!!"

    if (!guess) {
        message("Please enter a valid Number !!!!!")
        // document.querySelector(".message").textContent = "Please enter a valid Number !!!!!"
    }
    //Player win the Game - 
    else if (guess === secretNumber) {
        message("🎉 Correct Number !!!!!");
        // document.querySelector(".message").textContent = "🎉 Correct Number !!!!!"
        document.querySelector("body").style.backgroundColor = "green";

        document.querySelector(".number").style.width = "30rem"
        document.querySelector(".number").textContent = secretNumber;

        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    }

    else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent =
                guess > secretNumber ? "To High!!!" : "To Low!!!";
            score--;
            document.querySelector(".score").textContent = score;
        }
        else {
            document.querySelector(".message").textContent = "You lost the Game!!!";
        }
    }

    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "To High!!!";
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //     }
    //     else {
    //         document.querySelector(".message").textContent = "You lost the Game!!!";
    //     }

    // }
    // else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "To Low!!!";
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //     }
    //     else {
    //         document.querySelector(".message").textContent = "You lost the Game!!!";
    //     }
    // }
})

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").textContent = "?";
    message("start guessing.....")
    // document.querySelector(".message").textContent = "Start guessing..."
    document.querySelector(".guess").value = "";
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".number").style.width = "15rem"
})