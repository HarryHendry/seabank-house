// JS NAVBAR
const Hamburger = document.querySelector('.hamburger');
Hamburger.addEventListener('click', () => {
    const Navbar = document.querySelector('.navbar');
    Navbar.classList.toggle('active');
}) 


  window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("splash").classList.add("hidden");
      document.getElementById("main-content").classList.add("show");
    }, 2000); // 2 seconds
  });


  const transition = document.getElementById("page-transition");
  const title = document.getElementById("page-title");

  function showTransition(text, url) {
    title.textContent = text;
    transition.classList.add("active");

    setTimeout(() => {
      window.location.href = url;
    }, 800); // delay before navigating
  }

  // rock paper scissors practice //
  // the browser version //

  /*

  function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    const choices = ['rock', 'paper', 'scissors'];
    return choices[randomNumber]
  } 


  
  function getPlayerChoice() {
    let userchoice = prompt('please choose between rock paper or scissors').toLowerCase();
return userchoice;
  }
 
     let playerScore = 0;
  let computerScore = 0;
  let numberOfGames = 0;

  function playGame() {

let userInput = getPlayerChoice()
    let computerInput = getComputerChoice()
numberOfGames++;
    if(userInput === computerInput) {
      playerScore++;
      computerScore++;
      console.log(`the round is draws since the computer picked ${computerInput} and you picked ${userInput}`)
    }
    else if  (
      (userInput === 'rock' && computerInput === 'scissors') ||
      (userInput === 'paper' && computerInput === 'rock') ||
      (userInput === 'scissors' && computerInput === 'paper') 
    ) {
      playerScore++;
      console.log(`you win the game because you picked ${userInput} and the computer picked ${computerInput}`)
    } else {
      computerScore++;
      console.log(`the computer wins the game because the computer picked ${computerInput} and you picked ${userInput}`)
    }


    console.log('player score:' + playerScore)
    console.log('computer score:' + computerScore)
    console.log('number of games played: ' + numberOfGames)
    
  }
while (numberOfGames < 5) {
playGame()
}

if (numberOfGames === 5) {
  announceWinner()
}

function announceWinner() {
  if(playerScore === computerScore) {
    console.log('The game ends in a draw!')
  } else if (playerScore > computerScore) {
    console.log('You won the whole game!')
  } else {
    console.log('The computer won the  whole thing!')
  }
}
 
*/



  





