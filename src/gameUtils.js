export const VERTICAL_WINS_LIST = [
  [['X', '', ''], ['X', '', ''], ['X', '', '']],
  [['', 'X', ''], ['', 'X', ''], ['', 'X', '']],
  [['', '', 'X'], ['', '', 'X'], ['', '', 'X']],
];

export const DIAGONAL_WINS_LIST = [
  [['X', '', ''], ['', 'X', ''], ['', '', 'X']],
  [['', '', 'X'], ['', 'X', ''], ['X', '', '']],
];

export const HORISONTAL_WINS_LIST = [
  [['X', 'X', 'X'], ['', '', ''], ['', '', '']],
  [['', '', ''], ['X', 'X', 'X'], ['', '', '']],
  [['', '', ''], ['', '', ''], ['X', 'X', 'X']],
];

export const WIN_LIST = [...DIAGONAL_WINS_LIST, ...VERTICAL_WINS_LIST, ...HORISONTAL_WINS_LIST];
