// constants declared for DOM elements and user/computer chocies
const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('user-score');
const buttons = document.getElementsByClassName('choice-btn');
const playerImage = document.getElementById('rps-image-two');
const computerImage = document.getElementById('rps-image-one');
const messages = document.getElementById('game-message');
const choices = ['rock', 'paper', 'scissors'];

// Function to randomly generate computer choice
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

function startGame(userChoice) {
    const computerChoice = getComputerChoice();
    const userChoiceName = choices[userChoice];
    const computerChoiceName = choices[computerChoice];

    // Update images
    playerImage.src = `assets/images/${userChoiceName}.png`;
    computerImage.src = `assets/images/${computerChoiceName}.png`;
}