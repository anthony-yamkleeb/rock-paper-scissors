function computerPlay() {
    let moves = ["rock", "paper", "scissors"];
    let pickedMove = moves[Math.floor(Math.random() * moves.length)];
    result = pickedMove;
    return result;

}

function playRound(playerSelection, compueterSelection) {
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

    const result = document.createElement("div");
    const body = document.querySelector("body");
    const script = document.querySelector("script");
    body.insertBefore(result, script);



    rock.addEventListener('click', () => {
        const gameResult = playRound("rock", computerPlay())
        score(gameResult);
        result.textContent = gameResult

        if (score !== "") {
            result.textContent = gameResult;
        } else {
            result.textContent = score;
        }

    });
    paper.addEventListener('click', () => { playRound("paper", computerPlay()) });
    scissors.addEventListener('click', () => { playRound("scissors", computerPlay()) });
}

let score = function (result) {
    let matches = 0;
    let wins = 0;
    let losses = 0;

    if (matches === 5) {
        matches = 0;
        let gameEnd = ""
        if (wins > 3) gameEnd = "You won majority of 5 matches";
        if (losses > 3) gameEnd = "You lost majoiry of 5 matches";
        if (wins === losses) gameEnd = "Tie";

        wins = 0;
        losses = 0;

        return gameEnd;
    }

    if (result === "You win!") wins++;
    if (result === "You lose") losses++;

}






