const dropdowns = document.querySelectorAll('.dropdown select')
const btn = document.querySelector('.button-85')
const fromCurrency = document.querySelector('.from select')
const toCurrency = document.querySelector('.to select')
const msg = document.querySelector('.msg')
const exchangeBtn = document.querySelector('.fa-right-left')

const baseURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies`;
// const URL = `${baseURL}/${eur}.json`;

for(let select of dropdowns) {
    for(currencyCode in countryList) {
        const newOption = document.createElement('option');
        newOption.innerHTML = currencyCode;
        newOption.value = currencyCode;
        select.appendChild(newOption);
        if(select.name === 'from' && currencyCode === 'USD') {
            newOption.selected = 'selected';
        } 
        else if(select.name === 'to' && currencyCode === 'INR') {
            newOption.selected = 'selected';
        }
    }
    select.addEventListener('change', (e)=>{
        changeFlag(e.target);
    })
}


const changeFlag = (element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
    let img = element.parentElement.querySelector('img');
    img.src = newSrc;
}

const updateCurrency = async () => {
    let amount = document.querySelector('.amount input');
    let amountVal = amount.value;
    if(amountVal === '' || amountVal < 1) {
        amountVal = 1;
        amount.value = '1';
    }
    const URL = `${baseURL}/${fromCurrency.value.toLowerCase()}.json`
    const response = await fetch(URL);
    const data = await response.json();
    const rate = data[fromCurrency.value.toLowerCase()][toCurrency.value.toLowerCase()];
    const finalAmount = amountVal * rate;
    msg.innerHTML = `${amountVal} ${fromCurrency.value} 🟰 ${finalAmount} ${toCurrency.value}`
}

window.addEventListener('load', updateCurrency());

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    updateCurrency();
})

exchangeBtn.addEventListener('click', ()=>{
    let tempVal = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempVal;

    let fromImg = fromCurrency.parentElement.querySelector('img');
    let toImg = toCurrency.parentElement.querySelector('img');
    let tempSrc = fromImg.src;
    fromImg.src = toImg.src;
    toImg.src = tempSrc;

    updateCurrency()
})
