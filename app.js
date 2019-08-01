function computerPlay(){
    var options=['Rock','Paper','Scissors']
    return options[Math.floor(Math.random()*3)]
    
}
function playerChoice(){
    let playerSelection;
    do{playerSelection = prompt("Whatchu gonna play? (Rock, Paper, or Scissors)").toLowerCase();
      }while(playerSelection!='scissors'&& playerSelection != 'rock'&&playerSelection!='paper')
     
     return playerSelection;
}

function playRound(playerSelection,computerSelection){
    var result
    console.log(`Computer turn :-, ${computerSelection}`)
    if(playerSelection == computerSelection)
    {
        console.log('Tie')
        return playRound(playerChoice(),computerPlay())
    }
    else if(playerSelection == 'rock' && computerSelection =='Scissors'|| playerSelection == 'paper' && computerSelection =='Rock' || playerSelection == 'scissors' && computerSelection =='Paper')
    {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        return true
    }
    else 
    {
        console.log(` You loose ${computerSelection} beats ${playerSelection}`);
        return false
    }
    

}

function game(){
    console.log('howmany times')
    let score=[0,0];
    for (var i = 0;i<5;i++){
        playRound(playerChoice(),computerPlay())?score[0]++: score[1]++;
        console.log(`Your score ${score[0]} and computer score is ${score[1]}`)
        
    }
    if(score[0]>score[1]){
        console.log('You win')
    }
    else{
        console.log('computer win')}
    if(window.prompt('Do u want to play again') =='y' || window.prompt('Do u want to play again')=='Y') game();
    
    
}

