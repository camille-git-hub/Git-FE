// You can work here or download the template

const buttonRock = document.getElementById('rock');
const buttonPaper = document.getElementById('paper');
const buttonScissors = document.getElementById('scissors');

let userChoice = '';

buttonRock.addEventListener('click', (e) => {
    userChoice = 'rock';
    console.log(userChoice);
});

buttonPaper.addEventListener('click', (e) => {
    userChoice = 'paper';
    console.log(userChoice);
});

buttonScissors.addEventListener('click', (e) => {
        userChoice = 'scissors';
        console.log(userChoice);
});

const playButton = document.getElementById('play-button');

playButton.addEventListener('click', (e) => {
    if (userChoice === '') {
        alert('Please make a choice before playing!');
        return;
    } 
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    alert(`You chose: ${userChoice}\nComputer chose: ${computerChoice}\n${result}`);
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(user, computer) {
    if (user === computer) {
        return 'It\'s a tie!';
    } else if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
};

