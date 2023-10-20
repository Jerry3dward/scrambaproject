let p1 = 0;
let p2 = 0;
let turn = true;
const p1dice = document.getElementById("p1dice");
const p2dice = document.getElementById("p2dice");
const p1score = document.getElementsByClassName("player1score");
const p2score = document.getElementsByClassName("player2score");
const msg = document.getElementById("msg");
const rollDice = document.getElementById("rolldice");
const resetBtn = document.getElementById("resetbtn");

function showButtons() {
    rollDice.style.display = "none";
    resetBtn.style.display = "block";
}

rollDice.addEventListener("click", Rolldice);
function Rolldice() {
    let result = Math.floor(Math.random () * 6) + 1;

    if (turn) {
        p1 += result;
        p1score[0].textContent = p1;
        p1dice.textContent = result;
        msg.textContent = "Player 2 Turn";
    }
    else {
        p2 += result;
        p2score[0].textContent = p2;
        p2dice.textContent = result;
        msg.textContent = "Player 1 Turn";
    }
    if (p1 >= 20){
        msg.textContent = "Player 1 has won";
        showButtons();
    }   else if (p2 >= 20) {
        msg.textContent = "Player 2 has won";
        showButtons();
    }
    if (turn) {
        turn = false;
    } else {
        turn = true;
    }
}
resetBtn.addEventListener("click", reset)
function reset () {
    msg.textContent = "Player 1 Turn";
    p1score[0].textContent = 0;
    p2score[0].textContent = 0;
    p1dice.textContent = "-"
    p2dice.textContent = "-"
    p1 = 0;
    p2 = 0;
    turn = true;
    rollDice.style.display = "block";
    resetBtn.style.display = "none";
    console.log("reset click");
}

