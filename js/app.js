/*-------------------- Constants --------------------------------*/



/*------------------- Variables --------------------------------*/
let deck1 = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
let deck2 = []
let playerHand
let dealerHand
let winner = false
let push = false
let bankRoll = 2000
let cardValue = 0
let bet = 0
let dCardTotal = 0
let pCardTotal = 0


/*------------- Cached Element References ------------------------*/
const dealerMessageEl = document.getElementById('dealer-message')
const playerMessageEl = document.getElementById('player-message')
const dealBtn = document.getElementById('deal')
const hitBtn = document.getElementById('hit')
const standBtn = document.getElementById('stand')
const bankEl = document.getElementById('dollar-amount')
const allInBtn = document.getElementById('all-in')
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

allInBtn.addEventListener('click', allIn)

placeBetEl.addEventListener('change', handleBet)

playAgainBtn.addEventListener('click', playAgain)


/*--------------------- Functions --------------------------------*/
function init() {
  shuffleDeck()
  dealerHandEl.innerHTML = ''
  playerHandEl.innerHTML = ''
  playerCardTotal.innerText = 0
  dealerCardTotal.innerText = 0
  playerMessageEl.innerText = ''
  dealerMessageEl.innerText = ''
  playerHand = []
  dealerHand = []
  bet = 0
  bankRoll = 2000
  placeBetEl.value = ''
  bankEl.innerText = '$' + bankRoll
  if (bet > 0) {
    dealBtn.disabled = false
  }
}

function shuffleDeck() {
  deck1 = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
}

function getRandomCard() {
  return Math.floor(Math.random() * (deck1.length -1))
}


function allIn() {
  dealBtn.disabled = false
  bet = bankRoll
  placeBetEl.value = bet
  dealCards()
  }

function handleBet(e) {
  console.log('bet')
  bet = e.target.value
  if (bet < bankRoll){
    dealBtn.disabled = false
  } else {
    playerMessageEl.textContent = 'NOT ENOUGHT MONEY!'
  }
}

function dealCards(){
  if (deck1.length < 4) {
    shuffleDeck()
  }
  bankRoll -= bet
  bankEl.innerText = "$" + bankRoll
  dealerHandEl.innerHTML = ''
  dealerMessageEl.textContent = ''
  playerMessageEl.textContent = ''
  dealerHand = [deck1.splice(getRandomCard(), 1), deck1.splice(getRandomCard(), 1)]
  dealerCardTotal.textContent = getCardValue(dealerHand[0])

  playerHand = [deck1.splice(getRandomCard(), 1), deck1.splice(getRandomCard(), 1)]
  
  renderHands()
  if (pCardTotal === 21) {
    bankRoll += bet * .5
    playerStand()
  }
}

function renderHands() {
  displayCards(playerHand)
  calcTotal(playerHand)
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
    } else if (splitValue === 'A') {
    return 11
    }  else {
    return parseInt(splitValue)
    }
}
  
function playerHit() {
  playerHand.push(deck1.splice(getRandomCard(), 1))
  displayCards(playerHand)
  calcTotal(playerHand)
  playerCardTotal.textContent = pCardTotal
    if (pCardTotal > 21) {
      playerMessageEl.textContent = 'Bust!'
      displayCards(dealerHand)
      calcTotal(dealerHand)
      dealerMessageEl.textContent = 'Dealer Wins'
    } else {
      playerMessageEl.textContent = ''
    }
} 



function playerStand() {
  displayCards(dealerHand)
  calcTotal(dealerHand)
  dealerCardTotal.textContent = dCardTotal
  if (dCardTotal === 21) {
    checkForWinner()
  } else if (dCardTotal > 21) {
    dealerMessageEl.textContent = "Bust!"
    playerMessageEl.textContent = 'Player Wins!'
    bankRoll += bet * 2
    bankEl.innerText = "$" + bankRoll
  } else if (dCardTotal >= 17 && dCardTotal <= 20) {
    checkForWinner()
  } else if (dCardTotal <= 16){
    let dealerCard = (deck1.splice(getRandomCard(), 1))
    dealerHand.push(dealerCard)
    displayCards(dealerHand)
    calcTotal(dealerHand)
    setTimeout(() => {
      playerStand()
    }, '1000')
    
  }
}

function displayCards(deck) {
  let element 
  if (deck === playerHand) {
    element = playerHandEl
  } else {
    element = dealerHandEl
  }
  element.innerHTML = ''
  deck.forEach((card) => {
    let cardToAppend = document.createElement('div')
    cardToAppend.classList.add('card', `${card}`, 'large')
    element.appendChild(cardToAppend)
  })
}

function calcTotal(deck) {
  let total = 0
  let hasAce = []
  deck.forEach((card) => {
    let splitValue = card[0].split('').slice(1).join('')
    console.log(splitValue)
    if (splitValue === 'A') {
      hasAce.push(splitValue)
    }
    total += getCardValue(card)
  })
    if (hasAce.length > 0){
      total = calcAce(total, hasAce.length)
    } 
    if (deck === playerHand) {
      pCardTotal = total
      playerCardTotal.innerHTML = pCardTotal
    } else {
      dCardTotal = total
      dealerCardTotal.innerHTML = dCardTotal
    }
}

function calcAce(total, aces) {
  let aceTotal = total
  for (let i = 0; i < aces; i++) {
    if (total > 21){
    aceTotal = total - 10
    }} 
    return aceTotal
}
  

function checkForWinner() {
  if (pCardTotal > dCardTotal) {
    playerMessageEl.textContent = 'Player wins!'
    dealerMessageEl.textContent = 'Dealer loses'
    dealBtn.disabled = true
    bankRoll += bet * 2
    bankEl.innerText = "$" + bankRoll
  } else if (pCardTotal < dCardTotal) {
    playerMessageEl.textContent = 'Player loses'
    dealerMessageEl.textContent = 'Dealer wins!'
    dealBtn.disabled = true
  } else if (pCardTotal === dCardTotal) {
    playerMessageEl.textContent = 'Push!'
    dealBtn.disabled = true
    bankRoll += bet
    bankEl.innerText = "$" + bankRoll
  }
}

function playerBlackjack() {
  playerStand()
  displayCards(dealerHand)
  calcTotal(dealerHand)
  checkForWinner()
}

function playAgain() {
  init()
}











