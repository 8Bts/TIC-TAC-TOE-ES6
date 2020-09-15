// eslint-disable-next-line import/no-named-as-default-member
import Player from './player.js';

const buttons = Array.from(document.getElementsByClassName('game-cell'));


const player1 = Player('Rashid', 'X');
const player2 = Player('Rose', 'O');
let player = player1;
buttons.forEach((elem, idx) => {
  elem.id = idx;
  elem.onclick = () => {
    //elem.innerText = player.sign;
    player.turns.push(idx+1);
    if (player.isWinner()) {
      alert(`${player.name} has won the game!`);
    }
    console.log(`${player.name} ${player.turns.toString()}`);
    player = (player === player1) ? player2 : player1;
  };
});
