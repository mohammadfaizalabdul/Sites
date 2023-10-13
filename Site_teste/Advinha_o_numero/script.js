'use strict';
/*
console.log(document.querySelector('.message').textContent)

document.querySelector('.message').textContent = 'Correct Number!'

document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 10

document.querySelector('.guess').value = 23
console.log(document.querySelector('.guess').value)
*/

let secretNumber = Math.trunc(Math.random()*20)+1

let score = 20;
let highScore = 0;

//Função para mostrar mensagens na classe .message
const displayMessage = function(message){
    document.querySelector('.message').textContent = message
 }
//Função para mostrar mensagens na classe .number
const displayNumber = function (number){
    document.querySelector('.number').textContent = number
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number((document.querySelector('.guess').value))

    console.log(guess, typeof guess)

    //When there's no input
    if(!guess){

        /*document.querySelector('.message').textContent = 'No Number!'*/
        //Refatoração
        displayMessage('No Number')

    //When the player wins
    }else if(guess === secretNumber){
       displayMessage('Correct Number!')
        //Changing the css style 
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem';

      displayNumber(secretNumber)

     
        if(score > highScore){
            highScore = score
            document.querySelector('.highscore').textContent = highScore
        }
       
  

    //When guess is wrong
    } else if(guess !== secretNumber){

        if(score > 1){
          displayMessage( guess > secretNumber ? ' Too high' : 'Too low!')

            score --
            document.querySelector('.score').textContent = score
        }else{
         displayMessage('You lost the game!')
            document.querySelector('.score').textContent = 0
        }
        }    
    })

    //When the guess is too high
    /*else if(guess > secretNumber){
        if(score > 1){
        document.querySelector('.message').textContent = 'Too high!'
        score --
        document.querySelector('.score').textContent = score
    }else{
        document.querySelector('.message').textContent = 'You lost the game!'
        document.querySelector('.score').textContent = 0
    }

    //When the guess is too low
    }else if(guess < secretNumber){
        if(score > 1){

     
        document.querySelector('.message').textContent = 'Too low'
        score --
        document.querySelector('.score').textContent = score
    }else{
        document.querySelector('.message').textContent = 'You lost the game!'
        document.querySelector('.score').textContent = 0
    }     
    }
*/


//Again
document.querySelector('.again').addEventListener('click', function(){
    //Input
    Number((document.querySelector('.guess').value = ''))

    //Message
    displayMessage('Start guessing')

    //Hide Number
   displayNumber('?')
    secretNumber = Math.trunc(Math.random()*20)+1
  
    //Score
    score = 20
   document.querySelector('.score').textContent = score

   //Background
   document.querySelector('body').style.backgroundColor = '#222'


})
