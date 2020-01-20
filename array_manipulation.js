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
  for (let i = 0; i < queries.length; i++) {
    const a = queries[i][0] - 1;
    const b = queries[i][1];
    const k = queries[i][2];

    frame[a] += k;
    if (b < n) {
      frame[b] -= k;
    }
  }

  let max = 0;
  let value = 0;
  for (let i = 0; i < frame.length; i++) {
    value += frame[i];
    if (max < value) {
      max = value;
    }
  }
  return max;
};

arrayManipulation(testN, testQueries);
