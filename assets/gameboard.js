const GameBoard = (() => {
  const cells = ['', '', '', '', '', '', '', '', ''];

  const mark = (cellIdx, sign) => {
    cells[cellIdx] = sign;
  };

  const renderContents = () => {
    Array.from(document.getElementsByClassName('game-cell')).forEach((element, idx) => {
      element.innerText = cells[idx];
    });
  };

  return { mark, renderContents };
})();

export default GameBoard;