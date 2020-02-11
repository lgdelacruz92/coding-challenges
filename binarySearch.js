const bs = (a, t, i, j) => {
  if (i === j) {
    if (a[i] === t) return i;
    else return -1;
  }
  const half = Math.floor((j - i) / 2) + i;

  if (t < a[half]) {
    return bs(a, t, i, half);
  } else if (t > a[half]) {
    return bs(a, t, half + 1, j);
  } else {
    return half;
  }
};

const binarySearch = (a, t) => {
  return bs(a, t, 0, a.length);
};

// target = 8
const a = [1, 2, 3, 4, 5, 6, 8, 10, 20];

console.log(binarySearch(a, 8));
console.log(binarySearch(a, 7));
