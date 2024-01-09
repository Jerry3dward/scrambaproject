let deckId
let compScore = 0
let myScore = 0
const cardContainer = document.getElementById('cards')
const newDeckBtn = document.getElementById('click')
const drawCardBtn = document.getElementById('draw-card')
const header = document.getElementById('header')
const remainingText = document.getElementById('remaining')
const compScoreEL = document.getElementById('computer-score')
const myScoreEL = document.getElementById('my-score')
let handleClick = function() {
    fetch ('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        remainingText.textContent =` Remaining cards: ${data.remaining}`
        deckId = data.deck_id
    })
}

newDeckBtn.addEventListener('click', handleClick)
drawCardBtn.addEventListener('click', () => {
    fetch (`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data.cards)
            cardContainer.children[0].innerHTML = ` <img src=${data.cards[0].image} class="card"/> `
            cardContainer.children[1].innerHTML = ` <img src=${data.cards[1].image} class="card" /> `
            // .innerHTML = `
            // <img src=${data.cards[0].image} />
            // <img src=${data.cards[1].image} />
            //`
            const winnerText = cardWinner(data.cards[0], data.cards[1])
            remainingText.textContent =`Remaining cards: ${data.remaining}`
            console.log(winnerText)
            header.innerHTML = winnerText
            if (data.remaining === 0) {
                drawCardBtn.disabled = true
            }
            if (compScore > myScore) {
                header.textContent = "Computer wins the game select new deck to start again"
            }   else if (compScore < myScore) {
                header.textContent = "you won the game select new deck to start again"
            }   else {
                header.textContent = "it's a tie game select new deck to start again"
            }
        })
})

function cardWinner (card1, card2) {
    const valueOption = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'JACK', 'QUEEN', 'KING', 'ACE']
    const card1ValueIndex = valueOption.indexOf(card1.value) 
    const card2ValueIndex = valueOption.indexOf(card2.value)

    if (card1ValueIndex > card2ValueIndex) {
        compScore++
        compScoreEL.textContent = `Computer score: ${compScore}`
        return "computer win"
    } else if (card1ValueIndex < card2ValueIndex){
        myScore++
        myScoreEL.textContent = `My score: ${myScore}`
        return "you wins"
    } else {
        return "its a tie"
    }
}





