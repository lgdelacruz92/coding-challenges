let a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let b = [
  [1, 2],
  [3, 4]
];

let c = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

let d = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

function swap(a, x0, y0, x1, y1) {
  const temp = a[y0][x0];
  a[y0][x0] = a[y1][x1];
  a[y1][x1] = temp;
}

const rotateImage = a => {
  // rotate corners

  // 2x2
  // swap(a, 0, 0, 1, 0);
  // swap(a, 0, 0, 1, 1);
  // swap(a, 0, 0, 0, 1);

  // 3x3
  // swap(a, 0, 0, 2, 0);
  // swap(a, 0, 0, 2, 2);
  // swap(a, 0, 0, 0, 2);

  // swap(a, 1, 0, 2, 1);
  // swap(a, 1, 0, 1, 2);
  // swap(a, 1, 0, 0, 1);

  // 4x4
  // swap(a, 0, 0, 3, 0); // k - 1 - i, j
  // swap(a, 0, 0, 3, 3); // k - 1 - j, k - 1 - i
  // swap(a, 0, 0, 0, 3); // i, k - 1 - j

  // swap(a, 1, 0, 3, 1); // k - 1 - i, j
  // swap(a, 1, 0, 2, 3); // k - 1 - j, k - 1 - i
  // swap(a, 1, 0, 0, 2); // i, k - 1 - j

  // swap(a, 2, 0, 3, 2); // k - 1 - i, j
  // swap(a, 2, 0, 1, 3); // k - 1 - j, k - 1 - i
  // swap(a, 2, 0, 0, 1); // i, k - 1 - j

  // swap(a, 1, 1, 2, 1); // k - 1 - i, j
  // swap(a, 1, 1, 2, 2); // k - 1 - j, k - 1 - i
  // swap(a, 1, 1, 1, 2); // i, k - 1 - j

  const k = a.length;
  const half = Math.floor(k / 2);
  for (let i = 0; i < half; i++) {
    for (let j = i; j < k - 1 - i; j++) {
      // j: 0, 1, 2
      // i: 0, 1
      swap(a, j, i, k - 1 - i, j);
      swap(a, j, i, k - 1 - j, k - 1 - i);
      swap(a, j, i, i, k - 1 - j);
    }
  }
};

const rotate4x4 = a => {
  swap(a, 0, 0, 3, 0); // k - 1 - i, j
  swap(a, 0, 0, 3, 3); // k - 1 - j, k - 1 - i
  swap(a, 0, 0, 0, 3); // i, k - 1 - j

  swap(a, 1, 0, 3, 1); // k - 1 - i, j
  swap(a, 1, 0, 2, 3); // k - 1 - j, k - 1 - i
  swap(a, 1, 0, 0, 2); // i, k - 1 - j

  swap(a, 2, 0, 3, 2); // k - 1 - i, j
  swap(a, 2, 0, 1, 3); // k - 1 - j, k - 1 - i
  swap(a, 2, 0, 0, 1); // i, k - 1 - j

  swap(a, 1, 1, 2, 1); // k - 1 - i, j
  swap(a, 1, 1, 2, 2); // k - 1 - j, k - 1 - i
  swap(a, 1, 1, 1, 2); // i, k - 1 - j
};

const print = a => {
  for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
  }
};

rotateImage(c);
print(c);
rotate4x4(d);
print(d);
