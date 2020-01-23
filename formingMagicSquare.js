const test = [
  [4, 8, 2],
  [4, 5, 7],
  [6, 1, 6]
];

const formingMagicSquare = a => {
  const topL = a[0][0];
  const top = a[0][1];
  const topR = a[0][2];
  const left = a[1][0];
  const mid = a[1][1];
  const right = a[1][2];
  const bottomL = a[2][0];
  const bottom = a[2][1];
  const bottomR = a[2][2];
  const r1 = topL + top + topR;
  const r2 = left + mid + right;
  const r3 = bottomL + bottom + bottomR;
  const c1 = topL + left + bottomL;
  const c2 = top + mid + bottom;
  const c3 = topR + right + bottomR;
  const d1 = topL + mid + bottomR;
  const d2 = topR + mid + bottomL;
  console.log(r1, r2, r3, c1, c2, c3, d1, d2);
};

formingMagicSquare(test);
