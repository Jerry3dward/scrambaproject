const grid = document.querySelector('.grid');
const startBtn = document.getElementById('start');
const scoreDisplay = document.getElementById('score')
let squares = [];
let currentsnake = [0,1,2];
let direction = 1;
const width = 10;
let appleindex = 0;
let score = 0;
let intervalTime = 500;
let speed = 0.9;
let timerid = 0;

function start () {
    currentsnake.forEach(indexx => squares[indexx].classList.remove('snake'))
    squares[appleindex].classList.remove('apple')
    clearInterval(timerid)
    currentsnake = [2,1,0]
    score = 0
    scoreDisplay.textContent = score
    direction = 1
    intervalTime = 500
    apple()
    currentsnake.forEach(indexx => squares[indexx].classList.add('snake'))
    timerid = setInterval(move, intervalTime)
}
function createGrid() {
    for (let i = 0; i < 100; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
        squares.push(square);
    }
}
createGrid()
currentsnake.forEach(indexx => squares[indexx].classList.add('snake'));

function move () {
    const tail = currentsnake.pop()
    squares[tail].classList.remove('snake')
    currentsnake.unshift(currentsnake[0] + direction)
    squares[currentsnake[0]].classList.add('snake')

    if (squares[currentsnake[0]].classList.contains('apple')){
        squares[currentsnake[0]].classList.remove('apple')
        squares[tail].classList.add('snake')
        currentsnake.push(tail)
        apple()
        score++
        scoreDisplay.textContent = score;
        clearInterval(timerid)
        console.log(intervalTime)
        intervalTime = intervalTime * speed
        console.log(intervalTime)
        timerid = setInterval(move, intervalTime)
    }
}

function apple () {
    do {
        appleindex = Math.floor(Math.random () * squares.length)
    }  while(squares[appleindex].classList.contains('snake'))
        squares[appleindex].classList.add('apple')
}
apple()

function control(e) {
    if(e.keyCode === 39) {
        console.log('right pressed')
        direction = 1
    }   else if (e.keyCode === 38) {
        console.log('up presssed')
        direction = -width
    }   else if (e.keyCode === 37) {
        console.log('left pressed')
        direction = -1
    }   else if (e.keyCode === 40) {
        console.log('down pressed')
        direction = +width
    }
}

document.addEventListener('keyup', control)
startBtn.addEventListener('click', start)