{ 
const playGame = function(playerInput){
  clearMessages();

  const PlayerMove = getMoveName(playerInput); 
  console.log('Player move: ' + PlayerMove)

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Drawn number: ' + randomNumber);

  const ComputerMove = getMoveName(randomNumber);
  console.log('Computer move: ' + ComputerMove)

  function getMoveName(MoveId){
    console.log('Function getMoveName with argument: '+ MoveId + ' was called')
    if (MoveId == 1){
      return 'rock';
    } else if(MoveId == 2){
      return 'paper';
    } else if(MoveId == 3){
      return 'scissors';
    } else {
      printMessage('Unknown move with id ' + MoveId + '.');
      return 'unknown move';
    }
  }

  const displayResult = function(ComputerMove, PlayerMove){
    printMessage('My move: ' + ComputerMove);
    printMessage('Your move: ' + PlayerMove);
    console.log('Function displayResult with arguments: ' + ComputerMove +', '+ PlayerMove + ' was called')
    if (ComputerMove == 'rock' && PlayerMove == 'paper'){
      printMessage('YOU WON!');
    } else if (ComputerMove =='rock' && PlayerMove == 'scissors'){
      printMessage('YOU LOST :(');
    } else if (ComputerMove =='rock' && PlayerMove == 'rock'){
      printMessage('DRAW');
    } else if (ComputerMove =='paper' && PlayerMove == 'rock'){
      printMessage('YOU LOST :(');
    } else if (ComputerMove =='paper' && PlayerMove == 'scissors'){
      printMessage('YOU WON!');
    } else if (ComputerMove =='paper' && PlayerMove == 'paper'){
      printMessage('DRAW');
    } else if (ComputerMove =='scissors' && PlayerMove == 'paper'){
      printMessage('YOU LOST :(');
    } else if (ComputerMove =='scissors' && PlayerMove == 'rock'){
      printMessage('YOU WON!');
    } else if (ComputerMove=='scissors' && PlayerMove == 'scissors'){
      printMessage('DRAW');
    } else {
      printMessage('Choose a number between 1 and 3')
    }
  }
  displayResult(ComputerMove, PlayerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});
}