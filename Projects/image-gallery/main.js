const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']
/* Declaring the alternative text for each image file */
const altNames = {
    'pic1.jpg': 'big eye',
    'pic2.jpg': 'painting',
    'pic3.jpg': 'flowers',
    'pic4.jpg': 'egypt\'s pharaoh',
    'pic5.jpg': 'butterfly on leaf'
}
/* Looping through images */
for(let img of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${img}`);
    newImage.setAttribute('alt', `altNames.${img}`);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', function() {
        displayedImage.src = this.src;
        displayedImage.alt = this.alt;
    })
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {
    if(btn.getAttribute('class') === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = 'lighten';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    } else {
        btn.setAttribute("class", 'dark');
        btn.textContent = 'darken';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
    }
})