let userScore=0;
let ComputerScore=0;
const userPoint=document.querySelector("#user-score");
const CompPoint=document.querySelector("#computer-score");
const msg=document.querySelector("#msg");

const choices=document.querySelectorAll(".choice");
console.log(choices);

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked " ,userChoice);
        predictWinner(userChoice);

    })
})

const compChoice=()=>{
    const Choices=["stone", "paper", "scissor"];
    const ran=Math.floor(Math.random()*3);
    return Choices[ran];
}

const predictWinner=(userChoice)=>{
   const computerChoice=compChoice();
   if(computerChoice==userChoice){
    console.log("Game was Draw");
    msg.innerText="GAME WAS DRAW!! PLAY AGAIN";
    msg.style.backgroundColor="black";
    msg.style.color="white";
   }
   else if(computerChoice=="paper" && userChoice=="scissor"){
    userWin=true;
    console.log("User is winner");
    userScore++;
    userPoint.innerText=userScore;
    msg.innerText=`YOU WIN! YOUR ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor="green";
    msg.style.color="white";
   }
   else if(computerChoice=="paper" && userChoice=="stone"){
    userWin=false;
    console.log("comp is winner");
    ComputerScore++;
    CompPoint.innerText=ComputerScore;
    msg.innerText=`YOU loose!  ${userChoice} is beaten by  ${computerChoice}`;
    msg.style.backgroundColor="red";
    msg.style.color="white";

   }
   else if(computerChoice=="stone" && userChoice=="paper"){
    userWin=true;
    console.log("User is winner");
    userScore++;
    userPoint.innerText=userScore;
    msg.innerText=`YOU WIN! YOUR ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor="green";
    msg.style.color="white";
   }
   else if(computerChoice=="stone" && userChoice=="scissor"){
    userWin=false;
    console.log("comp is winner");
    ComputerScore++;
    CompPoint.innerText=ComputerScore;
    msg.innerText=`YOU loose!  ${userChoice} is beaten by  ${computerChoice}`;
    msg.style.backgroundColor="red";
    msg.style.color="white";
   }
   else if(computerChoice=="scissor" && userChoice=="paper"){
    userWin=false;
    console.log("comp is winner");
    ComputerScore++;
    CompPoint.innerText=ComputerScore;
    msg.innerText=`YOU loose!  ${userChoice} is beaten by  ${computerChoice}`;
    msg.style.backgroundColor="red";
    msg.style.color="white";
   }
   else if(computerChoice=="scissor" && userChoice=="stone"){
    userWin=true;
    console.log("User is winner");
    userScore++;
    userPoint.innerText=userScore;
    msg.innerText=`YOU WIN! YOUR ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor="green";
    msg.style.color="white";
   }
}