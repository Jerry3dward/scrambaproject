let sum = 0;
let hasblackjack = false
let isalive = false
let msg = "";   // refer to render game which displays message afterwards 
let msgEl = document.querySelector(".msg-el");  // selection of html elements by specific id or class 
let sumEl = document.querySelector("#sum-el");  // selection of html elements by specific id or class 
let cardEl = document.querySelector(".card-el");// selection of html elements by specific id or class 
 
// objects player to store name and chips values 

let player = {
    name: "person",
    chips: 145
}
// using objects to print name and value 
let playerEl = document.getElementById("player-n");
playerEl.textContent = player.name + ": $" + player.chips
//this function will generate random number between 0 to 13 
function getrandomcard() {
    let randomnumber = Math.floor(Math.random() * 13);
    if (randomnumber > 10 ) {
        return 10;
    }
        else if (randomnumber === 1) {
            return 11;
        }
        else {
            return randomnumber;
        }
}
// the html button start game will execute this when clicked 
function startgame () {
    isalive = true
    let firstCard = getrandomcard();
    let secondCard = getrandomcard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    rendergame();
}
// this function provides the logic to game 
function rendergame() {
    cardEl.textContent = "Cards drawn : ";
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " " + " "
    } 
    sumEl.textContent = "Total cards sum: " + sum;
    if (sum <= 20) {
        msg = "do you want a new card ?";
    }
    else if (sum === 21) {
            msg = "Congrats you got Black Jack";
            hasblackjack = true
    }
    else {
            msg = "sorry you're out of the game your number is greater than 21";
            isalive = false
    }
    msgEl.textContent = msg;
}
// this fucntion will draw new number when drtaw new card buttom uis clicked
function newcard () {
    if (isalive  === true && hasblackjack === false) {
    let card = getrandomcard();
    sum += card;
    cards.push(card)
    rendergame()
    }
}



