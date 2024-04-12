//Objectives:
//
//
//Create UI for the RPS game
//
//


let userChoice;
let compChoice = computerChoice();

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
    else if(userChoice === "rock" && compChoice ==="scissors"){

    }
  }
}










window.onload = function(){

  //Container for keeping the buttons
  const container = document.createElement("div");
  container.id = "container";
  const body = document.querySelector("body");
  body.appendChild(container);

  //Buttons for the ui/playRound
  const rock = document.createElement("button");
  rock.textContent = "Rock";
  const paper = document.createElement("button");
  paper.textContent = "Paper";
  const scissors = document.createElement("button");
  scissors.textContent = "Scissors";

  //Adds the buttons to the DOM
  body.appendChild(rock);
  body.appendChild(paper);
  body.appendChild(scissors);

  //Adds event listeners to the buttons
  rock.addEventListener("click", function(){
  userChoice = "rock";
  playRound(userChoice, compChoice)
  }
}


