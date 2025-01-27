const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const body = document.querySelector('body');

const min = 0, max = 255;
const randomRGB = () => {
    const rndColor = Math.floor(Math.random() * 256);
    return rndColor;
};

let bgColor;
console.log(bgColor);
const changeBgColor = () => {
    if (bgColor === undefined) {
        bgColor = setInterval(() => {
            body.style.backgroundColor = `RGB(${randomRGB()},${randomRGB()}, ${randomRGB()})`;
        }, 1000);
        console.log('Background color will change in every second');
    }
    else alert('Background color is already changing');
};

const stopBgColor = () => {
    clearInterval(bgColor);
    bgColor = undefined;
    console.log('Changing of background color has stopped');
}

startBtn.addEventListener('click', changeBgColor);
stopBtn.addEventListener('click', stopBgColor);
