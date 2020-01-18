// cycle
// 2 3 4 1 5

const swap = (a, i, j) => {
  const temp = a[i];
  a[i] = a[j];
  a[j] = temp;
};

const minimumSwaps = a => {
  let numSwaps = 0;
  for (let i = 0; i < a.length; i++) {
    let P = a[i] - 1;
    while (P !== i) {
      swap(a, i, P);
      P = a[i] - 1;
      numSwaps += 1;
    }
  }
  console.log(numSwaps);
};

let test = [2, 3, 4, 1, 5];
let test2 = [2, 3, 4, 1, 6, 5];
minimumSwaps(test);
minimumSwaps(test2);
