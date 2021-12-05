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
    if (playerSelection === compueterSelection) return "tie";   
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    let gamesPlayed = 0;

    while(gamesPlayed < 5) {
        let move = window.prompt("Chose move");
        let result = playRound(move,"scissors");
        
        if(result === "You win!") {
            playerWins++;
            console.log("You win!")
        }else {
            computerWins++;
            console.log("You lose");
        }

        gamesPlayed++;
    }

    

}