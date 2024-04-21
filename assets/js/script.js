// constants declared for DOM elements and user/computer chocies
const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('user-score');
const buttons = document.getElementsByClassName('choice-btn');
const playerImage = document.getElementById('rps-image-two');
const computerImage = document.getElementById('rps-image-one');
const messages = document.getElementById('game-message');
const choices = ['rock', 'paper', 'scissors'];

// Function to randomly select the computer's choice
function computerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

// Function to determine the winner of a round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ("it's a tie");
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors')
        (playerSelection === 'paper' && computerSelection === 'rock')
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        return "You win!" + playerSelection + "beats" + computerSelection;
    } else {
        computerScore++;
        return "You lost!" + computerSelection + "beats" + playerSelection;
    }
}


// Function called when the player makes a choice
function playerChoice(playerSelection) {
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    // Display the result
    messageDiv.textContent = result;
    userScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    userImage.src = 'assets/images/' + playerSelection + '.webp';
    computerImage.src = 'assets/images/' + computerSelection + '.webp';
}

// Event listeners for the game buttons


// Start the game


// Reset the scores
