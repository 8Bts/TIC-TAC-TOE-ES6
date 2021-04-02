import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

import './styles/style.css';
import Player from './player';
import GameBoard from './gameboard';
import _beep from './audio/beep.mp3';

const buttons = Array.from(document.getElementsByClassName('game-cell'));
$('#modalNewGame').modal({ backdrop: 'static' });

const player1 = Player('NaN', 'X');
const player2 = Player('NaN', 'O');
const indicator = document.getElementById('indicator');

document.getElementById('submitPlayers').onclick = () => {
  const p1Name = document.getElementById('player1').value;
  const p2Name = document.getElementById('player2').value;

  if (p1Name === '' || p2Name === '') {
    document.getElementById('flash').innerHTML = '<li>Please fill the name fields to start the game</li>';
    return 0;
  } if (p1Name === p2Name) {
    document.getElementById('flash').innerHTML = '<li>Please don\'t use same player names</li>';
    return 0;
  }

  player1.name = p1Name;
  player2.name = p2Name;
  indicator.innerText = `${player1.name}'s turn`;
  $('#modalNewGame').modal('hide');
  return 1;
};

document.getElementById('newGame').onclick = () => {
  window.location.reload();
};


let player = player1;
const beep = new Audio(_beep);
buttons.forEach((elem, idx) => {
  elem.id = idx;
  elem.onclick = () => {
    beep.play();
    GameBoard.mark(idx, player.sign);
    GameBoard.renderContents();
    player.turns.push(idx);
    const isWinner = player.isWinner();
    if (isWinner) {
      GameBoard.markWonCase(player.getWonCase());
      document.getElementById('modalText').innerText = `${player.name} has won the game!`;
      $('#modalGameOver').modal({ backdrop: 'static' });
      return 1;
    }
    if (GameBoard.isFull()) {
      document.getElementById('modalText').innerText = 'The game is tie...';
      $('#modalGameOver').modal({ backdrop: 'static' });
      return 1;
    }
    player = (player === player1) ? player2 : player1;
    indicator.innerText = `${player.name}'s turn`;
    return 0;
  };
});