const testN = 5;
const testQueries = [
  [1, 2, 100],
  [2, 5, 100],
  [3, 4, 100]
];

const createFrame = n => {
  let frame = [];
  for (let i = 0; i < n; i++) {
    frame.push(0);
  }
  return frame;
};

const arrayManipulation = (n, queries) => {
  let frame = createFrame(n);
  let startAdd = false;
  let max = 0;
  const m = queries.length; // m = length;
  for (let i = 0; i < m; i++) {
    const a = queries[i][0];
    const b = queries[i][1];
    const k = queries[i][2];

    for (let j = 0; j < n; j++) {
      if (a - 1 <= j && j <= b - 1) {
        startAdd = true;
      } else {
        startAdd = false;
      }

      if (startAdd) {
        frame[j] = frame[j] + k;
      }

      if (max < frame[j]) {
        max = frame[j];
      }
    }
  }
  return max;
};

arrayManipulation(testN, testQueries);
