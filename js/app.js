/*-------------------- Constants --------------------------------*/



/*------------------- Variables --------------------------------*/
let deckOfCards = []
let player
let dealer
let winner = false
let bankRoll = 2000
let cardValue = 0


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
/*------------------ Event Listeners -----------------------------*/
dealBtn.addEventListener('click', function(evt) {
  console.log(evt.target)
})
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
function startGame (){
  //screen should be blank except for chips, "place your bet message", and deal button
}

function render () {
  
}

function placeBet (){
  //player clicks chips to place bet
  //bet amount should reflect bank balance
}

function shuffleCards() {
  //shuffle card array
  //if card array reaches 0, cards should be reshuffled
}

function dealCards(){
  //deal shuffled cards
  //cards should be dealt in order, player gets one, dealer gets face down card, then player, then dealer face up
  //deal button should disappear and hit and stand buttons should appear
  //player and dealer cards should show the sum value of dealt cards
  //initializes playerTurn 
}

function playerTurn() {
//options to hit or stand
//stand should end player turn
//hit draws another card from deck and changes value of cards in player value
//anytime total of cards is 21, player auto stands 
//if players fisrt two cards equal 21, and dealers do not, player message should read Blackjack and player wins 
//if sum value is over 21, player turn ends and message should read bust. dealer card should flip and and dealer message should read dealer wins
}

function dealerTurn() {
  //face down card flips and dealer total updates
  //if dealer cards are <= 16, dealer hits
  //if dealer cards are >=17 and <=20, delaer stands
  //if dealer has 21, dealer automatically stands 
  //if dealer is over 21, message should read bust and player message should read player wins

}

function checkForWinner() {
  //compare card totals and messages should change for win loss.
  //bank balance reflects winnings if player wins and adjusts properly, 2:1 regular win, 3:2 blackjack win
}

