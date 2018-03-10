import { isEqual } from 'lodash';
import { WIN_LIST } from './gameUtils';

const purgeSymbols = (pattern, board) => board.toString().replace(new RegExp(pattern, 'g'), '');

const hasWinSet = (userSymbol, board) => {
  let userBoardSet = '';

  if (userSymbol === 'O') {
    const a = purgeSymbols('X', board);
    userBoardSet = a.replace(/O/g, 'X');
  } else {
    userBoardSet = purgeSymbols('O', board);
  }

  return !!WIN_LIST.some(winSet => isEqual(winSet.toString(), userBoardSet));
};

export const gameStatus = board => {
  if (hasWinSet('X', board)) {
    return 'X';
  }
  if (hasWinSet('O', board)) {
    return 'O';
  }

  return null;
};
