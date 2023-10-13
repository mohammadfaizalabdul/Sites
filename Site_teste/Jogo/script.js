'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');


let scores, currentScore, activePlayer, playing;

//Starting conditions
const init = function(){
    diceEL.classList.add('hidden');

    score0El.textContent = 0;
    score1El.textContent = 0;

    current0El.textContent = 0;
    current1El.textContent = 0;

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
}
init();
//Function Switch player
const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1: 0; 
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

//Rollling dice functionality 
btnRoll.addEventListener('click', function(){

    if(playing){

   
    //1.Generating a random dice roll
    const dice = Math.trunc (Math.random() * 6) + 1;

    //2.Display the dice
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`
    console.log(dice)

    //3.Check for rolled 1 
    if(dice !== 1){
        //Add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    }else{

        //Switch to the next player
       switchPlayer()
    }
}
})

//User holds score
btnHold.addEventListener('click', function(){
    if(playing){

    //1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    //2. Check if player's score if >= 100
    if(scores[activePlayer] >= 100){
        //Finish the game
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        diceEL.classList.add('hidden');
    }else{
    //Switch to the next player
    switchPlayer();
    }          
}
})

//Resets the game
btnNew.addEventListener('click', init)
