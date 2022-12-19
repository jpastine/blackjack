/*-------------------- Constants --------------------------------*/



/*------------------- Variables --------------------------------*/
let deck1 = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
let deck2 = []
let cardToRemove
let player = []
let dealer =[]
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
const chipBtns = document.getElementById('chips')
const playAgainBtn = document.getElementById('play-again')
const dealerCardTotal = document.getElementById('d-card-total')
const playerCardTotal = document.getElementById('p-card-total')
/*------------------ Event Listeners -----------------------------*/
dealBtn.addEventListener('click', dealCards)
  
hitBtn.addEventListener('click', function(evt){
  console.log(evt.target)
})
standBtn.addEventListener('click', function(evt){
  console.log(evt.target)
})
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
  hitBtn.innerHTML.remove('hit')
  standBtn.innerHTML.remove('stand')
}

function handleClick() {

}
  
  


function getRandomCard() {
  return Math.floor(Math.random() * (deck1.length -1))
}

function startGame (){
  //screen should be blank except for chips, "place your bet message", and deal button

}

// function render () {
  
// }

// function placeBet (){
  //player clicks chips to place bet
  //bet amount should reflect bank balance
// }

// function shuffleCards() {
//   for (let i = 0; i < deck1.length; i++){
//     let shuffle = Math.floor(Math.random() * (deck1.length))
//     let tempDeck = deck1[i]
//     deck1[i] = deck1[shuffle]
//     deck1[shuffle] = tempDeck
//   }
  //shuffle card array
  
  
  //if card array reaches 0, cards should be reshuffled
// }

function dealCards(){
  let dealerCard1 = deck1.splice(getRandomCard(), 1)
    dealer.push(dealerCard1)
    let playerCard1 = deck1.splice(getRandomCard(), 1)
    player.push(playerCard1)
    let dealerCard2 = deck1.splice(getRandomCard(), 1)
    dealer.push(dealerCard2)
    let playerCard2 = deck1.splice(getRandomCard(), 1)
    player.push(playerCard2) 
    dCardTotal = getCardValue(dealerCard2[0])
    pCardTotal = getCardValue(playerCard1[0]) + getCardValue(playerCard2[0])
    console.log(getCardValue(playerCard2[0]))
  // deal shuffled cards
  // cards should be dealt in order, player gets one, dealer gets face down card, then player, then dealer face up
  // deal button should disappear and hit and stand buttons should appear
  // player and dealer cards should show the sum value of dealt cards
  // initializes playerTurn 
}

function getCardValue(card) {
  let splitValue = card.split('').slice(1)
  if (splitValue[0] === 'K' || 'Q' || 'J') {
    return 10
  } else if (splitValue[0] === 'A') {
    return 1
  } else {
    return splitValue.join('')

  }
}

  


// function playerTurn() {
//options to hit or stand
//stand should end player turn
//hit draws another card from deck and changes value of cards in player value
//anytime total of cards is 21, player auto stands 
//if players fisrt two cards equal 21, and dealers do not, player message should read Blackjack and player wins 
//if sum value is over 21, player turn ends and message should read bust. dealer card should flip and and dealer message should read dealer wins
// }

// function dealerTurn() {
  //face down card flips and dealer total updates
  //if dealer cards are <= 16, dealer hits
  //if dealer cards are >=17 and <=20, delaer stands
  //if dealer has 21, dealer automatically stands 
  //if dealer is over 21, message should read bust and player message should read player wins

// }

// function checkForWinner() {
  //compare card totals and messages should change for win loss.
  //bank balance reflects winnings if player wins and adjusts properly, 2:1 regular win, 3:2 blackjack win
// }

