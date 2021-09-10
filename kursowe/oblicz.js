const incomeSection = document.querySelector('.income-area')
const expensesSection = document.querySelector('.expenses-area')
const availableMoney = document.querySelector('.available-money')
const addTransactionPanel = document.querySelector('.add-transaction-panel')

const nameInput = document.querySelector('#name')
const amountInput = document.querySelector('#amount')
const categorySelect = document.querySelector('#category')

const addTransactionBtn = document.querySelector('.add-transaction')
const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')
const deleteBtn = document.querySelector('.delete')
const deleteAllBtn = document.querySelector('.delete-all')
const lightStyleBtn = document.querySelector('.light')
const darkStyleBtn = document.querySelector('.dark')


let root = document.documentElement;
let ID = 0;
let categoryIcon;
let moneyArr = [0];
let selectedCategory;


const showPanel = () => {
    addTransactionPanel.style.display = 'flex';
}
const closePanel = () => {
    addTransactionPanel.style.display = 'none';
    clearInput();
}
const clearInput = () => {
    nameInput.value = '';
    amountInput.value = '';
    categorySelect.selectedIndex = 0;
}



const checkForm = () => {
    if (nameInput.value !== '' && amountInput.value !== '' && categorySelect.value !== '') {
        createNewTransaction()
    } else {
        alert('uzupełnij wszystko')
    }
}



const createNewTransaction = () => {
   const newTransaction = document.createElement('div');
   newTransaction.classList.add('transaction'); 
   newTransaction.setAttribute('id', ID);
  
    checkCategory(selectedCategory);

   newTransaction.innerHTML = `<p class="transaction-name">${categoryIcon} ${nameInput.value}</p>
   <p class="transaction-amount">${amountInput.value}zł <button class="delete" onclick="deleteTransaction(${ID})"><i class="fas fa-times"></i></button>
   </p>`

   amountInput.value > 0 ? incomeSection.appendChild(newTransaction) && newTransaction.classList.add('income') : expensesSection.appendChild(newTransaction) && newTransaction.classList.add('expense')

   moneyArr.push(parseFloat(amountInput.value));
   countMoney(moneyArr);
   closePanel();
   ID++;
   clearInput()
}

const selectCategory = () => {
    selectedCategory = categorySelect.options[categorySelect.selectedIndex].text; 
}

const checkCategory = transaction => {
    switch(transaction) {
        case '[ + ] Przychód':
        categoryIcon = '<i class="fas fa-money-bill-wave"></i>';
        break;
        case '[ - ] Zakupy':
        categoryIcon = '<i class="fas fa-cart-arrow-down"></i>';
        break;
        case '[ - ] Jedzenie':
        categoryIcon = '<i class="fas fa-hamburger"></i>';
        break;
        case '[ - ] Kino':
        categoryIcon = '<i class="fas fa-film"></i>';
        break;
    }
}

const countMoney = money => {
    const newMoney = money.reduce((a,b) => a + b)
    availableMoney.textContent = `${newMoney}zł`
}

const deleteTransaction = id => {
    const transactionToDelete = document.getElementById(id);
    const transactionAmount = parseFloat(transactionToDelete.childNodes[2].innerText)
    const indexOfTransaction = moneyArr.indexOf(transactionAmount)

    moneyArr.splice(indexOfTransaction, 1);

    transactionToDelete.classList.contains('income') ? incomeSection.removeChild(transactionToDelete) : expensesSection.removeChild(transactionToDelete)

    countMoney(moneyArr);
}

const deleteAllTransactions = () => {
    incomeSection.innerHTML = '<h3>Przychód:</h3>'
    expensesSection.innerHTML = '<h3>Wydatki:</h3>'
    availableMoney.textContent = '0zł'
    moneyArr = [0]
}

const changeStyleToLight = () => {
    root.style.setProperty('--first-color', '#F9F9F9');
    root.style.setProperty('--second-color', '#14161F');
    root.style.setProperty('--border-color', 'rgba(0, 0, 0, .2)');
}
const changeStyleToDark = () => {
    root.style.setProperty('--first-color', '#14161F');
    root.style.setProperty('--second-color', '#F9F9F9');
    root.style.setProperty('--border-color', 'rgba(255, 255, 255, .4)');
}

console.log(root.style)

// showPanel();
addTransactionBtn.addEventListener('click', showPanel)
cancelBtn.addEventListener('click', closePanel)
saveBtn.addEventListener('click', checkForm)
deleteAllBtn.addEventListener('click', deleteAllTransactions)
lightStyleBtn.addEventListener('click', changeStyleToLight)
darkStyleBtn.addEventListener('click', changeStyleToDark)