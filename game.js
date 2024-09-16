let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
// console.log(choices);
const msg=document.querySelector("#msg");
const bgc=document.querySelector(".msg-container");
const userScorePara=document.querySelector("#you-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice = ()=>{
    const options=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
    //    console.log("you won the Game");
       msg.innerText=`your ${userChoice} beats ${compChoice}`;
       bgc.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        // console.log("you lose the Game");
        msg.innerText=`your ${userChoice} beaten by ${compChoice}`;
        bgc.style.backgroundColor="red";
    }
}

const drawGame=(userChoice)=>{
    // console.log("draw Game");
    msg.innerText=`draw game both user and computer choose ${userChoice}`;
    bgc.style.backgroundColor="skyblue";
}



 const playGame= (userChoice)=>{
    console.log("choice was clicked",userChoice);
    //generate computer choice -> modular
    // const compChoice = genCompChoice();
    const compChoice= genCompChoice();
    console.log("computer choice",compChoice);

    if(userChoice === compChoice){
        //Draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "paper"){
            //rock,scissors
            userWin= compChoice=== "rock" ? true:false;
        }
        else if (userChoice === "rock"){
            // paper, scissors
            userWin = compChoice=== "scissors" ? true:false;
        }
        else{
            //scissors
            userWin = compChoice === "paper" ? true:false;
        }
        showWinner(userWin,userChoice,compChoice);
    }

 }

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice); 
    });
});

