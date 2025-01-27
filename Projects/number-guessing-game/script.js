let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessesLeft = 10;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const remainingGuesses = document.querySelector(".remainingGuesses");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
guessField.focus();

function checkGuess(userGuess) {
    if (guessCount === 1) {
        guesses.textContent = "Previous guesses:";
    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`;

    if (userGuess === randomNumber) {
        lastResult.textContent = "Congratulations! You got it right!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        remainingGuesses.textContent = `Fuck those ${guessesLeft - 1} remaining guesses, You just got it right man!`;
        setGameOver();
    } else if (guessesLeft === 1) {
        lastResult.textContent = "!!!GAME OVER!!!";
        lowOrHi.textContent = "";
        setGameOver();
    } else {
        lastResult.textContent = "Wrong!";
        lastResult.style.backgroundColor = "red";
        guessesLeft--;
        remainingGuesses.textContent = `You have ${guessesLeft} guesses left.`;
        if (userGuess < randomNumber) {
            lowOrHi.textContent = "Last guess was too low!";
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = "Last guess was too high!";
        }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener("click", () => {
    const userGuess = Number(guessField.value.trim());
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        lastResult.textContent =
            "Please enter a valid number between 1 and 100.";
        lastResult.style.backgroundColor = "red";
    } else {
        checkGuess(userGuess);
    }
});

guessField.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        guessSubmit.click();
    }
});

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame() {
    guessCount = 1;
    guessesLeft = 10;

    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetPara of resetParas) {
        resetPara.textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";

    randomNumber = Math.floor(Math.random() * 100) + 1;
    remainingGuesses.textContent = `You have ${guessesLeft} guesses left.`;
}

remainingGuesses.textContent = `You have ${guessesLeft} guesses left.`;