const board = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

const test = () => {
  const answer = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ];
};

const validInRow = (i, board, item) => {
  for (let t = 0; t < 9; t++) {
    if (item === board[i][t]) {
      return false;
    }
  }
  return true;
};

const validInCol = (j, board, item) => {
  for (let t = 0; t < 9; t++) {
    if (item === board[t][j]) {
      return false;
    }
  }
  return true;
};

const solve = (i, j, board, item) => {
  if (item !== 0) {
    return;
  } else {
    for (let x = 1; x <= 9; x++) {
      // console.log(i, j, x, validInRow(i, board, x));
      // console.log(i, j, x, validInCol(j, board, x));
    }
    console.log("------");
  }
};

const sodokuSolver = board => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      solve(i, j, board, board[i][j]);
    }
  }
};

sodokuSolver(board);
