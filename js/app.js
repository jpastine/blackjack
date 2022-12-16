/*-------------------- Constants --------------------------------*/



/*------------------- Variables --------------------------------*/
let deckOfCards = []
let playerTurn
let dealerTurn
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