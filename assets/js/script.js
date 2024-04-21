// Constants declared for DOM elements and user/computer choices
const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score');
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

// Function to get the user choice and start the game
function startGame(userChoice) {
    const computerChoice = getComputerChoice();
    const userChoiceName = choices[userChoice];
    const computerChoiceName = choices[computerChoice];

    // Update images
    playerImage.src = `assets/images/${userChoiceName}.png`;
    computerImage.src = `assets/images/${computerChoiceName}.png`;

    // Check winner
    if (userChoice === computerChoice) {
        messages.innerHTML = `It's a draw! You both chose ${choices[userChoice]}.`;
    } else if ((userChoice === 0 && computerChoice === 2) ||
        (userChoice === 1 && computerChoice === 0) ||
        (userChoice === 2 && computerChoice === 1)) {
        messages.innerHTML = `You win! ${choices[userChoice]} beats ${choices[computerChoice]}.`;
        userScore.textContent = parseInt(userScore.textContent) + 1;
    } else {
        messages.innerHTML = `You lose! ${choices[computerChoice]} beats ${choices[userChoice]}.`;
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }
}

// Adding event listeners to buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        const choice = parseInt(this.getAttribute('data-choice'));
        startGame(choice);
    });
}
