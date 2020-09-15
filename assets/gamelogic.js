/* eslint-disable import/extensions */
import GameBoard from './gameboard.js';
import Player from './player.js';

const GameLogic = (() => {
  const init = () => {
    const buttons = Array.from(document.getElementsByClassName('game-cell'));
    $('#modalNewGame').modal({backdrop: 'static'});

    let player1 = Player('NaN', 'X');
    let player2 = Player('NaN', 'O');
    

    document.getElementById('submitPlayers').onclick = () => {
      let p1Name = document.getElementById('player1').value;
      let p2Name = document.getElementById('player2').value;

      player1.name = p1Name;
      player2.name = p2Name;

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
          document.getElementById('modalText').innerText = player.name + ' has won the game!';
          $('#modalGameOver').modal({backdrop: 'static'});
          return 1;
        }
        if (GameBoard.isFull()){
          document.getElementById('modalText').innerText = 'The game is tie...';
          $('#modalGameOver').modal({backdrop: 'static'});
          return 1;
        }
        console.log(`${player.name} ${player.turns.toString()}`);
        player = (player === player1) ? player2 : player1;
      };
    });
    
  };

  return { init };
})();

export default GameLogic;