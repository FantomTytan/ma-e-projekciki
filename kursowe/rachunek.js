const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const error = document.querySelector('.error');
const countBtn = document.querySelector('.count');
const costInfo = document.querySelector('.costInfo');
const cost = document.querySelector('.cost');

const showBill = () => {

    if (price.value == '' || people.value == '' ) {
        error.textContent = 'Uzupełnij pola!';
        costInfo.style.display = 'none';
    } else {
        error.textContent = '';
        countBill();
    }
}

countBill = () => {
    const newPrice = parseFloat(price.value);
    const newPeople = parseInt(people.value);
    const newTip = parseFloat(tip.value);

    const sum = (newPrice + newPrice * newTip) / newPeople;
    costInfo.style.display = 'block';
    cost.textContent = sum.toFixed(2);
}

countBtn.addEventListener('click', showBill)