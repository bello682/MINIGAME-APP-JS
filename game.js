const buttons = document.querySelectorAll("button");
// const resultEl = document.getElementById("result");
const resultEl = document.querySelector("#result");
const playerScoreEl = document.querySelector("#user_score");
const computerScoreEl = document.querySelector("#computer_score");


let playerScore = 0;
let computerScore = 0;



buttons.forEach(btnForEachMethod => {
    btnForEachMethod.addEventListener('click', () => {
       const result =  playGround(btnForEachMethod.id, computerPlay());
        resultEl.textContent = result;
    });
});

function computerPlay () {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
};

function playGround(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        playerScoreEl.textContent = playerScore;
        return "You Win! " + playerSelection + " beats " + computerSelection;

    } else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return "you lose! " + computerSelection + " beats " + playerSelection
    }

};