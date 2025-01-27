const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".reset");
const msgContainer = document.querySelector(".winner-msg")
const message = document.querySelector("#msg");
const newGameBtn = document.querySelector(".new-game")


let turnOf_O = true; // false: turn of X

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

let count = 0;

const resetGame = () => {
    turnOf_O = true;
    enableBoxes();
    msgContainer.classList.add('hide');
    newGameBtn.classList.add('hide');
    resetBtn.classList.remove('hide');
    count = 0;
}

boxes.forEach(box => {
    box.addEventListener('click', () => {
        if (turnOf_O) {
            box.innerHTML = 'O';
            box.style.color = '#FB8500'
            turnOf_O = false;
        }
        else if (!turnOf_O) {
            box.innerHTML = 'X';
            box.style.color = '#e0aaff'
            turnOf_O = true;
        }
        box.disabled = true;

        count++;

        if(checkWinner()) {
            return;
        }

        if(count === 9) {
            displayDraw();
        }
    });
});

const enableBoxes = () => {
    for (const box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
}
const disableBoxes = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
}
const displayWinner = (winner) => {
    message.innerHTML = `Congrats, player '${winner}' has won the game!`;
    msgContainer.classList.remove('hide');
    newGameBtn.classList.remove('hide');
    resetBtn.classList.add('hide');
    disableBoxes();
}

const displayDraw = () => {
    message.innerHTML = `Game has been Drawn!`;
    msgContainer.classList.remove('hide');
    newGameBtn.classList.remove('hide');
    resetBtn.classList.add('hide');
    disableBoxes();
}

const checkWinner = () => {
    for (const pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos2Val = boxes[pattern[1]].innerHTML;
        let pos3Val = boxes[pattern[2]].innerHTML;

        if(pos1Val != '' && pos2Val != '' && pos3Val != '') {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                displayWinner(pos1Val);
            } 
        }
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);