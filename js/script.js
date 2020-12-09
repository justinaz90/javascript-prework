function playGame(playerInput){
  clearMessages();

  function getMoveName(argMoveId){
    console.log('Function getMoveName with argument: '+ argMoveId + ' was called')
    if (argMoveId == 1){
      return 'rock';
    } else if(argMoveId == 2){
      return 'paper';
    } else if(argMoveId == 3){
      return 'scissors';
    } else {
      printMessage('Unknown move with id ' + argMoveId + '.');
      return 'unknown move';
    }
  }

  function displayResult(argComputerMove, argPlayerMove){
    console.log('Function displayResult with arguments: ' + argComputerMove +', '+ argPlayerMove + ' was called')
    if (argComputerMove == 'rock' && argPlayerMove == 'paper'){
      printMessage('YOU WON!');
    } else if (argComputerMove =='rock' && argPlayerMove == 'scissors'){
      printMessage('YOU LOST :(');
    } else if (argComputerMove =='rock' && argPlayerMove == 'rock'){
      printMessage('DRAW');
    } else if (argComputerMove =='paper' && argPlayerMove == 'rock'){
      printMessage('YOU LOST :(');
    } else if (argComputerMove =='paper' && argPlayerMove == 'scissors'){
      printMessage('YOU WON!');
    } else if (argComputerMove =='paper' && argPlayerMove == 'paper'){
      printMessage('DRAW');
    } else if (argComputerMove =='scissors' && argPlayerMove == 'paper'){
      printMessage('YOU LOST :(');
    } else if (argComputerMove =='scissors' && argPlayerMove == 'rock'){
      printMessage('YOU WON!');
    } else if (argComputerMove=='scissors' && argPlayerMove == 'scissors'){
      printMessage('DRAW');
    } else {
      printMessage('Choose a number between 1 and 3')
    }
  }


  let argPlayerMove = getMoveName(playerInput); 
  console.log('Player move: ' + argPlayerMove)

  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Drawn number: ' + randomNumber);

  let argComputerMove = getMoveName(randomNumber);
  console.log('Computer move: ' + argComputerMove)

  printMessage('My move: ' + argComputerMove);

  printMessage('Your move: ' + argPlayerMove);

  displayResult(argComputerMove, argPlayerMove);

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