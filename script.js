function playRound(playerSelection,compueterSelection) {
    playerSelection = playerSelection.toLowerCase();
    compueterSelection = compueterSelection.toLowerCase();
    
    const rock = "rock";               // const are to hold the avalable
    const paper = "paper";             // moves that can be done.
    const scissors = " scissors";

    if (playerSelection === rock && compueterSelection === scissors) return "You win!";
    if (playerSelection === scissors && compueterSelection === paper) return "You win!";
    if (playerSelection === paper && compueterSelection === rock) return "You win!";
    if (playerSelection === rock && compueterSelection === paper) return "You lose";
    if (playerSelection === scissors && compueterSelection === rock) return "You lose";  
    if (playerSelection === paper && compueterSelection === scissors) return "You lose";    
}

function game() {
    
}