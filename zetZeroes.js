var setZeroes = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  let firstRowAreZeros = false;
  let firstColumnAreZeros = false;

  // first check if the row should be zero
  if (matrix[0].indexOf(0) >= 0) {
    firstRowAreZeros = true;
  }

  // check if the column should be zero
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      firstColumnAreZeros = true;
      break;
    }
  }

  // set any row that has zero to true on first item
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = true;
      }
    }
  }

  // set any column that has zero to true on the first item
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = true;
      }
    }
  }

  // set all the true columns to all zeros
  for (let j = 1; j < n; j++) {
    if (matrix[0][j] === true) {
      for (let i = 1; i < m; i++) {
        matrix[i][j] = 0;
      }
    }
  }

  // set all the true rows to all zeros
  for (let i = 1; i < m; i++) {
    if (matrix[i][0] === true) {
      for (let j = 1; j < n; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  // if rows are suppose to be zero set them
  if (firstRowAreZeros) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }

  if (firstColumnAreZeros) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === true) {
        matrix[i][j] = 0;
      }
    }
  }
};

const a = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
];
setZeroes(a);

const b = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5]
];
setZeroes(b);

const c = [[1], [0]];
setZeroes(c);
const d = [[1, 0]];
setZeroes(d);

const e = [
  [1, 1, 1],
  [0, 1, 2]
];
setZeroes(e);

const f = [
  [0, 0, 0, 5],
  [4, 3, 1, 4],
  [0, 1, 1, 4],
  [1, 2, 1, 3],
  [0, 0, 1, 1]
];
setZeroes(f);
