const testArray = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

const hourglassSum = arr => {
  let max = -100000;
  for (let i = 1; i < arr.length - 1; i++) {
    let currentSum = 0;
    for (let j = 1; j < arr[i].length - 1; j++) {
      const topLeft = arr[i - 1][j - 1];
      const top = arr[i - 1][j];
      const topRight = arr[i - 1][j + 1];
      const middle = arr[i][j];
      const bottomLeft = arr[i + 1][j - 1];
      const bottom = arr[i + 1][j];
      const bottomRight = arr[i + 1][j + 1];
      currentSum =
        topLeft + top + topRight + middle + bottomLeft + bottom + bottomRight;

      if (max < currentSum) {
        max = currentSum;
      }
    }
  }
  return max;
};

console.log(hourglassSum(testArray));
