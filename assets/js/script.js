/**
 * Constants declared for DOM elements and user/computer choices 
 */ 
const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score');
const buttons = document.getElementsByClassName('choice-btn');
const playerImage = document.getElementById('rps-image-two');
const computerImage = document.getElementById('rps-image-one');
const messages = document.getElementById('game-message');
const choices = ['rock', 'paper', 'scissors'];

/**
 * Variables to track the scores
 */
let userScoreValue = 0;
let computerScoreValue = 0;

/**
 * Function to randomly generate computer choice 
 */ 
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}


/**
 * Function to check if any player has reached the score of 10
 * Used template from - https://stackoverflow.com/questions/64283015/vanilla-javascript-end-game-when-player-reaches-a-certain-score 
 * edited to suit the game
 */ 
function checkScore() {
    if (userScoreValue === 10) {
        messages.innerHTML = 'Congratulations! You won the game!';
        disableButtons();
    } else if (computerScoreValue === 10) {
        messages.innerHTML = 'Sorry! Computer won the game!';
        disableButtons();
    }
}

/**
 * Function to disable buttons after one player has reached the score of 10
 * used - https://www.altcademy.com/blog/how-to-disable-a-button-in-javascript/#:~:text=In%20JavaScript%2C%20you%20can%20disable,or%20false%20to%20enable%20it.
 * for reference
 */ 
function disableButtons() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}

/**
 * Function to reset the scores
 * used - https://stackoverflow.com/questions/49432077/how-can-i-reset-both-scores-to-0-once-10-is-reached
 * for reference
 */ 
function resetScores() {
    userScoreValue = 0;
    computerScoreValue = 0;
    userScore.textContent = 0;
    computerScore.textContent = 0;
    messages.innerHTML = 'Welcome to Rock, Paper & Scissors game! The first to reach 10 wins!';
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }
    playerImage.src = "assets/images/rock-paper-scissors.png";
    computerImage.src = "assets/images/rock-paper-scissors.png";
}

/**
 * Function to get the user choice and start the game 
 */ 
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
        // Check if its a close game
        if (userScoreValue >= 7 && computerScoreValue >= 7 && Math.abs(userScoreValue - computerScoreValue ) <= 1) {
            messages.innerHTML += "This is a close game!";
        }
    } else if ((userChoice === 0 && computerChoice === 2) ||
        (userChoice === 1 && computerChoice === 0) ||
        (userChoice === 2 && computerChoice === 1)) {
        messages.innerHTML = `You win! ${choices[userChoice]} beats ${choices[computerChoice]}.`;
        userScoreValue++;
        userScore.textContent = userScoreValue;
    } else {
        messages.innerHTML = `You lose! ${choices[computerChoice]} beats ${choices[userChoice]}.`;
        computerScoreValue++;
        computerScore.textContent = computerScoreValue;
    }
    
    checkScore();
}

/**
 * Adding event listeners to buttons
 * used - https://stackoverflow.com/questions/77524755/how-to-get-a-value-from-the-innerhtml-through-a-event-listener-if-you-click-on-o
 * for reference - edited to suit the game
 * */ 
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        startGame(parseInt(this.getAttribute('data-choice')));
    });
}

// Adding event listener to reset button
document.querySelector('.reset-btn').addEventListener('click', resetScores);

// Display message at the start of the game
messages.innerHTML = 'Welcome to Rock, Paper & Scissors game! The first to reach 10 wins!';
