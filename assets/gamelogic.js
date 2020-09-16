/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import GameBoard from './gameboard.js';
import Player from './player.js';

const GameLogic = (() => {
  const init = () => {
    const buttons = Array.from(document.getElementsByClassName('game-cell'));
    $('#modalNewGame').modal({ backdrop: 'static' });

    const player1 = Player('NaN', 'X');
    const player2 = Player('NaN', 'O');
    const indicator = document.getElementById('indicator');


    document.getElementById('submitPlayers').onclick = () => {
      const p1Name = document.getElementById('player1').value;
      const p2Name = document.getElementById('player2').value;

      player1.name = p1Name;
      player2.name = p2Name;
      indicator.innerText = `${player1.name}'s turn`;
      $('#modalNewGame').modal('hide');
    };
    document.getElementById('newGame').onclick = () => {
      window.location.reload();
    };


    let player = player1;
    buttons.forEach((elem, idx) => {
      elem.id = idx;
      elem.onclick = () => {
        GameBoard.mark(idx, player.sign);
        GameBoard.renderContents();
        player.turns.push(idx + 1);
        if (player.isWinner()) {
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
  };

  return { init };
})();

export default GameLogic;