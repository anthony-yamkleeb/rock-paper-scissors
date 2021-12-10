function computerPlay() {
    let moves = ["rock","paper","scissors"];
    let pickedMove = moves[Math.floor(Math.random()*moves.length)];
    result = pickedMove;
    return result;
    
}

function playRound(playerSelection,compueterSelection) {
    playerSelection = playerSelection.toLowerCase();
    compueterSelection = compueterSelection.toLowerCase();
    console.log(playerSelection);
    console.log(compueterSelection);
    
    const rock = "rock";               // const are to hold the avalable
    const paper = "paper";             // moves that can be done.
    const scissors = "scissors";
    

    if (playerSelection === rock && compueterSelection === scissors) return console.log("You win!");
    if (playerSelection === rock && compueterSelection === paper) return console.log("You lose");
    
    if (playerSelection === paper && compueterSelection === rock) return console.log("You win!");
    if (playerSelection === paper && compueterSelection === scissors) return console.log("You lose");

    if (playerSelection === scissors && compueterSelection === paper) return console.log("You win!");
    if (playerSelection === scissors && compueterSelection === rock) return console.log("You lose");

    if (playerSelection === compueterSelection) return console.log("Tie");
}

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

const buttons = document.getElementById("buttons");
rock.textContent = "rock";
paper.textContent = "paper";
scissors.textContent = "scissors";
buttons.appendChild(rock);
buttons.appendChild(paper);
buttons.appendChild(scissors);





rock.addEventListener('click',() => {playRound("rock",computerPlay())});
paper.addEventListener('click',() => {playRound("paper",computerPlay())});
scissors.addEventListener('click',() => {playRound("scissors",computerPlay())});


