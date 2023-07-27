console.log("hi");
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock"||userInput === "paper"||userInput === "scissors"||userInput === 'bomb') {
    return userInput;
  } else {
    console.log("your choice is not correct!");
  }
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 4);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    case 3:
      return "bomb";
      break;
    default:
      return "I don't have choice";
  }
};
//console.log(getComputerChoice());

//etape 7
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game is a tie!";
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'the computer win';
    }else if(computerChoice === 'scissors'){
      return 'you win';
    }
  }
  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'the computer is winner';
    }else if(computerChoice === 'rock'){
      return 'you are winner';
    }
  }
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'the winner is the computer\'s';
    }else if(computerChoice === 'paper'){
      return 'the winner is yours';
    }
  }
  if(userChoice === 'bomb' && computerChoice!=='bomb'){
     return 'you choice bomb, you win';
    }
  if(computerChoice === 'bomb' && userChoice !== 'bomb'){
   return 'The computer choice bomb, it wins';
    }
  
};
//console.log(determineWinner('scissors','rock'));
//console.log(determineWinner('paper', 'rock'));
const playGame = () => {
 const userChoice = getUserChoice('rock');
 const computerChoice = getComputerChoice();
console.log('You threw: ' + userChoice);
console.log('The computer threw: ' + computerChoice);
console.log(determineWinner(userChoice, computerChoice))
}
playGame();
