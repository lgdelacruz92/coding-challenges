const buildings = [
  [0, 2, 2],
  [1, 3, 3]
];

const overlap = (xi, xj) => {
  return (
    (xi[0] <= xj[0] && xj[0] <= xi[1]) || (xi[0] <= xj[1] && xj[1] <= xi[1])
  );
};

const getSkyline = buildings => {
  const b1 = buildings[0];
  const b2 = buildings[1];
  if (overlap(b1, b2)) {
    if (b2[2] > b1[2]) {
      b1[1] = b2[0];
    } else if (b2[2] < b1[2]) {
      b2[0] = b1[1];
    } else {
      b2[0] = b1[0];
    }
  }
  console.log(buildings);
};

getSkyline(buildings);
getSkyline([
  [0, 2, 3],
  [1, 3, 2]
]);
getSkyline([
  [0, 1, 2],
  [1, 2, 2]
]);
