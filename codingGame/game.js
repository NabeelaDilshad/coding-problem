


// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;


// Initialize variables
let attempts = 0;
let guessedNumber = 0;

// Welcome message
console.log("Welcome to the guessing game! Can you guess the number between 1 and 100?");

// Loop until the user guesses the correct number
while (guessedNumber !== targetNumber) {
    // Prompt the user to enter their guess
    guessedNumber = parseInt(prompt("Enter your guess (between 1 and 100):"));

    // Increment the attempts counter
    attempts++;

    // Check if the guess is correct, too low, or too high
    if (guessedNumber === targetNumber) {
        console.log(`Congratulations! You guessed the correct number (${targetNumber}) in ${attempts} attempts.`);
    } else if (guessedNumber < targetNumber) {
        console.log("Too low! Try again.");
    } else {
        console.log("Too high! Try again.");
    }
}

// End of the game
console.log("Game over. Thanks for playing!");
