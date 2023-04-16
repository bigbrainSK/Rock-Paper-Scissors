// get the container element to append the buttons to 
const buttonContainer = document.querySelector("#buttons");
const resultContainer = document.querySelector('#results');

let playerScore = 0;
let computerScore = 0;

//create three buttons, add their text content, and append their buttons
const rock_button = document.createElement('button');
rock_button.textContent = "rock";
buttonContainer.appendChild(rock_button);

const paper_button = document.createElement('button');
paper_button.textContent = "paper";
buttonContainer.appendChild(paper_button);

const scissors_button = document.createElement('button');
scissors_button.textContent = "scissors";
buttonContainer.appendChild(scissors_button);



// add event listener to each button
rock_button.addEventListener('click', () => {
  resultContainer.innerHTML = '';
  const computerSelection = getComputerChoice();
  playerSelection = 'rock';
  const result = playRound(playerSelection, computerSelection);
  const message = `You chose ${playerSelection}!! Computer Chose ${computerSelection}!  ${result}`;
  const p = document.createElement('p');
  p.textContent = message; 
  resultContainer.appendChild(p);

  game(playerSelection, computerSelection);
}); 

paper_button.addEventListener('click', () => {
  resultContainer.innerHTML = '';
  const computerSelection = getComputerChoice();
  playerSelection = 'paper';
  const result = playRound(playerSelection, computerSelection);
  const message = `You chose ${playerSelection}!! Computer Chose ${computerSelection}!  ${result}`;
  const p = document.createElement('p');
  p.textContent = message; 
  resultContainer.appendChild(p);

  game(playerSelection, computerSelection);
});

scissors_button.addEventListener('click', () => {
  resultContainer.innerHTML = '';
  const computerSelection = getComputerChoice();
  playerSelection = 'scissors';
  const result = playRound(playerSelection, computerSelection);
  const message = `You chose ${playerSelection}!! Computer Chose ${computerSelection}!  ${result}`;
  const p = document.createElement('p');
  p.textContent = message; 
  resultContainer.appendChild(p);

  game(playerSelection, computerSelection);
}); 

// function updateRounds(playerChoice) {
//   const computerSelection = getComputerChoice();
//   playerSelection = playerChoice;
//   const result = playRound(playerSelection, computerSelection);
//   const message = `You chose ${playerSelection}!! Computer Chose ${computerSelection}!  ${result}`;
//   const p = document.createElement('p');
//   p.textContent = message; 
//   resultContainer.appendChild(p);
//   rounds++;

// }


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
  
  let result; 

    switch(playerSelection) { 
        case 'rock': 
            if (computerSelection=='rock')
              result = "Draw!";
            if(computerSelection=='paper')
              result = "You lose, paper beats rock!";
            if(computerSelection=='scissors')
              result = "You win, rock beats scissors!";
            break;
        
        case 'paper':
            if (computerSelection=='rock')
              result =  "You win, paper beats rock!";
            if(computerSelection=='paper')
              result =  "Draw!";
            if(computerSelection=='scissors')
              result = "You lose, scissors beats paper!";
            break;

        case 'scissors':
            if (computerSelection=='rock')
              result = "You lose, rock beats scissors!";
            if(computerSelection=='paper')
              result = "You win, scissors beats paper!";
            if(computerSelection=='scissors')
              result = "Draw!";
            break;

        default:
            result = 'you messed up buddy';
    }
    return result;
}

function game(playerSelection, computerSelection) {
  const result = playRound(playerSelection, computerSelection);
    
  if (result.includes('You lose')) {
    computerScore++ ;
  }
  else if (result.includes('You win')) {
    playerScore++ ;
  }

  if (computerScore === 5) {
    const loseMessage = 'You lost, loser';
    const div1= document.createElement('div');
    div1.textContent = loseMessage;
    document.body.appendChild(div1);
  }
  else if (playerScore === 5) {
    const winMessage = 'You win, good job buddy';
    const div2 = document.createElement('div');
    div2.textContent = winMessage;
    document.body.appendChild(div2);
  }
}




//console.log(gameOver());




// create a function called game() 
// call the playRound function inside this function
// function will play 5 round game using a loop
// function will keep score
// function will return winner/loser at end of game
// console.log to display results







