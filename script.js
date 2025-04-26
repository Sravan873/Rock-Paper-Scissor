let useScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score")
const compScorepara = document.querySelector("#comp-score")
 
const genCompChoice = () =>{
    //rock , paper, scissor
    const options = ["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText ="Game was Draw.play again"
    msg.style.backgroundColor  = "#081b31"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin ){
       useScore++;
       userScorepara.innerText = useScore;
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor  = "green"
    } else {
        compScore++;
       compScorepara.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor  = "red"
    }
}

const playGame = (userChoice) =>{
   
    //generate computer choice -> modular
    const compChoice = genCompChoice();
  


    if (userChoice === compChoice){
        //draw game
        drawGame();
    }else {
        let userWin = true;
        if(userChoice  === "rock"){
            //scissors , paper
            userWin = compChoice === "paper" ? false  :  true;
        } else if(userChoice  === "paper"){
            //scissors , rock
            userWin = compChoice === "scissors" ? false  :  true;
       } else {
        //rock , paper
        userWin = compChoice === "rock" ? false  :  true;
  }
       showWinner(userWin , userChoice , compChoice)
 }
};

choices.forEach((choice) => {
     choice.addEventListener("click" , () =>  { 
        const userChoice = choice.getAttribute("id")
         playGame(userChoice);
    });
});
