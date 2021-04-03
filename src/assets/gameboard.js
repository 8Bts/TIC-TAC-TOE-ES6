const GameBoard = (() => {
  const cells = ['', '', '', '', '', '', '', '', ''];

  const mark = (cellIdx, sign) => {
    if (typeof cellIdx === 'number' && cellIdx >= 0 && cellIdx < 9)cells[cellIdx] = sign;
  };

  const renderContents = () => {
    Array.from(document.getElementsByClassName('game-cell')).forEach((element, idx) => {
      element.innerText = cells[idx];
      element.setAttribute('id', `cell#${idx}`);
      if (cells[idx] === 'X') {
        element.style.color = 'blue';
      } else {
        element.style.color = 'red';
      }
    });
  };

  const markWonCase = wonCase => {
    wonCase.forEach(idx => {
      document.getElementById(`cell#${idx}`).style.backgroundColor = 'red';
    });
  };

  const isFull = () => {
    if (cells.every(cell => cell !== '')) {
      return true;
    }
    return false;
  };

  return {
    mark, renderContents, isFull, markWonCase,
  };
})();

export default GameBoard;