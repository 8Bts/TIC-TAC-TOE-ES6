/* eslint-disable import/extensions */
import GameBoard from './gameboard.js';
import Player from './player.js';

const GameLogic = (() => {
  const init = () => {
    const buttons = Array.from(document.getElementsByClassName('game-cell'));


    const player1 = Player('Rashid', 'X');
    const player2 = Player('Rose', 'O');
    let player = player1;
    buttons.forEach((elem, idx) => {
      elem.id = idx;
      elem.onclick = () => {
        GameBoard.mark(idx, player.sign);
        GameBoard.renderContents();
        player.turns.push(idx + 1);
        if (player.isWinner()) {
          alert(`${player.name} has won the game!`);
        }
        console.log(`${player.name} ${player.turns.toString()}`);
        player = (player === player1) ? player2 : player1;
      };
    });
  };

  return { init };
})();

export default GameLogic;