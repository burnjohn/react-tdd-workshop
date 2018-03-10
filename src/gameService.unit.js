const { gameStatus } = require('./gameService');

test('X should win with horizontal match', () => {
  const board = [['X', 'X', 'X'], ['', '', ''], ['', '', '']];
  expect(gameStatus(board)).toBe('X');
});

test('O should win with diagonal match', () => {
  const board = [['O', '', ''], ['', 'O', ''], ['', '', 'O']];
  expect(gameStatus(board)).toBe('O');
});

test('X should win with vertical match', () => {
  const board = [['X', '', ''], ['X', '', ''], ['X', '', '']];
  expect(gameStatus(board)).toBe('X');
});