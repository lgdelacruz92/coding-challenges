const a = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
];

const b = [
  [0, 0],
  [0, 0]
];

const c = [
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0]
];

const d = [[1], [0]];
const e = [[0]];

const createKey = (i, j) => {
  return `${i}_${j}`;
};

const canReachEnd = (grid, i, j, memo) => {
  if (i >= grid.length) return false;

  if (j >= grid[0].length) return false;

  if (grid[i][j] === 1) {
    return false;
  }

  if (i === grid.length - 1 && j === grid[0].length - 1) {
    return true;
  }

  if (memo[createKey(i, j)] === true) {
    return true;
  }

  memo[createKey(i, j)] = true;
  if (!canReachEnd(grid, i, j + 1, memo)) {
    memo[createKey(i, j)] = false;
    return true;
  }
  if (!canReachEnd(grid, i + 1, j, memo)) {
    memo[createKey(i, j)] = false;
    return true;
  }

  return false;
};

const uniquePathsWithObstacles = grid => {
  if (grid.length < 1) {
    return 0;
  } else if (grid[0][0] === 0 && grid.length === 1) {
    return 1;
  } else if (grid[0][0] === 1) {
    return 0;
  }

  let memo = {};
  canReachEnd(grid, 0, 0, memo);
  return Object.keys(memo).length;
};

console.log(uniquePathsWithObstacles(a));
console.log(uniquePathsWithObstacles(b));
console.log(uniquePathsWithObstacles(c));
console.log(uniquePathsWithObstacles(d));
console.log(uniquePathsWithObstacles(e));
