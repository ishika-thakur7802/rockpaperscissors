// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
const rps={
    playerScore: 0,
    computerScore: 0,
    playerChoice: "none",
    computerChoice:"none",
    playerChoices: ["rock","paper","scissors"],
    getPlayerChoice: function getPlayerChoice(pChoice, cChoice){
        if(pChoice==cChoice){
            console.log("Computer chose the same");
        }
        else if(pChoice="rock" && cChoice=="paper")
        {
            this.computerScore= (this.computerScore)+1;
        }

        else if(pChoice=="paper" && cChoice=="rock")
        {
            this.playerScore= (this.playerScore)+1;
        }

        else if(pChoice=="rock" && cChoice=="scissors")
        {
            this.playerScore= (this.playerScore)+1;
        }

        else if(pChoice=="scissors" && cChoice=="rock"){
            this.computerScore= (this.computerScore)+1;
        }
        else if(pChoice=="paper" && cChoice=="scissors"){
            this.computerScore= (this.computerScore)+1;
        }

        else if(pChoice=="scissors" && cChoice=="paper"){
            this.playerScore= (this.playerScore)+1;
        }

        else{
            console.log("Invalid");
        }

        return (computerScore,playerScore);
    },
    getWinningPlayer: function getWinningPlayer(computerScore, playerScore){
        if(this.computerScore> this.playerScore){
            console.log("Computer Won!");
        }

        else if(this.playerScore> this.computerScore){
            console.log("Player Won!");
        }

        else{
            console.log("TIE");
        }
    },

    reset: function reset(computerScore, playerScore){
        computerScore=playerScore=0;
    },
}
    console.log("New Round: Yes or No");
    const playerChoice= prompt("Enter Yes or No");
    while (playerChoice=="Yes"){
        rps.getPlayerChoice();
        rps.getWinningScore();
        console.log("New Round: Yes or No");
        playerChoice= prompt("Enter Yes or No");
        rps.reset();
    }
   rps.reset();
   console.log("Thankyou!")
}