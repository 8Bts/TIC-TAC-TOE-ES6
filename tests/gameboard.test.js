import { expect, test } from '@jest/globals';
import GameBoard from '../src/assets/gameboard';

test('Returns true when gameboard is full as well as game is tie', () => {
  for (let index = 0; index < 9; index += 1) {
    GameBoard.mark(index, index % 2 === 0 ? 'O' : 'X');
  }

  expect(GameBoard.isFull()).toBeTruthy();
});