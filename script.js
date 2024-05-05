window.onload = function(){

  //Create the variables
  let userScore = 0;
  let computerScore = 0;
  const buttons = document.querySelectorAll("button")

 //Creates event listeners for each button
  buttons.forEach(button =>{
    button.addEventListener("click", function(){
      playRound(button.value)
    })
  })

  //Function for disabeling buttons when called
  function disableButtons(){
    buttons.forEach(elem =>{
      elem.disabled = true;
    })
  }

  //Computer choice function
  function computerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
  }

  //Created game logic
  function playRound (userChoice){
    let compChoice = computerChoice();
    let result = "";
    if (userChoice === compChoice){
      result = "It's a tie!";
    }
    else if((userChoice === "rock" && compChoice === "scissors")||
      (userChoice === "paper"&& compChoice ==="rock")||
      (userChoice === "scissors" && compChoice ==="paper")){
        result = "You win! " + userChoice + " against " + compChoice
        userScore += 1;
          if (userScore === 5){
          result = "Victory!, you won against the computer!"
          disableButtons();
      }
    }
    else{
      computerScore += 1;
      result = "You lost! " + userChoice + " against " + compChoice
        if(computerScore === 5){
        result = "Defeat! you lost against the computer"
        disableButtons();
      }
    }

    //Append the results and scores
    document.getElementById("result").innerHTML = result;
    document.getElementById("userScore").innerHTML = `Player: ${userScore}`
    document.getElementById("computerScore").innerHTML = `Computer: ${computerScore}`
  }
}
