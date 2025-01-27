const winnerMsgContainer = document.querySelector(".winner-msg");
const msg = document.querySelector('.msg');
const newGameBtn = document.querySelector('.new-game-btn');
const boxes = document.querySelectorAll('.box');
const resetBtn = document.querySelector('.reset-btn');

let turnOf_X = true;

const patterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = () => {
    enableBoxes();
    for (const box of boxes) {
        box.innerHTML = '';
    }
    resetBtn.classList.remove('hide');
    newGameBtn.classList.add('hide');
    winnerMsgContainer.classList.add('hide');
    count = 0;
}

let count = 0;
boxes.forEach(box => {
    box.addEventListener('click', () => {
        if(turnOf_X) {
            box.innerHTML = '✖️';
            turnOf_X = false;
        }
        else {
            box.innerHTML = '⭕'
            turnOf_X = true;
        }
        box.disabled = true;
        
        count++;
        if(checkWinner()) {
            return;
        }
        else if(count === 9) {
            displayDraw();
        }
    })
});

disableBoxes = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
}

enableBoxes = () => {
    for (const box of boxes) {
        box.disabled = false;
    }
}

const displayWinner = (player) => {
    disableBoxes();
    winnerMsgContainer.classList.remove('hide');
    newGameBtn.classList.remove('hide');
    resetBtn.classList.add('hide');
    msg.innerHTML = `Congratulations on winning: Player${player}`
}

const displayDraw = () => {
    disableBoxes();
    winnerMsgContainer.classList.remove('hide');
    newGameBtn.classList.remove('hide');
    resetBtn.classList.add('hide');
    msg.innerHTML = `Match is drawn, No winner found!`
}
const checkWinner = () => {
    for (const pattern of patterns) {
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;

        if(pos1 != '' && pos2 != '' && pos3 != '') {
            if(pos1 === pos2 && pos2 === pos3) {
                displayWinner(pos1);
            }
        }
    }
}

newGameBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);