// Unordered list where player's guessed letters will appear
const guessedLetters = document.querySelector(".guessed-letters");
// Button with text "Guess!"
const guessButton = document.querySelector(".guess");
// Text input where player will guess a letter
const textInput = document.querySelector(".letter");
// Empty paragraph where word in progress will appear
const wordInProgress = document.querySelector(".word-in-progress");
// Paragraph where remaining guesses will display
const remainingGuess = document.querySelector(".remaining");
// Span inside paragraph where the remaining guesses will display
const remainingSpan = document.querySelector(".remaining span");
// Empty paragraph where messages will appear when a letter is guessed
const guessedMessage = document.querySelector(".message");
// Hidden button that prompts player to play again
const playAgainButton = document.querySelector(".play-again hide");
// Test word 
const word = "magnolia";

const placeholder = function (word) {
   const placeholderLetters = [];
   for (const letter of word) {
    //console.log(letter);
    placeholderLetters.push("●");
   }
   wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const inputLetter = textInput.value;
    console.log(inputLetter);
    textInput.value = "";
});