var options=['rock','paper','scissors']
var score=[0,0];
var btns = Array.from(document.querySelectorAll('button'))
var pl= document.getElementById('player')
var cp=document.getElementById('computer');
var rs=document.getElementById('result');
var cscore=document.getElementById('computerScore');
var pscore=document.getElementById('playerScore');
var finalScore=document.getElementsByClassName('finalScore');

function computerPlay(){
    
    return options[Math.floor(Math.random()*3)]
    
}

function playRound(computerSelection,playerSelection){
    pl.textContent=`you choose ${playerSelection}`
    cp.textContent=`computer choose ${computerSelection}`
   
    
    if(playerSelection == computerSelection)
    {
        console.log('tie') 
        rs.textContent=`Game is Tie`
        
    }
    else if(playerSelection == 'rock' && computerSelection =='scissors'|| playerSelection == 'paper' && computerSelection =='rock' || playerSelection == 'scissors' && computerSelection =='paper')
    {
        score[0]++
        rs.textContent=`You Win! ${playerSelection} beats ${computerSelection}`       
    }
    else 
    {
        score[1]++
        rs.textContent=` You loose ${computerSelection} beats ${playerSelection}`
    }
    
   
}
function game(e){
     playRound(computerPlay(),this.value)
     pscore.textContent=`${score[0]}`;
     cscore.textContent=`${score[1]}`;
    
        
    if(score[0]==5|| score[1]==5){
        var btn1=document.createElement("BUTTON");
        btn1.innerHTML="Play Again"
        btn1.setAttribute('id','reset')
        playArena.append(btn1);
        btn1.addEventListener('click',()=>window.location.reload());
        if(score[0]>score[1]){
           btns.forEach(btn=>btn.removeEventListener('click',game))
           finalScore[0].textContent="You Won the Game"
            }
        else{
            btns.forEach(btn=>btn.removeEventListener('click',game))
            finalScore[0].textContent="Computer Won the Game"
            
        }
      
    
      finalScore[0].classList.add('result');   
    }
   
    
   
}

function removeFunction(e){
 if(e.propertyName!="transform")return;   
   this.classList.remove('result');
    
}
finalScore[0].addEventListener('transitionend',removeFunction);
btns.forEach(btn=>btn.addEventListener('click',game))






