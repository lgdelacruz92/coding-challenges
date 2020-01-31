const a = [1, 4, 3, 2];
const b = [1, 2, 3, 4, 5, 6];
const c = [-1000, -1001, 4, 1];
const arrayPairSum = nums => {
  let sortedNums = nums.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < sortedNums.length; i += 2) {
    sum += sortedNums[i];
  }
  return sum;
};

arrayPairSum(a);
arrayPairSum(b);
arrayPairSum([]);
arrayPairSum(c);
