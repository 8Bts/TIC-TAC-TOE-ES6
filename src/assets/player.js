const Player = (name, sign) => {
  const winCases = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7], [2, 4, 6], [2, 5, 8],
    [3, 4, 5], [6, 7, 8],
  ];

  const turns = [];
  let wonCase = [];

  const isWinner = () => {
    // eslint-disable-next-line no-restricted-syntax
    for (const winCase of winCases) {
      const won = winCase.every(elem => turns.includes(elem));
      if (won) {
        wonCase = winCase;
        return true;
      }
    }
    return false;
  };

  const getWonCase = () => wonCase;

  return {
    name, sign, turns, isWinner, getWonCase,
  };
};

export default Player;
