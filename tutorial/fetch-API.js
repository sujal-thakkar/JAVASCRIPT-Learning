const factPara = document.querySelector('.fact');
const btn = document.querySelector('.btn');

const URL = 'https://cat-fact.herokuapp.com/facts'

const getFacts = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    let random = Math.round(Math.random() * 6);
    factPara.textContent = data[random].text;
    console.log(data);
}

btn.addEventListener('click', getFacts);
