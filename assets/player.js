const Player = (name, sign) => {
  const winCases = [
    [1, 2, 3], [1, 4, 7], [1, 5, 9],
    [2, 5, 8], [3, 5, 7], [3, 6, 9],
    [4, 5, 6], [7, 8, 9],
  ];

  const turns = [];

  const isWinner = () => winCases.some(winCase => winCase.every(elem => turns.includes(elem)));


  return {
    name, sign, turns, isWinner,
  };
};

export default Player;
