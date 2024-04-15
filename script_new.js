//Objectives:
//
//
//Create UI for the RPS game
//
//
//

let userChoice;
let compChoice = computerChoice();
let userScore = 0;
let computerScore = 0;

function computerChoice(){
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(userChoice, compChoice){
  console.log(`Your choice: ${userChoice}`)
  console.log(`Computer choice: ${compChoice}`)
  if (userChoice === compChoice){
    console.log("It's a tie")
  } 
  else if (userChoice === "rock" && compChoice === "scissors"){
    userScore =+ 1;
  }
  else if (userChoice ==="scissors" && compChoice ==="rock"){
    computerScore =+ 1;
  }
  else if (userChoice === "paper" && compChoice ==="rock"){
    userScore =+ 1;
  }
  else if (userChoice === "rock" && compChoice === "paper"){
    comoputerScore =+ 1;
  }
  else if (userChoice === "scissors" && compChoice === "paper"){
    userScore =+ 1;
  }
  else if (userChoice === "paper" && compChoice ==="scissors"){
    computerScore =+ 1;
  }
  
}
window.onload = function(){

  //Container for keeping the buttons
  const container = document.createElement("div");
  container.id = "container";
  const body = document.querySelector("body");
  body.appendChild(container);
  const scoreboard = document.createElement("div")
  scoreboard.id = "scoreboard";
  body.appendChild(scoreboard)


  //Buttons for the ui/playRound
  const rock = document.createElement("button");
  rock.textContent = "Rock";
  const paper = document.createElement("button");
  paper.textContent = "Paper";
  const scissors = document.createElement("button");
  scissors.textContent = "Scissors";

  //Adds the buttons to the DOM
  container.appendChild(rock);
  container.appendChild(paper);
  container.appendChild(scissors);

  //Add logic and visible score
  //PENDING
  



  function game(){
    while (userScore != 5 || computerScore != 5){
    const scoreboard = document.querySelector("p")
    scoreboard.textContent = `You're score: ${userScore} vs Computer's score: ${computerScore}`
    container.appendChild(scoreboard)


//Adds event listeners to the buttons

    rock.addEventListener("click", function(){
      userChoice = "rock";
      compChoice = computerChoice();
      playRound(userChoice, compChoice);
      game();
    });
  paper.addEventListener("click", function(){
    userChoice = "paper";
    compChoice = computerChoice();
    playRound(userChoice, compChoice);
    game();
  });
  scissors.addEventListener("click", function(){
      userChoice = "scissors";
      compChoice = computerChoice();
      playRound(userChoice, compChoice);
      game();
    });
    }
  }
}


