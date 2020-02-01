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

const test = result => {
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

  if (result.length !== answer.length) {
    console.log("error");
  } else if (result[0].length !== answer[0].length) {
    console.log("error daf");
  } else {
    for (let i = 0; i < answer.length; i++) {
      for (let j = 0; j < answer[i].length; j++) {
        if (answer[i][j] !== result[i][j]) {
          console.log("Error adfasdfafd");
          return;
        }
      }
    }
    console.log("Success");
  }
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

const validInGroup2 = (istart, iend, jstart, jend, board, item) => {
  for (let i = istart; i < iend; i++) {
    for (let j = jstart; j < jend; j++) {
      if (item === board[i][j]) {
        return false;
      }
    }
  }
  return true;
};

const validInGroup = (i, j, board, item) => {
  if (0 <= i && i < 3 && 0 <= j && j < 3) {
    // group 1
    // console.log(item, i, j, "group 1");
    return validInGroup2(0, 3, 0, 3, board, item);
  } else if (0 <= i && i < 3 && 3 <= j && j < 6) {
    // group 2
    return validInGroup2(0, 3, 3, 6, board, item);
  } else if (0 <= i && i < 3 && 6 <= j && j < 9) {
    // group 3
    return validInGroup2(0, 3, 6, 9, board, item);
  } else if (3 <= i && i < 6 && 0 <= j && j < 3) {
    // group 4
    return validInGroup2(3, 6, 0, 3, board, item);
  } else if (3 <= i && i < 6 && 3 <= j && j < 6) {
    // group 5
    return validInGroup2(3, 6, 3, 6, board, item);
  } else if (3 <= i && i < 6 && 6 <= j && j < 9) {
    // group 6
    return validInGroup2(3, 6, 6, 9, board, item);
  } else if (6 <= i && i < 9 && 0 <= j && j < 3) {
    // group 7
    return validInGroup2(6, 9, 0, 3, board, item);
  } else if (6 <= i && i < 9 && 3 <= j && j < 6) {
    // group 8
    return validInGroup2(6, 9, 3, 6, board, item);
  } else if (6 <= i && i < 9 && 6 <= j && j < 9) {
    // group 9
    return validInGroup2(6, 9, 6, 9, board, item);
  } else {
    throw Error("This can not happen");
  }
};

const solve = (i, j, board) => {
  if (i >= 9) {
    return true;
  }
  if (j >= 9) {
    return solve(i + 1, 0, board);
  }

  if (board[i][j] !== 0) {
    return solve(i, j + 1, board);
  }

  for (let x = 1; x <= 9; x++) {
    if (
      validInRow(i, board, x) &&
      validInCol(j, board, x) &&
      validInGroup(i, j, board, x)
    ) {
      board[i][j] = x;

      if (solve(i, j + 1, board)) {
        return true;
      }
      board[i][j] = 0;
    }
  }
  return false;
};

const sodokuSolver = board => {
  solve(0, 0, board);
  printBoard(board);
};

const printBoard = board => {
  for (let i = 0; i < 9; i++) {
    let row = [];
    for (let j = 0; j < 9; j++) {
      row.push(`${board[i][j]}`);
    }
    console.log(row.join(" "));
  }
};

sodokuSolver(board);
test(board);
