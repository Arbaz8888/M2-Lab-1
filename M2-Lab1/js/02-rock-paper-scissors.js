// Function to get user's choice
function getUserChoice() {
    const userInput = prompt("Enter rock, paper, or scissors:");
    const userChoice = userInput.toLowerCase();
    if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
        return userChoice;
    } else {
        alert("Invalid choice! Please enter rock, paper, or scissors.");
        return getUserChoice(); // Recursively ask for a valid choice
    }
}

// Function to generate computer's choice
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

// Main game logic
const userChoice = getUserChoice();
const computerChoice = getComputerChoice();

console.log("User choice: " + userChoice);
console.log("Computer choice: " + computerChoice);

alert(determineWinner(userChoice, computerChoice));
