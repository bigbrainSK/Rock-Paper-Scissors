//let playerSelection = (prompt('Please enter rock, paper, or scissors'));
let playerSelection= '';
let computerSelection= getComputerChoice();
let computerScore=0;
let playerScore=0;



// get the container element to append the buttons to 
const buttonContainer = document.querySelector("#buttons");

//create three buttons 
const rock_button = document.createElement('button');
const paper_button = document.createElement('button');
const scissors_button = document.createElement('button');


//set text content for each button
rock_button.textContent = "rock";
paper_button.textContent = "paper";
scissors_button.textContent = "scissors";

// function rock_click(e) {
//     playerSelection = 'rock';
// }


// add event listener to each button
rock_button.addEventListener('click', playRound('rock', computerSelection));  
paper_button.addEventListener('click', playRound('paper', computerSelection));
scissors_button.addEventListener("click", playRound('scissors', computerSelection));

// append buttons to the container element
buttonContainer.appendChild(rock_button);
buttonContainer.appendChild(paper_button);
buttonContainer.appendChild(scissors_button);

//playerSelection=playerSelection.toLowerCase();
//console.log(game());
function getComputerChoice() {
    const randomNumber=Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1: 
            return 'paper';
        case 2: 
            return 'scissors';
    }
}
function playRound(playerSelection, computerSelection) {
    switch(playerSelection) { 
        case 'rock': 
            if (computerSelection=='rock')
              return "Draw!";
            if(computerSelection=='paper')
              return "You lose, paper beats rock!";
            if(computerSelection=='scissors')
              return "You win, rock beats scissors!";
        
        case 'paper':
            if (computerSelection=='rock')
              return "You win, paper beats rock!";
            if(computerSelection=='paper')
              return "Draw!";
            if(computerSelection=='scissors')
              return "You lose, scissors beats paper!";

        case 'scissors':
            if (computerSelection=='rock')
              return "You lose, rock beats scissors!";
            if(computerSelection=='paper')
              return "You win, scissors beats paper!";
            if(computerSelection=='scissors')
              return "Draw!";

        default:
            return 'you messed up buddy';
    }
}


// function game() {
//   //for (let i=1;  i<=5; i++ )
//    {
//     computerSelection= getComputerChoice(); 
    
//     playerSelection = buttons;
    

//     if ((playRound(playerSelection, computerSelection)) =='You lose, paper beats rock!' || playRound(playerSelection, computerSelection) == 'You lose, scissors beats paper!' || playRound(playerSelection, computerSelection) == 'You lose, rock beats scissors!') {
//       computerScore++ ;
//     }
//     else if ((playRound(playerSelection, computerSelection))=='You win, rock beats scissors!' || playRound(playerSelection, computerSelection)== 'You win, paper beats rock!' ||playRound(playerSelection, computerSelection)== 'You win, scissors beats paper!') {
//       playerScore++ ;
//     }
//     else { 
//       alert("draw, neither of u got a point :)") ;
//     }
  
//     console.log(playRound(playerSelection, computerSelection));
 
    
//   }
// }
//console.log(gameOver());
//function gameOver() { 

      //  if (computerScore > playerScore) {
      //    return 'You lost, the computer beat you!';
      //  }
      //  else {
       //   return 'You won, you beat the computer!';
       // }
       // }



// create a function called game() 
// call the playRound function inside this function
// function will play 5 round game using a loop
// function will keep score
// function will return winner/loser at end of game
// console.log to display results


// const playerSelection='rock'




//make rock greater than scissors
//make paper greater than rock
//make scissors greater than paper 

// computer will randomly return either rock , paper, scissors equal chance of each
// when player inputs 'rock',
//  if computerSelection is rock, then print "Draw!"
//  if computerSelection is paper, then print "You lose! Paper beats rock"
//  if computerSelection is scissors, then print "You win, rock beats scissors!"

// when player inputs 'paper',
//  if computerSelection is rock, then print "You win! Paper beats rock"
//  if computerSelection is paper, then print "Draw!"
//  if computerSelection is scissors, then print "You lose! Scissors beats paper"

// when player inputs 'scissors',
//  if computerSelection is rock, then print "You lose! Rock beats scissors"
//  if computerSelection is paper, then print "You win! Scissors beats paper"
//  if computerSelection is scissors, then print "Draw!"