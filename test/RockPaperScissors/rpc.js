//Create a command-line Rock Paper Scissors game that: 
// takes the player’s input from process.argv, randomly generates computer moves, 
// determines the winner, and outputs the result.

const playerMove = process.argv[2];

if (!playerMove) {
    console.log("Please choose rock, paper, or scissors.");
    process.exit();
}
// I forgot toLowerCase() here, causing error even for valid inputs
// At first I did not even account for invalid inputs like "table", I had just thought of empty input


if (playerMove !== 'rock' && playerMove !== 'paper' && playerMove !== 'scissors') {
    console.log("Invalid choice. Please choose rock, paper, or scissors.");
    process.exit();
}

const computerMove = getComputerChoice();


function getComputerChoice() {
    const moves = ['rock', 'paper', 'scissors'];
    let i = Math.floor(Math.random() * moves.length);
    return moves[i];
}

console.log(`You played: ${playerMove}`);
console.log(`Computer played: ${computerMove}`);

function playerRound(playerSelection, computerSelection) {
    let result;

    const player = playerSelection.toLowerCase();

    if (player === computerSelection) {
        result = "Draw!";
    } else if (
        (player === 'rock' && computerSelection === 'scissors') ||
        (player === 'paper' && computerSelection === 'rock') ||
        (player === 'scissors' && computerSelection === 'paper')
    ) {
        result = "Win!";
    } else {
        result = "Lose!";
    }

    return result;
}

//reading this function again, I realised I used three different ways to call the "computer move": 
// computerSelection, computerMove, getComputerChoice().
// I should stick to one way to avoid confusion. 
// But I realised it was still working and wondered why. And it got me to rethink about the function parameters that could
// actually take any value when the function is called. The name of the parameter is just a placeholder. It takes what I put
// in the function call here under. 


const result = playerRound(playerMove, computerMove);
console.log(result);


