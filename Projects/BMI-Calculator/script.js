const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        result.textContent = `Invalid height input, ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.textContent = `Invalid height input, ${weight}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        result.textContent = `Your BMI is ${bmi}`
        const p = document.createElement('p')
        if (bmi < 18.6) {
            p.innerHTML = `Unfortunately, you're Under-weight`
            p.style.color = "red"
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            p.innerHTML = `Don't worry, your BMI is in normal range`
            p.style.backgroundColor = "green"
            p.style.color = "black"
        } else {
            p.innerHTML = `Unfortunately, you're Over-weight`
            p.style.color = "black"
            p.style.backgroundColor = "red"
        }
        p.style.fontSize = "2rem"
        p.style.fontFamily = "Arial"
        result.appendChild(p)
    }
})