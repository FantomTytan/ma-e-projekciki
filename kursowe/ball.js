const ball = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answersArr = ['tak', 'nie', 'może', 'na pewno', 'tiiaaa, jasnee', 'psss taaa', 'pewnie że tak', 'nie ma mowy', 'jak się postarasz to tak', 'spokojnie bez problemu', 'nigdy sie tego nie dowiesz', 'niedługo się dowiesz', 'ciężko powiedzieć', 'nie chcesz znać odpowiedzi', 'czasami', 'może kiedyś', 'tak było kiedyś', 'na 100%'];
const arrLength = answersArr.length

const shakeBall = () => {
    ball.classList.add('shake-animation');
    setTimeout(checkInput, 800);
}

const checkInput = () => {
    
    var last = input.value.slice(-1);
    console.log(last)
    if (input.value !== '' && last === '?') {
        generateAnswer();
        error.textContent = '';
    } else if (input.value !== '' && last !== '?') {
        error.textContent = 'musisz dać znak zapytania "?"';
        answer.textContent = '';
    } else {
        error.textContent = 'musisz zadać jakieś pytanie';
        answer.textContent = '';
    }
    ball.classList.remove('shake-animation');
}

const generateAnswer = () => {
    const number = Math.floor(Math.random() * arrLength);
    answer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[number]}`
}

ball.addEventListener('click', shakeBall)
