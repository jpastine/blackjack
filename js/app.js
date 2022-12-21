/*-------------------- Constants --------------------------------*/



/*------------------- Variables --------------------------------*/
let deck1 = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
let deck2 = []
let cardToRemove
let playerHand
let dealerHand
let winner = false
let push = false
let bankRoll = 0
let cardValue = 0
let bet = 0
let dCardTotal = 0
let pCardTotal = 0
let turn = 1


/*------------- Cached Element References ------------------------*/
const dealerMessageEl = document.getElementById('dealer-message')
const playerMessageEl = document.getElementById('player-message')
const dealBtn = document.getElementById('deal')
const hitBtn = document.getElementById('hit')
const standBtn = document.getElementById('stand')
const bankEl = document.getElementById('dollar-amount')
const allInBtn = document.getElementById('all-in')
const chipBtns = document.getElementById('chips')
const playAgainBtn = document.getElementById('play-again')
const dealerCardTotal = document.getElementById('d-card-total')
const playerCardTotal = document.getElementById('p-card-total')
const playerHandEl = document.getElementById('player-cards')
const dealerHandEl = document.getElementById('dealer-cards')
const placeBetEl  = document.getElementById('bet-amount')
/*------------------ Event Listeners -----------------------------*/
dealBtn.addEventListener('click', dealCards)
  
hitBtn.addEventListener('click', playerHit)

standBtn.addEventListener('click', playerStand)

allInBtn.addEventListener('click', function(evt){
  console.log(evt.target)
})
chipBtns.addEventListener('click', function(evt){
  console.log(evt.target)
})
playAgainBtn.addEventListener('click', function(evt){
  console.log(evt.target)
})


/*--------------------- Functions --------------------------------*/
function init() {
  deck1 = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
  
}

function handleClick() {

}
  
  


function getRandomCard() {
  return Math.floor(Math.random() * (deck1.length -1))
}

function startGame (){
  //screen should be blank except for chips, "place your bet message", and deal button

}



// function placeBet () {
  //player clicks chips to place bet
  //bet amount should reflect bank balance
// }


function dealCards(){
  dealerHand = [deck1.splice(getRandomCard(), 1), deck1.splice(getRandomCard(), 1)]
  dealerCardTotal.textContent = getCardValue(dealerHand[0])

  playerHand = [deck1.splice(getRandomCard(), 1), deck1.splice(getRandomCard(), 1)]
  
  renderHands()
  
}

function renderHands() {
  playerHandEl.innerHTML = ''
  pCardTotal = 0

  playerHand.forEach(card => {
    let cardToAppend = document.createElement('div')
    cardToAppend.classList.add('card',`${card}`, 'large')
    playerHandEl.appendChild(cardToAppend)
      pCardTotal += getCardValue(card)
    })
    
    playerCardTotal.textContent = pCardTotal
    if (pCardTotal >= 22) {
      playerMessageEl.textContent = 'Bust!'
    } else {
      playerMessageEl.textContent = ''
    }
  
    dealerHandEl.innerHTML = ''
    dealerHand.forEach((card, idx) => {
    let cardToAppend = document.createElement('div')
      if (idx === 1) {
        cardToAppend.classList.add('card', 'back-red', 'large' )
    } else {
        cardToAppend.classList.add('card',`${card}`, 'large')
    }
    dealerHandEl.appendChild(cardToAppend)
  })
}


function getCardValue(card) {
  let splitValue = card[0].split('').slice(1).join('')
    if (splitValue === 'K' || splitValue ==='Q' || splitValue ==='J') {
    return 10
  } else if (splitValue == 'A') {
    return 1
  }  else {
    return parseInt(splitValue)
  }
}
  


function playerHit() {
  playerHand.push(deck1.splice(getRandomCard(), 1))
  renderHands()
} 

function dealerHit() {
  dealerHand.push(deck1.splice(getRandomCard(), 1))
  let cardToAppend = document.createElement('div')
  cardToAppend.classList.add('card',`${card}`, 'large')
  dealerHandEl.appendChild(cardToAppend)
  dCardTotal += getCardValue(card)
}

function playerStand() {
  dCardTotal = 0
  let cardToRemove = dealerHandEl.children[1]
  cardToRemove.classList.remove('card', 'back-red', 'large')
  dealerHandEl.removeChild(cardToRemove)
  dealerHand.forEach((card, idx) => {
    let cardToAppend = document.createElement('div')
    if (idx === 1){
      cardToAppend.classList.add('card', `${card}`, 'large')
    }
    dealerHandEl.appendChild(cardToAppend)
    dCardTotal += getCardValue(card)
  })
  dealerCardTotal.textContent = dCardTotal
  if (dCardTotal <= 16){
    dealerHit()
  } else if (dCardTotal >= 17 || dCardTotal <= 20) {
    checkForWinner()
  }
  
}







// function dealerTurn() {
  //face down card flips and dealer total updates
  //if dealer cards are <= 16, dealer hits
  //if dealer cards are >=17 and <=20, delaer stands
  //if dealer has 21, dealer automatically stands 
  //if dealer is over 21, message should read bust and player message should read player wins

// }

function checkForWinner() {
  //compare card totals and messages should change for win loss.
  //bank balance reflects winnings if player wins and adjusts properly, 2:1 regular win, 3:2 blackjack win
}

