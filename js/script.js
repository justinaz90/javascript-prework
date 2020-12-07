function getMoveName(argMoveId){
  console.log('Wywołano funkcję getMoveName z argumentem : '+ argMoveId)
  if (argMoveId == 1){
    return 'kamień';
  } else if(argMoveId == 2){
    return 'papier';
  } else if(argMoveId == 3){
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
}

function displayResult(argComputerMove, argPlayerMove){
  console.log('Wywołano funkcję displayResult z argumentami: ' + argComputerMove +', '+ argPlayerMove)
  if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove =='kamień' && argPlayerMove == 'nożyce'){
    printMessage('Ja wygrywam!');
  } else if (argComputerMove =='kamień' && argPlayerMove == 'kamień'){
    printMessage('Remis!');
  } else if (argComputerMove =='papier' && argPlayerMove == 'kamień'){
    printMessage('Ja wygrywam!');
  } else if (argComputerMove =='papier' && argPlayerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove =='papier' && argPlayerMove == 'papier'){
    printMessage('Remis!');
  } else if (argComputerMove =='nożyce' && argPlayerMove == 'papier'){
    printMessage('Ja wygrywam!');
  } else if (argComputerMove =='nożyce' && argPlayerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove=='nożyce' && argPlayerMove == 'nożyce'){
    printMessage('Remis!');
  } else {
    printMessage('Wybierz liczbę od 1 do 3!')
  }
}


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput); 
console.log('Ruch gracza to: ' + argPlayerMove)

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);
console.log('Ruch komputera to: ' + argComputerMove)

printMessage('Mój ruch to: ' + argComputerMove);

printMessage('Twój ruch to: ' + argPlayerMove);

displayResult(argComputerMove, argPlayerMove);

