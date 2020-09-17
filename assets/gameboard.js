const GameBoard = (() => {
  const cells = ['', '', '', '', '', '', '', '', ''];

  const mark = (cellIdx, sign) => {
    cells[cellIdx] = sign;
  };

  const renderContents = () => {
    Array.from(document.getElementsByClassName('game-cell')).forEach((element, idx) => {
      element.innerText = cells[idx];
      if (cells[idx] === 'X') {
        element.style.color = 'blue';
      } else {
        element.style.color = 'red';
      }
    });
  };

  const isFull = () => {
    if (cells.every(cell => cell !== '')) {
      return true;
    }
    return false;
  };

  return { mark, renderContents, isFull };
})();

export default GameBoard;