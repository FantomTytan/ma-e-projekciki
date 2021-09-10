const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
const historyBtn = document.querySelector('.history')

const stopwatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')

const timeList = document.querySelector('.time-list')

const modalShadow = document.querySelector('.modal-shadow')
const closeModalBtn = document.querySelector('.close')

const infoBtn = document.querySelector('.fa-question')
const colorBtn = document.querySelector('.fa-paint-brush')

const colorOne = document.querySelector('.one')
const colorTwo = document.querySelector('.two')
const colorThree = document.querySelector('.three')
const colorFour = document.querySelector('.four')
const colorPanel = document.querySelector('.colors')


let root = document.documentElement
let countTime;
let minutes = 0;
let seconds = 0;
let timesArr = [];


const handleStart = () => {
    clearInterval(countTime);
    countTime = setInterval(() => {
        if (seconds < 9) {
            seconds++;
            stopwatch.textContent = `${minutes}:0${seconds}`
        } else if (seconds >= 9 && seconds < 59) {
            seconds++;
            stopwatch.textContent = `${minutes}:${seconds}`
        } else {
            minutes++;
            seconds = 0;
            stopwatch.textContent = `${minutes}:00`
        }
    }, 1000);
}


const handleStop = () => {
    time.innerHTML = `Ostatni pomiar: ${stopwatch.textContent}`;

    if (stopwatch.textContent !== `0:00`) {
        time.style.visibility = 'visible';
        if (timesArr.length < 4) {
            timesArr.push(stopwatch.textContent)
        }
        console.log(timesArr);
    }

    clearStuff();
}


const handlePause = () => {
    clearInterval(countTime);
}


const handleReset = () => {
    time.style.visibility = 'hidden';
    timesArr = [];
    clearStuff();
}


const clearStuff = () => {
    clearInterval(countTime);
    stopwatch.textContent = `0:00`
    timeList.textContent = '';
    minutes = 0;
    seconds = 0;
}


const showHistory = () => {
    let num = 1;
    timeList.textContent = '';
    timesArr.forEach(time => {
        const newTime = document.createElement('li');
        newTime.innerHTML = `Pomiar nr ${num}: <span>${time}</span>`
        timeList.appendChild(newTime)
        num++;
    })
}


const showModal = () => {
    if (!(modalShadow.style.display === 'block')) {
        modalShadow.style.display = 'block'
    } else {
        modalShadow.style.display = 'none'
    }
    modalShadow.classList.toggle('modal-animation')
}


startBtn.addEventListener('click', handleStart)
pauseBtn.addEventListener('click', handlePause)
stopBtn.addEventListener('click', handleStop)
resetBtn.addEventListener('click', handleReset)
historyBtn.addEventListener('click', showHistory)
infoBtn.addEventListener('click', showModal)
closeModalBtn.addEventListener('click', showModal)


window.addEventListener('click', e => e.target === modalShadow ? showModal() : false);


colorOne.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(177, 255, 104)');
})
colorTwo.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(96, 152, 255)');
})
colorThree.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(241, 82, 255)');
})
colorFour.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(255, 67, 67)');
})
colorBtn.addEventListener('click', () => {
    colorPanel.classList.toggle('show-colors');
})