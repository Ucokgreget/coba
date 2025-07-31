const choice = ["rock", "paper", "scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay")
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    let result = "";

    const computerChoice = choice[Math.floor(Math.random()*3)];
    
    if(playerChoice === computerChoice){
        result = "Imbang";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = computerChoice === "scissor" ? "Kamu Menang 🥳" : "Yaaahhh Kalah 😔"
                break;
            case "scissor":
                result = computerChoice === "paper" ? "Kamu Menang 🥳" : "Yaaahhh Kalah 😔";
                break;
            case "paper":
                result = computerChoice === "rock" ? "Kamu Menang 🥳" : "Yaaahhh Kalah 😔";
                break;     
        }

        
    }
    playerDisplay.textContent = `Player: ${playerChoice}`
    computerDisplay.textContent =`Computer: ${computerChoice} ` ;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("kalah", "menang")

    switch(result){
        case "Kamu Menang 🥳":
            resultDisplay.classList.add("menang");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "Yaaahhh Kalah 😔":
            resultDisplay.classList.add("kalah");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}