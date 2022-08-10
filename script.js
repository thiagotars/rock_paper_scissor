const resultDiv = document.getElementById('result')
const handsDiv = document.getElementById('hands')
const playerScoreDiv = document.getElementById('player-score')

let score = 0

//define a random number and return a random hand choice
const randomHand = () => {
    const hands = ['rock ✊', 'paper 🤚', 'scissors ✌️']
    let randomNumber = Math.floor(Math.random()*3)
   return hands[randomNumber]
}

const buttons = document.querySelectorAll('.rps-button')

//listen to click in each button, store button value in a variable and passes as arguments when function renderGame() is called
buttons.forEach(button => {
    button.onclick = () => {
        let computerChoice = randomHand()
        let playerChoice = button.value
        renderGame(playerChoice, computerChoice)
    }
})

// render game based on some matching conditions
const renderGame = (playerHand, computerHand) => {
    if ((playerHand === 'paper 🤚' && computerHand === 'rock ✊') ||
        (playerHand === 'rock ✊' && computerHand === 'scissors ✌️') ||
        (playerHand === 'scissors ✌️' && computerHand === 'paper 🤚')){
        
        score += 1 
        playerScoreDiv.textContent = score
        resultDiv.textContent = 'You win!'

    } else if (playerHand === computerHand){
        score = score
        playerScoreDiv.textContent = score
        resultDiv.textContent = 'It \'s a Draw!'

    } else {
        score -= 1
        playerScoreDiv.textContent = score
        resultDiv.textContent = 'You lose!' 
    }

    handsDiv.textContent =  `👱 ${playerHand} vs 🤖 ${computerHand}`        
}

const endGameBtn = document.getElementById ('end-game-button')

//reset game
const endGame = () => {
    score = 0
    playerScoreDiv.textContent = ''
    handsDiv.textContent = ''
    resultDiv.textContent = ''
}