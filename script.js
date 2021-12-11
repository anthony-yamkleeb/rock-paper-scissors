function computerPlay() {
    let moves = ["rock","paper","scissors"];
    let pickedMove = moves[Math.floor(Math.random()*moves.length)];
    result = pickedMove;
    return result;
    
}

function playRound(playerSelection,compueterSelection) {
    playerSelection = playerSelection.toLowerCase();
    compueterSelection = compueterSelection.toLowerCase();
    
    const rock = "rock";               // const are to hold the avalable
    const paper = "paper";             // moves that can be done.
    const scissors = "scissors";
    

    if (playerSelection === rock && compueterSelection === scissors) return "You win!";
    if (playerSelection === rock && compueterSelection === paper) return "You lose";

    if (playerSelection === paper && compueterSelection === rock) return "You win!";
    if (playerSelection === paper && compueterSelection === scissors) return "You lose";

    if (playerSelection === scissors && compueterSelection === paper) return "You win!";
    if (playerSelection === scissors && compueterSelection === rock) return "You lose";

    if (playerSelection === compueterSelection) return "Tie";
}

function game() {
    const rock = document.createElement("button");
    const paper = document.createElement("button");
    const scissors = document.createElement("button");
    rock.textContent = "rock";
    paper.textContent = "paper";
    scissors.textContent = "scissors";

    const buttons = document.getElementById("buttons");
    buttons.appendChild(rock);
    buttons.appendChild(paper);
    buttons.appendChild(scissors);

   
    let matches = 0;
    const result = document.createElement("div");
    const body = document.querySelector("body");
    const script = document.querySelector("script");
    body.insertBefore(result,script);

    rock.addEventListener('click',() => {
            const result = playRound("rock",computerPlay())
            

    });
    paper.addEventListener('click',() => {playRound("paper",computerPlay())});
    scissors.addEventListener('click',() => {playRound("scissors",computerPlay())});

    if (matches === 5) {
        
    }
    
}




