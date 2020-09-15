const GameBoard = (() => {
  const cells = ['', '', '', '', '', '', '', '', ''];

  const mark = (cellIdx, sign) => {
    cells[cellIdx] = sign;
  };

  const renderContents = () => {
    Array.from(document.getElementsByClassName('game-cell')).forEach((element, idx) => {
      element.innerText = cells[idx];
      if(cells[idx] === 'X'){
        element.style.color = 'blue';
      }else {
        element.style.color = 'red';
      }
    });
  };

  return { mark, renderContents };
})();

export default GameBoard;