let playerScore = 0;
let computerScore = 0;

// constants declared for DOM elements and user/computer chocies
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const gameMessage = document.getElementById('game-message').querySelector('h1');
const rockBtn = document.querySelector('[data-choice="0"]');
const paperBtn = document.querySelector('[data-choice="1"]');
const scissorsBtn = document.querySelector('[data-choice="2"]');
const resetBtn = document.querySelector('.reset-btn');
const userImage = document.getElementById('user').querySelector('img');
const computerImage = document.getElementById('computer').querySelector('img');

// Function to randomly select the computer's choice
function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
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
rockBtn.addEventListener('click', function() {
    playerChoice('rock');
})

paperBtn.addEventListener('click', function() {
    playerChoice('paper');
})

scissorsBtn.addEventListener('click', function() {
    playerChoice('scissors');
})

// Reset the scoresgit status