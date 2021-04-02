import { expect, test } from '@jest/globals';
import Player from '../src/assets/player';

test('Returns true when has a matching win case', () => {
  const player = Player('Mario', 'X');
  player.turns.push(0, 4, 8);
  expect(player.isWinner()).toBeTruthy();
});

test('Returns false when doesn\'t have a matching win case', () => {
  const player = Player('Mario', 'X');
  player.turns.push(1, 4, 8);
  expect(player.isWinner()).toBeFalsy();
});