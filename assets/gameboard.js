const GameBoard = (() => {

  const cells = ['', '', '', '', '', '', '', '', ''];

  const mark = (cellIdx, sign) => {
    cells[cellIdx] = sign;
  };

  const renderContents = () => {
    cells.forEach((value, idx) => {
      document.getElementById(idx+1).innerText = value;
    });
  };

  return { mark, renderContents };
})();

export default GameBoard;