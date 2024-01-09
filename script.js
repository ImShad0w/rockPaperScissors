//What do we need to do?

//Create an array of choices for the computer to choose from

//Create a operation that will output the result of the play e.g if the computer chooses paper and we choose rock we lose

//Create a function that will strat the game by prompting us to get the result

//Computer chooses a value from the array based on the arrays length and outputs the result
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
        return "Its a tie!";//If the choices are equal print tie
    }
        else if (userChoice === "rock" && compChoice ==="scissors"){//Rock vs scissors
            return "You Win!";
        }
        else if (userChoice === "scissors" && compChoice === "rock"){//scissors vs rock
            return "You loose!";
        }
        else if (userChoice === "paper" && compChoice ==="rock"){//paper vs rock
            return "You Win!";
        }
        else if (userChoice === "rock" && compChoice === "paper"){//rock vs paper
            return "You loose!";
        }
        else if (userChoice === "scissors" && compChoice ==="paper"){//scissors vs paper
            return "You Win!";
        }
        else if (userChoice === "paper" && compChoice === "scissors"){//paper vs scissors
            return "You loose!";
        }
    }

//Starts game

function startGame(){
    const userChoice = prompt("Choose between rock, paper, scissors: ").toLowerCase();//Prompts user for input
    const compChoice = computerChoice();//Assigns constant to the result of the function
    const result = playRound(userChoice, compChoice); //Gets the result of the round
    console.log(result); //Outputs the result
}

startGame();