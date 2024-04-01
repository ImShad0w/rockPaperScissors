//What do we need to do?

//Create an array of choices for the computer to choose from

//Create a operation that will output the result of the play e.g if the computer chooses paper and we choose rock we lose

//Create a function that will strat the game by prompting us to get the result

//Computer chooses a value from the array based on the arrays length and outputs the result

window.onload = function() {
    const container = document.createElement("div");
    container.id = "container";
    const parent = document.querySelector("body");
    parent.appendChild(container);
    const butt1 = document.createElement("button");
    butt1.textContent = "Rock";
    const butt2 = document.createElement("button");
    butt2.textContent = "Paper";
    const butt3 = document.createElement("button");
    butt3.textContent = "Scissors";
    container.appendChild(butt1);
    container.appendChild(butt2);
    container.appendChild(butt3);
    
  butt1.addEventListener("click"){
    userChoice = "rock";
  }
}



function computerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

//Plays round
function playRound(userChoice, compChoice){
    //Prints the choices
    console.log(`Your choice: ${userChoice}`)
    console.log(`Computer choice: ${compChoice}`)

    if (userChoice === compChoice){
        console.log("Its a tie!") //If the choices are equal print tie
        startGame(); //Starts the game again
    }
        else if (userChoice === "rock" && compChoice ==="scissors"){//Rock vs scissors
            return("You Win!");
        }
        else if (userChoice === "scissors" && compChoice === "rock"){//scissors vs rock
           return("You loose!");
        }
        else if (userChoice === "paper" && compChoice ==="rock"){//paper vs rock
           return("You Win!");
        }
        else if (userChoice === "rock" && compChoice === "paper"){//rock vs paper
            return("You loose!");
        }
        else if (userChoice === "scissors" && compChoice ==="paper"){//scissors vs paper
            return("You Win!");
        }
        else if (userChoice === "paper" && compChoice === "scissors"){//paper vs scissors
            return("You loose!");
        }
    }

//Starts game

function startGame(){
    let userChoice;//Prompts user for input
    const compChoice = computerChoice();//Assigns constant to the result of the function
    const result = playRound(userChoice, compChoice) //Gets the result of the round
    console.log(result) //Outputs the result of the round
}

startGame();


//WORKING ON
//Create ui for the game

