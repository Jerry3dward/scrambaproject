const width = 28;
const grid = document.querySelector('.grid');
const scoreDisplay = document.getElementById('score');
let squares = [];
let score = 0;
//design layout for game
const layout = [
0,	3,	0,	0,	2,	2,	0,	3,	4,	0,	4,	3,	4,	0,	4,	4,	2,	1,	2,	2,	2,	2,	2,	3,	0,	2,	0,	3,
1,	4,	0,	2,	2,	1,	2,	3,	3,	0,	2,	0,	4,	4,	3,	1,	2,	4,	3,	3,	4,	3,	1,	0,	3,	0,	2,	2,
2,	1,	1,	3,	0,	2,	4,	3,	2,	3,	1,	2,	1,	2,	4,	1,	1,	4,	2,	4,	4,	2,	2,	3,	0,	0,	3,	3,
0,	1,	2,	3,	1,	4,	0,	4,	0,	0,	1,	1,	3,	0,	3,	1,	3,	0,	3,	0,	2,	0,	1,	3,	3,	1,	0,	2,
3,	0,	2,	4,	0,	0,	1,	0,	3,	2,	0,	0,	4,	4,	0,	2,	3,	3,	4,	0,	3,	1,	3,	2,	0,	4,	4,	4,
1,	1,	2,	4,	0,	2,	0,	3,	0,	1,	2,	2,	4,	2,	2,	0,	0,	0,	2,	4,	1,	0,	1,	2,	2,	1,	0,	1,
3,	2,	0,	4,	1,	4,	0,	4,	0,	0,	2,	0,	2,	0,	0,	3,	1,	2,	3,	2,	0,	0,	2,	0,	0,	4,	4,	4,
0,	1,	4,	1,	1,	2,	2,	3,	0,	0,	2,	4,	1,	3,	0,	3,	0,	0,	3,	0,	1,	4,	1,	3,	4,	2,	1,	1,
0,	3,	1,	1,	4,	2,	1,	2,	0,	4,	3,	4,	2,	1,	0,	4,	1,	0,	0,	1,	3,	4,	1,	3,	3,	2,	3,	2,
0,	3,	2,	4,	1,	4,	1,	4,	4,	0,	2,	0,	2,	0,	3,	2,	2,	4,	4,	2,	2,	0,	2,	1,	3,	3,	3,	0,
0,	0,	3,	0,	1,	0,	0,	4,	2,	1,	4,	4,	2,	1,	3,	2,	4,	1,	3,	3,	0,	2,	0,	0,	1,	1,	0,	2,
2,	2,	4,	4,	1,	3,	1,	0,	2,	0,	1,	4,	3,	1,	0,	0,	3,	2,	3,	3,	0,	0,	0,	2,	2,	2,	2,	2,
1,	3,	3,	1,	0,	3,	4,	2,	0,	0,	0,	1,	3,	4,	3,	1,	4,	0,	2,	2,	2,	2,	4,	2,	1,	0,	3,	3,
0,	3,	1,	0,	1,	3,	2,	0,	0,	3,	4,	3,	3,	0,	2,	0,	2,	0,	0,	0,	3,	3,	4,	1,	4,	4,	4,	4,
4,	3,	3,	4,	4,	4,	0,	2,	3,	1,	3,	3,	0,	4,	4,	4,	4,	2,	1,	0,	4,	2,	2,	2,	1,	1,	1,	0,
0,	1,	0,	0,	2,	4,	1,	4,	3,	1,	0,	1,	0,	3,	2,	4,	1,	4,	1,	2,	1,	1,	4,	4,	2,	0,	2,	2,
1,	2,	2,	3,	4,	0,	2,	4,	1,	2,	4,	3,	1,	0,	4,	4,	0,	2,	4,	4,	2,	0,	3,	0,	1,	1,	0,	4,
3,	4,	2,	2,	4,	4,	2,	4,	1,	0,	2,	0,	3,	2,	1,	0,	3,	2,	4,	4,	2,	4,	3,	0,	4,	4,	0,	3,
1,	0,	2,	3,	0,	0,	0,	3,	2,	4,	3,	4,	4,	4,	1,	2,	1,	4,	1,	3,	4,	0,	3,	4,	4,	1,	4,	0,
3,	2,	2,	2,	3,	1,	0,	3,	2,	4,	1,	3,	1,	3,	3,	0,	2,	0,	2,	1,	4,	1,	1,	0,	2,	1,	1,	4,
1,	4,	4,	2,	2,	1,	3,	1,	3,	3,	4,	4,	0,	3,	2,	4,	1,	1,	1,	3,	0,	4,	3,	1,	1,	1,	1,	0,
4,	2,	0,	0,	0,	3,	3,	2,	3,	4,	2,	2,	1,	1,	0,	4,	2,	3,	4,	1,	4,	1,	4,	0,	4,	2,	3,	4,
4,	0,	0,	1,	1,	4,	1,	4,	4,	3,	0,	2,	1,	2,	2,	2,	3,	3,	1,	3,	3,	3,	1,	2,	1,	0,	0,	2,
0,	4,	4,	4,	1,	2,	4,	4,	2,	4,	0,	4,	2,	1,	3,	1,	4,	1,	0,	2,	0,	3,	3,	3,	1,	3,	0,	4,
2,	1,	2,	1,	0,	4,	4,	3,	1,	1,	2,	1,	2,	1,	2,	4,	2,	4,	1,	2,	0,	4,	0,	3,	4,	0,	4,	3,
3,	0,	0,	0,	4,	2,	4,	1,	3,	0,	0,	3,	1,	0,	2,	0,	4,	1,	1,	0,	4,	3,	4,	0,	1,	4,	1,	0,
4,	0,	3,	3,	1,	1,	4,	0,	3,	3,	3,	1,	2,	2,	1,	0,	1,	2,	1,	4,	1,	0,	3,	4,	0,	4,	0,	4,
2,	3,	2,	1,	0,	1,	0,	2,	2,	3,	2,	2,	3,	3,	4,	4,	2,	3,	3,	0,	0,	4,	0,	4,	4,	4,	0,	0,
]
// assinging layout 
// 0- pacdots
// 1- wall 
// 2- ghost-lair
// 3- power-plare
// 4- empty

// create board 
function createBoard() {
    for (let i =0; i < layout.length; i++) {
        const square = document.createElement('div');
        grid.appendChild(square);
        squares.push(square);

        if (layout[i] === 0) {
            squares[i].classList.add('pac-dot');
        }
        else if (layout[i] === 1) {
            squares[i].classList.add('wall');
        }
        else if (layout[i] === 3) {
            squares[i].classList.add('powerp');
        }
        else if (layout[i] === 2) {
            squares[i].classList.add('ghost');
        }

    }
}
createBoard();

//starting position of pac
let pacmanIndex = 495;
squares[pacmanIndex].classList.add('pacman');

function control(e) {
    squares[pacmanIndex].classList.remove('pacman')
    switch (e.keyCode) {
        case 40:
        if (
            !squares[pacmanIndex + width].classList.contains('ghost')&&
            !squares[pacmanIndex + width].classList.contains('wall') &&
            pacmanIndex + width < width * width
            ) 
            pacmanIndex += width
        break

        case 38:
        if (
            !squares[pacmanIndex - width].classList.contains('ghost')&&
            !squares[pacmanIndex - width].classList.contains('wall') &&
            pacmanIndex - width >= 0
            ) 
            pacmanIndex -= width
        break

        case 37:
        if (
            !squares[pacmanIndex -1].classList.contains('ghost')&&
            !squares[pacmanIndex -1].classList.contains('wall') &&
            pacmanIndex % width !== 0
            ) 
            pacmanIndex -=1
            if (pacmanIndex === 364) {
                pacmanIndex = 391
            }
        break

        case 39:
        if (
            !squares[pacmanIndex +1].classList.contains('ghost')&&
            !squares[pacmanIndex +1].classList.contains('wall') &&pacmanIndex % width < width -1
            ) 
            pacmanIndex +=1
            if (pacmanIndex === 391) {
                pacmanIndex = 364
            }
        break
    }
    squares[pacmanIndex].classList.add('pacman')
    pacEat();
    powerPeaten();
    Win();
    gameOver();
}
document.addEventListener('keyup', control);

function pacEat() {
    if (squares[pacmanIndex].classList.contains('pac-dot')) {
        squares[pacmanIndex].classList.remove('pac-dot')
        score++
        scoreDisplay.innerHTML = score;
    }
}

function powerPeaten() {
    if (squares[pacmanIndex].classList.contains('powerp')) {
        squares[pacmanIndex].classList.remove('powerp');
        score += 10
        ghosts.forEach(ghost => ghost.isScared = true)
        setTimeout(unscaredGhosts, 10000)
    }
}

function unscaredGhosts() {
    ghosts.forEach(ghost => ghost.isScared = false)
}

class Ghost {
    constructor (className, startIndex, speed) {
        this.className = className;
        this.speed = speed;
        this.startIndex = startIndex;
        this.currentIndex = startIndex;
        this.isScared = false;
        this.timerId = NaN;
    }
}
const ghosts = [
    new Ghost ('blinky', 348, 250),
    new Ghost ('pinky', 376, 400),
    new Ghost ('inky', 351, 300),
    new Ghost ('clyde', 379, 500)
]

// draw ghosts 
ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className);
    squares[ghost.currentIndex].classList.add('ghost');
});
ghosts.forEach(ghost => moveGhost(ghost))
function moveGhost(ghost) {
    const directions = [-1, +1, -width, +width];
    let direction = directions[Math.floor(Math.random() * directions.length)]
    ghost.timerId = setInterval(function() {
        if (
            !squares[ghost.currentIndex + direction].classList.contains('wall') &&
            !squares[ghost.currentIndex + direction].classList.contains('ghost')
        ) {
            squares[ghost.currentIndex].classList.remove(ghost.className)
            squares[ghost.currentIndex].classList.remove('ghost', 'scaredghost')
            ghost.currentIndex += direction
            squares[ghost.currentIndex].classList.add(ghost.className)
            squares[ghost.currentIndex].classList.add('ghost')
        }   else { 
                    direction = direction[Math.floor(Math.random() * directions.length)]
                }
        if (ghost.isScared) {
            squares[ghost.currentIndex].classList.add('scaredghost')
        }
        if (
            ghost.isScared && squares[ghost.currentIndex].classList.contains('pacman')
        ) {
            squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scaredghost')
            ghost.currentIndex = ghost.startIndex
            score += 100
            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
        }
        gameOver();
    }, ghost.speed)
}
//check for game over 
function gameOver() {
    if (
        squares[pacmanIndex].classList.contains('ghost') && 
        !squares[pacmanIndex].classList.contains('scaredghot')
    )   {
        ghost.forEach(ghost => clearInterval(ghost.timerId))
        document.removeEventListener('keyup', control)
        scoreDisplay.innerHTML = ' Game over please restart ';
    }
}
// check for win
function Win() {
    if (score === 273) {
        ghost.forEach(ghost => clearInterval(ghost.timerId))
        document.removeEventListener('keyup', control)
        scoreDisplay.innerHTML = ' You WON ';
    }
}




