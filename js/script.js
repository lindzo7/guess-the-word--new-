// Unordered list where player's guessed letters will appear
const guessedLettersList = document.querySelector(".guessed-letters");
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
// Array containing all the guessed letters.
const guessedLetters = [];

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
    guessedMessage.innerText = "";
    const inputLetter = textInput.value;
    const goodGuess = validateInput(inputLetter);
    
    if (goodGuess) {
        makeGuess(inputLetter);
    }
    textInput.value = "";
});

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        guessedMessage.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        guessedMessage.innerText = "Please guess only one letter at time.";
    } else if (!input.match(acceptedLetter)) {
        guessedMessage.innerText = "Please enter a letter A to Z.";
    } else {
        return input;
    }
};

const makeGuess = function (inputLetter) {
    inputLetter = inputLetter.toUpperCase();
    if (guessedLetters.includes(inputLetter)) {
        guessedMessage.innerText = "You have already guessed that letter please try again.";
    } else {
        guessedLetters.push(inputLetter);
        console.log(guessedLetters);
        playerGuesses();
        updateWord(guessedLetters);
    }
};

const playerGuesses = function () {
    guessedLettersList.innerHTML = "";
   
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersList.append(li);
    }
};

const updateWord = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const showWord = [];
    for (const letter of wordArray) {
      if (guessedLetters.includes(letter)) {
        showWord.push(letter.toUpperCase());
      } else {
        showWord.push("●");
      }
    }
    //console.log(showWord);
    wordInProgress.innerText = showWord.join("");
    winCheck();
};

const winCheck = function () {
    if (wordInProgress.innerText === word.toUpperCase()) {
        guessedMessage.classList.add("win");
        guessedMessage.innerHTML = "<p class='highlight'>You guessed correct the word! Congrats!</p>";
    }
};